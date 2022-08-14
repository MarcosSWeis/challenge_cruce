import { IUser } from "../interfaces/user"
import { User } from "../models/User"

export function instanceUser(seedUsers: Array<IUser>): Array<User> {
    let users: Array<User> = []
    for (let user of seedUsers) {
        const instanceUser = new User(user.name, user.lastName, user.email, user.password)
        users.push(instanceUser)
    }
    return users
}