import { Dispatcher } from "../dispatcher/Dispatcher";
import { Driver } from "../driver/Driver";

export type Notification = {
  createdAt: Date;
  dispatcher?: Dispatcher | null;
  driver?: Driver | null;
  id: string;
  message: string | null;
  sentAt: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
