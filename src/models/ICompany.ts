import {ICoordinetes} from "./ICoordinetes";

export interface ICompany {
    department: string,
    name: string,
    title: string,
    address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: number,
        coordinates: ICoordinetes,
        country: string
    }
}