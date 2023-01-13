import {ref} from "@vue/reactivity";
import type {ProductDTO} from "../application/products/business/dtos/product.dto";
import type {ProductDetailDTO} from "../application/products/business/dtos/product-detail.dto";
import Products from "../application/products";

export function ProductsStore () {

    const products = ref(<ProductDTO[]>[]);
    const product = ref(<ProductDetailDTO>{});

    async function getProducts(): Promise<void> {
        products.value = await Products.getProducts();
    }

    async function getProductDetails(id: number): Promise<void> {
        product.value = await Products.getProduct(id);
    }

    return {
        products,
        product,
        getProducts,
        getProductDetails
    };

};
