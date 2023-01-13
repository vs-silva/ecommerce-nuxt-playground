import {ProductDTO} from "~/application/products/business/dtos/product.dto";

export interface ProductDetailDTO extends ProductDTO {
    category: string;
    description: string;
}
