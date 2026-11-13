export const heading = (label: string, title: string, description: string) => (
  <div className="page-heading">
    <span className="eyebrow">{label}</span>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);
