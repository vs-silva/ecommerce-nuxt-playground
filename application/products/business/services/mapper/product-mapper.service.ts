import type {ProductMapperInterface} from "./product-mapper.interface";
import type {ProductDTO} from "../../dtos/product.dto";

async function mapToProducts(data: object[]): Promise<ProductDTO[]> {

    return data.map(product => <ProductDTO>{
        // @ts-ignore
        id: product['id'],
        // @ts-ignore
        title: product['title'],
        // @ts-ignore
        image: product['image'],
        // @ts-ignore
        price: product['price']
    });
}

export const ProductMapperService: ProductMapperInterface = {
    mapToProducts
};
