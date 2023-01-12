import {defineStore} from 'pinia';
import {StoreIds} from "~/stores/store-ids";
import {ProductsStore} from "~/stores/products-store";

export default {
    useProductStore: defineStore(StoreIds.ProductsStore, ProductsStore)
};
