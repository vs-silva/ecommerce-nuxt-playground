import {ProductsService} from "./products.service";
import {RestClientAdapter} from "../../adapters/rest-client.adapter";

export default ProductsService(RestClientAdapter());
