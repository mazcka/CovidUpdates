import { Country } from '../models/country';

export interface CountryState {
    countries: Country[];
}

export const arr: Country[] = [{
    country: "Albania",
    code: "AL",
    confirmed: 4358,
    recovered: 2463,
    critical: 17,
    deaths: 120,
    latitude: 41.153332,
    longitude: 20.168331,
    lastChange: new Date("2020-07-22T17:12:44+02:00"),
    lastUpdate: new Date("2020-07-22T20:15:03+02:00")
},
{
    country: "Hong Kong",
    code: "HK",
    confirmed: 2132,
    recovered: 1344,
    critical: 29,
    deaths: 14,
    latitude: 22.396428,
    longitude: 114.109497,
    lastChange: new Date("2020-07-22T11:00:53+02:00"),
    lastUpdate: new Date("2020-07-22T20:15:03+02:00")
},
{
    country: "Hungary",
    code: "HU",
    confirmed: 4366,
    recovered: 3283,
    critical: 4,
    deaths: 596,
    latitude: 47.162494,
    longitude: 19.503304,
    lastChange: new Date("2020-07-22T09:15:04+02:00"),
    lastUpdate: new Date("2020-07-22T20:15:03+02:00")
}
];


export const initialState: CountryState = {
    countries: arr
    // countries: []
};

