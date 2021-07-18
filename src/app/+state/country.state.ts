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
},
{
    country: "Israel",
    code: "IL",
    confirmed: 55695,
    recovered: 23205,
    critical: 273,
    deaths: 430,
    latitude: 31.046051,
    longitude: 34.851612,
    lastChange: new Date("2020-07-22T18:39:12+02:00"),
    lastUpdate: new Date("2020-07-22T20:15:03+02:00")
},
{
    country: "Singapore",
    code: "SG",
    confirmed: 48744,
    recovered: 44795,
    critical: 0,
    deaths: 27,
    latitude: 1.352083,
    longitude: 103.819836,
    lastChange: new Date("2020-07-22T16:37:12+02:00"),
    lastUpdate: new Date("2020-07-22T20:15:03+02:00")
}
];


export const initialState: CountryState = {
    countries: arr
    // countries: []
};
