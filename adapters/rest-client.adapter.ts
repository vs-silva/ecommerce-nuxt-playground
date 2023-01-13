import type {ProductDrivenPort} from "~/application/products/ports/product-driven.port";
import axios from 'axios';

export function RestClientAdapter(): ProductDrivenPort {

    const engine = axios.create({
        baseURL: 'https://fakestoreapi.com',
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Something is wrong with the endpoint'
    });

    async function get(resourceURI: string): Promise<object> {
        return await engine.get(resourceURI);
    }

    return {
      get
    };
}
