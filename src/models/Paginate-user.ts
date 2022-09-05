import { PaginateUsers } from "../interfaces/return-paginate-users";
import { User } from "./User";

export class PaginatesUser implements PaginateUsers {
  total_users: number;
  total_pages: number;
  current_page: number;
  users: Array<User>;
  constructor(total_users: number, limit: number, current_page: number, users: Array<User>) {
    this.total_users = total_users;
    this.total_pages = this.getTotalPage(total_users, limit);
    this.current_page = current_page;
    this.users = users;
  }

  getTotalPage(totalusers: number, limit: number): number {
    if (Math.ceil(totalusers / limit) <= 1) {
      return 1;
    } else {
      return Math.ceil(totalusers / limit);
    }
  }
}
