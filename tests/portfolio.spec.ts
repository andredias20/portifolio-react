import { test, expect } from "@playwright/test";
import { getQuitMessage, shouldCrashServer } from "../src/portfolio/easterEggs";

test.beforeEach(async ({ page }) => {
  await page.route("**/*", (route) =>
    new URL(route.request().url()).hostname === "127.0.0.1"
      ? route.continue()
      : route.abort(),
  );
});

test("home links to the full professional introduction and preserves language", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Sobre mim", exact: true })
    .filter({ has: page.locator("svg") })
    .click();
  await expect(page).toHaveURL("/about");
  await expect(
    page.getByRole("heading", { name: "Prazer, André." }),
  ).toBeInViewport();
  await page.getByRole("button", { name: "Mudar para inglês" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", { name: "Hey, I’m André." }),
  ).toBeVisible();
  await page.locator(".page-flow").click();
  await expect(page).toHaveURL("/projects");
  await page.locator(".project-card").click();
  await expect(
    page.getByRole("heading", { name: "A website to tell my story." }),
  ).toBeVisible();
  await page.locator(".page-flow").click();
  await expect(page).toHaveURL("/projects");
});

test("mobile menu closes and introduction comes before the portrait", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Alternar menu" }).click();
  await page
    .locator(".site-nav")
    .getByRole("link", { name: "Sobre mim" })
    .click();
  await expect(
    page.getByRole("button", { name: "Alternar menu" }),
  ).toHaveAttribute("aria-expanded", "false");
  const copy = await page.locator(".about-grid .article-body").boundingBox();
  const photo = await page.locator(".about-grid img").boundingBox();
  expect(copy!.y).toBeLessThan(photo!.y);
});

test("photo expands, traps focus and restores focus on Escape", async ({
  page,
}) => {
  await page.goto("/setup");
  const trigger = page.locator(".photo-layer.is-active .photo-expand");
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("button", { name: "Fechar foto" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("button").last()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("server clicks and Enter share the eleven-interaction threshold; restart resets it", async ({
  page,
}) => {
  await page.goto("/setup");
  await page.getByRole("button", { name: "Servidor", exact: true }).click();
  await page.locator(".photo-layer.is-active .photo-expand").click();
  for (let i = 0; i < 4; i++)
    await page.locator(".expanded-photo-button").click();
  await page.keyboard.press("Escape");
  const input = page.getByRole("textbox", { name: "Comando do terminal" });
  for (let i = 0; i < 5; i++) await input.press("Enter");
  await expect(page.locator(".blue-screen")).toHaveCount(0);
  await input.press("Enter");
  await expect(page.locator(".blue-screen")).toBeVisible();
  await page.getByRole("button", { name: "Reiniciar" }).click();
  await expect(input).toBeVisible();
  await input.press("Enter");
  await expect(page.locator(".blue-screen")).toHaveCount(0);
});

test("known terminal commands retain their responses", async ({ page }) => {
  await page.clock.setFixedTime(new Date("2026-11-13T12:00:00Z"));
  await page.goto("/setup");
  const input = page.getByRole("textbox", { name: "Comando do terminal" });
  await input.fill(":wq");
  await input.press("Enter");
  await expect(page.getByRole("status")).toHaveText(
    "Quem fez, fez. Quem não fez, não faz mais",
  );
  await input.fill("sudo");
  await input.press("Enter");
  await expect(page.getByRole("status")).toContainText("grandes boletos");
});

test("Friday uses São Paulo time and crash requires more than ten interactions", () => {
  expect(shouldCrashServer(10)).toBe(false);
  expect(shouldCrashServer(11)).toBe(true);
  expect(getQuitMessage("pt", new Date("2026-11-14T02:59:00Z"))).toBe(
    "Quem fez, fez. Quem não fez, não faz mais",
  );
  expect(getQuitMessage("pt", new Date("2026-11-14T03:00:00Z"))).toBe(
    "Por hoje chega. Bora pedalar?",
  );
});

for (const width of [320, 390, 768, 1440])
  test(`pages fit ${width}px in both languages`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const language of ["pt", "en"]) {
      await page.goto("/");
      await page.evaluate(
        (value) => localStorage.setItem("portfolio-language", value),
        language,
      );
      for (const path of [
        "/",
        "/about",
        "/projects",
        "/projects/portfolio",
        "/articles",
        "/setup",
        "/life",
      ]) {
        await page.goto(path);
        await expect(page.locator("main h1")).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute(
          "lang",
          language === "pt" ? "pt-BR" : "en",
        );
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
          `${path}/${language} overflows ${width}px`,
        ).toBe(true);
      }
    }
  });

test("project code loads on demand and its custom elements escape shell layout rules", async ({
  page,
}) => {
  const loadedPages: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("/personal-projects/portfolio/Page.tsx"))
      loadedPages.push(request.url());
  });
  await page.goto("/");
  await page.goto("/projects");
  expect(loadedPages).toHaveLength(0);
  await page.locator(".project-card").click();
  await expect(page.locator(".portfolio-case-study")).toBeVisible();
  expect(loadedPages.length).toBeGreaterThan(0);
  const display = await page
    .locator(".portfolio-case-study")
    .evaluate((element) => {
      const nav = document.createElement("nav");
      element.append(nav);
      const result = getComputedStyle(nav).display;
      nav.remove();
      return result;
    });
  expect(display).toBe("block");
});

test("career highlights stay visible while responsibilities expand on demand", async ({
  page,
}) => {
  await page.goto("/about");
  await expect(page.locator(".career-highlight")).toHaveCount(7);
  const details = page.locator(".career-entry details").first();
  await expect(details).not.toHaveAttribute("open", "");
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details.locator(".tags")).toBeVisible();
});

test("the page flow connects all main sections and returns home", async ({
  page,
}) => {
  await page.goto("/");
  for (const destination of [
    "/about",
    "/projects",
    "/articles",
    "/setup",
    "/life",
    "/",
  ]) {
    await page.locator(".page-flow").click();
    await expect(page).toHaveURL(destination);
    await expect(page.locator("main h1")).toBeVisible();
  }
});

test("terminal status bar keeps its styling and separates labels at all widths", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const language of ["pt", "en"]) {
      await page.goto("/setup");
      await page.evaluate(
        (value) => localStorage.setItem("portfolio-language", value),
        language,
      );
      await page.reload();
      const footer = page.locator(".terminal-footer");
      await expect(footer).toHaveCSS("display", "flex");
      await expect(footer).toHaveCSS("background-color", "rgb(37, 47, 32)");
      const fits = await footer.evaluate((element) => {
        const bounds = element.getBoundingClientRect();
        const labels = [...element.querySelectorAll("span")].map((span) =>
          span.getBoundingClientRect(),
        );
        return (
          labels.every(
            (label) =>
              label.left >= bounds.left &&
              label.right <= bounds.right + 1 &&
              label.bottom <= bounds.bottom,
          ) &&
          labels.every((label, index) =>
            labels
              .slice(index + 1)
              .every(
                (other) =>
                  label.right <= other.left ||
                  other.right <= label.left ||
                  label.bottom <= other.top ||
                  other.bottom <= label.top,
              ),
          )
        );
      });
      expect(fits, `terminal footer overlap at ${width}px/${language}`).toBe(
        true,
      );
    }
  }
});
