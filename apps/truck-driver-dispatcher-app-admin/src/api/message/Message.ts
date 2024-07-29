import { Dispatcher } from "../dispatcher/Dispatcher";
import { Driver } from "../driver/Driver";

export type Message = {
  content: string | null;
  createdAt: Date;
  dispatcher?: Dispatcher | null;
  driver?: Driver | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
