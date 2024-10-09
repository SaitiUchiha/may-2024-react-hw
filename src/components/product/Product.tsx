import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
import {IProdReviewsModel} from "../models/IProdReviewsModel";


type TypeProps = {item:IProductModel} & {children?:React.ReactNode};

const Product: FC<TypeProps> = ({item}) =>{
    return (
        <div>
            <h2>{item.title}</h2>
            <h3>{item.id}</h3>
            <img src={item.thumbnail} alt={item.title}/>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <h1>Price: {item.price}</h1>
            <p>{item.discountPercentage}</p>
            <p>{item.rating}</p>
            <p>{item.stock}</p>
            <p>{item.tags}</p>
            <p>{item.brand}</p>
            <p>{item.sku}</p>
            <p>{item.weight}</p>
            <p>{item.dimensions.width}</p>
            <p>{item.dimensions.height}</p>
            <p>{item.dimensions.depth}</p>
            <p>{item.warrantyInformation}</p>
            <p>{item.shippingInformation}</p>
            <p>{item.availabilityStatus}</p>
            <p>{item.reviews.map((array: IProdReviewsModel) =>
                <span><b>{array.rating}</b><br/> <b>{array.reviewerName}</b><br/> {array.reviewerEmail}<br/> {array.date}<br/> {array.comment}<br/><br/></span>)}</p>
            <p>{item.returnPolicy}</p>
            <p>{item.minimumOrderQuantity}</p>
            <p>{item.meta.barcode}</p>
            <p>{item.meta.qrCode}</p>
            <p>{item.meta.createdAt}</p>
            <p>{item.meta.updatedAt}</p>
            <p>{item.images}</p>

        </div>
    );

}

export default Product;
