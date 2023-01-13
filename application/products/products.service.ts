import type {ProductDriverPort} from "./ports/product-driver.port";
import type {ProductDrivenPort} from "./ports/product-driven.port";
import type {ProductDetailDTO} from "./business/dtos/product-detail.dto";
import type {ProductDTO} from "./business/dtos/product.dto";
import {ProductMapperService} from "./business/services/mapper/product-mapper.service";
import {ProductResourcesConstants} from "./business/constants/product-resources.constants";

export function ProductsService(reader: ProductDrivenPort): ProductDriverPort {

    async function getProducts(): Promise<ProductDTO[]> {

        const response = await reader.get(ProductResourcesConstants.Products);

        // @ts-ignore
        const data = response['data'];

        if(!data || !data.length) {
            return <ProductDTO[]>[];
        }

        return await ProductMapperService.mapToProducts(data);
    }

    async function getProduct(id: number): Promise<ProductDetailDTO> {
        return <ProductDetailDTO>{};
    }

    return {
        getProducts,
        getProduct
    };
}
