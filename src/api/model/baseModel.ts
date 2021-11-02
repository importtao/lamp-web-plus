export interface BasicPageParams {
  page: number;
  pageSize: number;
  size: number;
  current: number;
  sort: string;
  order: string;
  extra: any;
  model: any;
}

export interface BasicFetchResult<T extends any> {
  items: T;
  total: number;
}
export interface PageParams   extends BasicPageParams{

}
export interface OrderItem {
  column: string;
  acs: boolean;
}
export interface PageResult <T extends any> {
  current: number;
  records: T [];
  items: T;
  total: number;
  size: number;
  orders: OrderItem[];
  optimizeCountSql: boolean;
  searchCount: boolean;
  countId: string;
  maxLimit: number;
}
