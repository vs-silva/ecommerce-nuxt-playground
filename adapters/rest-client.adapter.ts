import type {ProductDrivenPort} from "~/application/products/ports/product-driven.port";
import axios from 'axios';
import Eventbus from "../eventbus";

export function RestClientAdapter(): ProductDrivenPort {

    const engine = axios.create({
        baseURL: 'https://fakestoreapi.com',
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Something is wrong with the endpoint'
    });

    engine.interceptors.request.use(config => {
        Eventbus.emitter.emit(Eventbus.eventType.SHOW_LOADER);
        return config;
    }, handleError);

    engine.interceptors.response.use( response => {
        Eventbus.emitter.emit(Eventbus.eventType.HIDE_LOADER);
        return response;
    }, handleError);

    function handleError(error: object) {
        Eventbus.emitter.emit(Eventbus.eventType.HIDE_LOADER);
        //display notification error
        return Promise.reject(error);
    }


    async function get(resourceURI: string): Promise<object> {
        return await engine.get(resourceURI);
    }

    return {
      get
    };
}
