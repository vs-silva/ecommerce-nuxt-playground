import {defineStore} from 'pinia';
import {StoreIds} from "~/stores/store-ids";
import {ProductsStore} from "~/stores/products-store";
import {AboutStore} from "~/stores/about-store";

export default {
    useProductStore: defineStore(StoreIds.ProductsStore, ProductsStore),
    useAboutStore: defineStore(StoreIds.AboutStore, AboutStore)
};
