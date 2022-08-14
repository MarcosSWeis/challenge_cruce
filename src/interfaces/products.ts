

export type Price = {
    price: number,
    discount: number
}


export interface IProduct {
    id: number
    title: string,
    price: Price,
    description: string,
    category: CategoriesProduct,
    image: any,
    quotas: QuotaProduct

}
export enum QuotaProduct {
    tres = 3,
    seis = 6,
    nueve = 9,
    doce = 12
}


export enum CategoriesProduct {
    FUNKO = 'FUNKO',
    JANSPORT = 'JANSPORT',
    DINOSAURIO = 'DINOSAURIO'
}
