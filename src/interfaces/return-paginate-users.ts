import { User } from "../models/User";

export interface PaginateUsers {
  total_users: number; //count,
  total_pages: number; //Math.ceil(count / limit),
  current_page: number; //page + 1,
  users: Array<User>;
}
