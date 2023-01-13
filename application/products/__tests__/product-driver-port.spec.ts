import {describe, it, expect, vi} from "vitest";
import Products from "../../products";
import {ProductsService} from "../../products/products.service";
import type {ProductDrivenPort} from "../../products/ports/product-driven.port";
import type {ProductDTO} from "../../products/business/dtos/product.dto";
import type {ProductDetailDTO} from "../../products/business/dtos/product-detail.dto";

describe('Product Tests', () => {

    const timeout:number = 60 * 1000;

    describe('Product Driver Port Tests | getProducts', () => {

        it('getProducts should return an array of Products', async () => {

            const spy = vi.spyOn(Products, 'getProducts');
            const result = await Products.getProducts();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(result.length).toBeGreaterThan(0);

            expect(result[0]).toStrictEqual(expect.objectContaining(<ProductDTO>{
                id: expect.any(Number),
                title: expect.any(String),
                price: expect.any(Number),
                image: expect.any(String),
            }));

        },{
            timeout: timeout
        });

        it('getProducts should return an empty array of Products if no product is provided or an error occurs during the fetching process', async () => {

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

    describe('Product Driver Port Tests | getProduct', () => {

        it('getProduct should return a single Product', async () => {

            const spy = vi.spyOn(Products, 'getProduct');
            const callPayload: number = 1;
            const result = await Products.getProduct(callPayload);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(callPayload);
            expect(result).toBeTruthy();

            expect(result).toStrictEqual(expect.objectContaining(<ProductDetailDTO>{
                id: expect.any(Number),
                title: expect.any(String),
                price: expect.any(Number),
                image: expect.any(String),
                category: expect.any(String),
                description: expect.any(String)
            }));

        },{
            timeout: timeout
        });

        it('getProduct should return a single empty Product if no product is provided or an error occurs during the fetching process', async () => {

            const fakeAdapter: ProductDrivenPort = {
                get: (resourceURI: string): Promise<object> => { return Promise.resolve({ data: null }); }
            };

            const fakeProductsService = ProductsService(fakeAdapter);

            const spy = vi.spyOn(fakeProductsService, 'getProduct');
            const callPayload: number = 1;
            const result = await fakeProductsService.getProduct(callPayload);
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(callPayload);

            expect(result).toStrictEqual({});
        },{
            timeout: timeout
        });

    });
});
