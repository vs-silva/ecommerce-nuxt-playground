import type {ProductDTO} from "~/application/products/business/dtos/product.dto";
import {ProductDetailDTO} from "~/application/products/business/dtos/product-detail.dto";

export interface ProductDriverPort {
    getProducts(): Promise<ProductDTO[]>;
    getProduct(productId:number): Promise<ProductDetailDTO>;
}
