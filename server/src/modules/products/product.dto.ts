export class ProductDto {
    readonly name: string;
    readonly description: string;
    readonly brandName: string;
    readonly price: number;
    availableSizes?: string[] = []

}
