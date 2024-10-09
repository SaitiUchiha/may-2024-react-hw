import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

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
            {/*<p>{item.dimensions}</p>*/}
            <p>{item.warrantyInformation}</p>
            <p>{item.shippingInformation}</p>
            <p>{item.availabilityStatus}</p>
            {/*<h4>{item.reviews}</h4>*/}
            <p>{item.returnPolicy}</p>
            <p>{item.minimumOrderQuantity}</p>
            {/*<p>{item.meta}</p>*/}
            <p>{item.images}</p>

        </div>
    );

}

export default Product;
