
export interface Country {
    continent: string;
    country: string;
    population: number;
    cases: Cases;
    deaths: Deaths;
    tests: Tests;
    day: string;
    time: Date;
}

export interface Cases {
    new: string;
    active: number;
    critical: number;
    recovered: number;
    total: number;
}

export interface Deaths {
    new: string;
    total: number;
}

export interface Tests {
    total: number;
}

export interface CountryMetadata {
    name: string;
}

export interface GeneralResponse<T> {
    get: string;
    parameters: any[];
    errors: string[];
    results: number;
    response: T;
}
