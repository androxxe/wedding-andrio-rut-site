import { APIResponse, BaseMeta } from "./response";

export interface Wish {
  name: string;
  wish: string;
  created_at: string;
  updated_at: string;
}

export interface WishesResponse extends APIResponse<Wish[], BaseMeta> {}

export interface WishesStoreResponse extends APIResponse<null, null> {}
