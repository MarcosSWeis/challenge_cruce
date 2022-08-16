

export type Price = {
    price: number,
    discount: number
}


export interface IProduct {
    id: number
    title: string,
    price: Price,
    description: string,
    category: CategoryProduct,
    image: any,
    quotas: QuotaProduct

}
export enum QuotaProduct {
    tres = 3,
    seis = 6,
    nueve = 9,
    doce = 12
}
export interface CategoryProduct {
    toy?: Toy
    school?: School
}


export enum Toy {
    FUNKO = 'Funko',
    DINOSAURIO = 'Dinosaurio'
}
export enum School {
    JANSPORT = 'Jansport'
}
