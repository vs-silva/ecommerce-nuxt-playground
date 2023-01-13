import type {ProductDTO} from "~/application/products/business/dtos/product.dto";

export interface ProductMapperInterface {
    mapToProducts(data:object[]): Promise<ProductDTO[]>
}
