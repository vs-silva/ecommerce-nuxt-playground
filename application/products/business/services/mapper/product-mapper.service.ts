import type {ProductMapperInterface} from "./product-mapper.interface";
import type {ProductDTO} from "../../dtos/product.dto";
import type {ProductDetailDTO} from "../../dtos/product-detail.dto";

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

async function mapToProduct(data: object[]): Promise<ProductDetailDTO> {
    return <ProductDetailDTO> {
        // @ts-ignore
        id: data['id'],
        // @ts-ignore
        title: data['title'],
        // @ts-ignore
        image: data ['image'],
        // @ts-ignore
        price: data['price'],
        // @ts-ignore
        description: data['description'],
        // @ts-ignore
        category: data['category']
    }
}

export const ProductMapperService: ProductMapperInterface = {
    mapToProducts,
    mapToProduct
};
