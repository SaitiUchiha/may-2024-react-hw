export default interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: number,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    ip: number,
    address: IAdress,
    macAddress: string,
    university: string,
    bank: IBank,
    company: ICompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: ICrypto,
    role: string
}

export interface IHair {
    color: string,
    type: string
}

export interface IAdress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: number,
    coordinates: ICoordinetes,
    country: string
}

export interface ICoordinetes {
    lat: number,
    lng: number
}

export interface IBank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

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

export interface ICrypto {
    coin: string,
    wallet: string,
    network: string
}