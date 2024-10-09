import {IProdDimentionsModel} from "./IProdDimentionsModel";
import {IProdReviewsModel} from "./IProdReviewsModel";
import {IProdMetaModel} from "./IProdMetaModel";
import React from "react";

export interface IProductModel {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string,
    sku: string,
    weight: number,
    dimensions: IProdDimentionsModel,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: IProdReviewsModel[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: IProdMetaModel,
    images: string [],
    thumbnail: string,
    children?:React.ReactNode
}
