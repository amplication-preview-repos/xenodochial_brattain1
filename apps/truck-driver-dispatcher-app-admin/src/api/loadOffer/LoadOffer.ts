import { Dispatcher } from "../dispatcher/Dispatcher";
import { Driver } from "../driver/Driver";

export type LoadOffer = {
  amount: number | null;
  createdAt: Date;
  description: string | null;
  dispatcher?: Dispatcher | null;
  driver?: Driver | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
