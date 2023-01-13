export interface ProductDrivenPort {
    get(resourceURI:string): Promise<object>
}
