import {describe, it, expect, vi} from "vitest";
import Products from "../../products";
import type {ProductDrivenPort} from "../../products/ports/product-driven.port";
import {ProductsService} from "../../products/products.service";

describe('Product Tests', () => {

    const timeout:number = 60 * 1000;

    describe('Product Driver Port Tests', () => {

        it('getProduct should return an array of Products', async () => {

            const spy = vi.spyOn(Products, 'getProducts');
            const result = await Products.getProducts();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(result.length).toBeGreaterThan(0);

            expect(result[0]).toEqual(expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                price: expect.any(Number),
                image: expect.any(String),
            }));

        },{
            timeout: timeout
        });

        it('getProduct should return an empty array of Products if no product is provided or an error occurs during the fetching process', async () => {

            const fakeAdapter: ProductDrivenPort = {
                get: (resourceURI: string): Promise<object> => { return Promise.resolve({ data: []}); }
            };

            const fakeProductsService = ProductsService(fakeAdapter);

            const spy = vi.spyOn(fakeProductsService, 'getProducts');
            const result = await fakeProductsService.getProducts();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(result.length).toBe(0);

        },{
            timeout: timeout
        });

    });
});
