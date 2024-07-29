import { Dispatcher } from "../dispatcher/Dispatcher";
import { Driver } from "../driver/Driver";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  dispatcher?: Dispatcher | null;
  driver?: Driver | null;
  escrow: boolean | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
