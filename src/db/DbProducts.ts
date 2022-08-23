import { CategoryProduct, QuotaProduct } from "../interfaces/products";
import { Paginate } from "../models/Paginate";
import { Product } from "../models/Product"
import { User } from "../models/User";

export class dbProducts {
    private products: Array<Product> = []
    private users: Array<User> = []

    constructor(products: Array<Product>, users: Array<User>) {
        this.products = products;
        this.users = users;
    }
    //------***   GETTERS   ***------//

    //listar todos los productos
    getAllProducts(): Array<Product> {

        return this.products
    }
    //retorna un objeto para poder paginar
    getAllProductsPaginates(limit: number, page: number, arrToPaginate: Array<Product>): Paginate {
        const offset = limit * page
        const previousOffset = limit * (page - 1)
        if (page == 1) {
            return new Paginate(arrToPaginate.length, limit, page, arrToPaginate.slice(page - 1, limit))
        } else {
            return new Paginate(arrToPaginate.length, limit, page, arrToPaginate.slice(previousOffset, offset))
        }
    }

    //obtener producto por su id
    getProductById(id: number): Product | undefined {
        return this.products.find((product) => product.id === id)
    }
    //obtener productos por category
    getProductsByCategory(category: CategoryProduct): Array<Product> | undefined {
        console.log(category.toy)
        if (category.toy) {
            return this.products.filter((product) => product.category.toy === category.toy)
        }
        if (category.school) {
            return this.products.filter((product) => product.category.school === category.school)
        }
    }
    //obtener el id mayor
    getLastIdProduct(): number {
        let ids: Array<number> = this.products.map((product) => product.id)
        let mayor: number = ids[0]
        for (let i = 0; i < ids.length; i++) {
            if (ids[i] > mayor) {
                mayor = ids[i]
            }
        }
        return mayor + 1
    }

    getLastIdUser(): number {
        let ids: Array<number> = this.users.map((user) => user.id)
        let mayor: number = ids[0]
        for (let i = 0; i < ids.length; i++) {
            if (ids[i] > mayor) {
                mayor = ids[i]
            }
        }
        return mayor + 1
    }
    //filtrar por precio maximo y minimo
    getFilterPrice(minPrice?: number | undefined, maxPrice?: number | undefined): Array<Product> {
        let min: number, max: number;
        min = !minPrice ? 0 : minPrice
        max = !maxPrice ? Infinity : maxPrice
        return this.products.filter((product) => product.price.price < max && product.price.price > min)
    }
    //filtrar por descuento
    getFilterDiscount(discount: number): Array<Product> | undefined {
        return this.products.filter((product) => product.price.discount <= discount)
    }
    //buscar producto pro nombre
    getProductoByTitle(search: string): Array<Product> {
        return this.products.filter((product) => product.title.indexOf(search) != -1)
    }

    //filtrar producto por cantidad de cuotas
    getFilterProductByQuota(quotas: QuotaProduct): Array<Product> | undefined {
        return this.products.filter((product) => product.quotas === quotas)
    }


    //------***   SETTERS   ***------//

    //añadir un producto
    addProduct(product: Product): void {
        product.setCreateId(this.getLastIdProduct())
        this.products.push(product)
    }
    //borrar un producto
    deleteProduct(id: number): void {
        let index = this.products.findIndex((product) => product.id === id)
        this.products = this.products.splice(index, 1)
    }
    /// save method
    //tipo produsct o user

    //------***   Users   ***------//
    getUserByEmail(email: string): User | undefined {
        return this.users.find((user) => user.email.trim() === email)
    }
    addUser(user: User): void {
        this.users.push(user)
    }
    getPositionUser(email: string): number {
        return this.users.findIndex((user) => user.email === email)
    }

    saveUser(index: number, updatedUser: User): void {
        this.users[index] = updatedUser
    }
}

//export const DB: dbProducts = new dbProducts(seedInstanceProduct(mockProducts), seedInstanceUser(mockUsers));

