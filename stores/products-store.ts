import {ref} from "@vue/reactivity";

export function ProductsStore () {

    const products = ref([]);
    const product = ref({});

    async function getProducts(): Promise<void> {
        products.value = [];
    }

    async function getProductDetails(): Promise<void> {
        product.value = {};
    }

    return {
        products,
        product,
        getProducts,
        getProductDetails
    };

};
