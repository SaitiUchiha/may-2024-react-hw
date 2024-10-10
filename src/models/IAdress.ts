import {ICoordinetes} from "./ICoordinetes";

export interface IAdress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: number,
    coordinates: ICoordinetes,
    country: string
}