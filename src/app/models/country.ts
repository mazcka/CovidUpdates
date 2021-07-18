export interface Country {
    country: string;
    code: string;
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    latitude: number;
    longitude: number;
    lastChange: Date;
    lastUpdate: Date;
}

export interface CountryReport {
    country: string;
    provinces: ProvinceData[];
    latitude: number;
    longitude: number;
    date: Date;
}

export interface ProvinceData {
    province: string;
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;
}