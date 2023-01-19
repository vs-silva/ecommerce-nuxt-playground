import type {ProductDrivenPort} from "~/application/products/ports/product-driven.port";
import axios from 'axios';
import 'js-loading-overlay' ;


export function RestClientAdapter(): ProductDrivenPort {

    const engine = axios.create({
        baseURL: 'https://fakestoreapi.com',
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Something is wrong with the endpoint'
    })

    // @ts-ignore
    const loader = JsLoadingOverlay;
    let isLoaderActive = false;
    const loaderPool: number[] = [];

    engine.interceptors.request.use(config => {
        loaderPool.push(1);
        handleLoader();
        return config;
    }, handleError);

    engine.interceptors.response.use( response => {
        loaderPool.pop();
        handleLoader();
        return response;
    }, handleError);

    function handleError(error: object) {
        loaderPool.pop();
        handleLoader();
        //display notification error
        return Promise.reject(error);
    }

    function handleLoader(): void {
        if(loaderPool.length) {
            if(!isLoaderActive) {
                loader.show({
                    "overlayBackgroundColor": "#000000",
                    "spinnerIcon": "square-loader",
                    "overlayOpacity": "0.5",
                    "spinnerColor": "#00BD7E"
                });
                isLoaderActive = true;
            }

            if(isLoaderActive) {
                return;
            }
        }

        if(!loaderPool.length) {
            loader.hide();
            isLoaderActive = false;
        }
    }

    async function get(resourceURI: string): Promise<object> {
        return await engine.get(resourceURI);
    }

    return {
      get
    };
}
