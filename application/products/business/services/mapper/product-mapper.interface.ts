import type {ProductDTO} from "~/application/products/business/dtos/product.dto";
import type {ProductDetailDTO} from "~/application/products/business/dtos/product-detail.dto";

export interface ProductMapperInterface {
    mapToProducts(data:object[]): Promise<ProductDTO[]>;
    mapToProduct(data:object[]): Promise<ProductDetailDTO>;
}
