import {ref} from "@vue/reactivity";

export function ProductsStore () {

    const products = ref([]);
    const product = ref({});

    async function getProducts() {
        products.value = [];
    }

    async function getProductDetails() {
        product.value = {};
    }

    return {
        products,
        product,
        getProducts,
        getProductDetails
    };

};
