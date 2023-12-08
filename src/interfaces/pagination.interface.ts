import { User } from "../entities";

export interface IPagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<User>;
}

export interface IPaginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
}
