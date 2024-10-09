import React, {FC} from 'react';
import {productsData} from "../../productsData";
import {IProductModel} from "../models/IProductModel";
import Product from "../product/Product";

const Products: FC = () =>{
    const products:IProductModel[] = productsData.products
    return (
        <div>
            {
                products.map((product:IProductModel)=>(
                    <Product item = {product}/>
                ))
            }
        </div>
    );

}

export default Products;
