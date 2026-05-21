import adc_logo from "@/assets/acd_logo.svg";

export function Logo() {
    return <div className="flex items-center gap-3">
        <div className="h-9 w-9">
            <img src={adc_logo} alt='André Dias logo'/>
        </div>
        <div className="text-name">
            <h1 className="text-lg font-semibold text-white">
                André Dias
            </h1>
        </div>
    </div>;
}