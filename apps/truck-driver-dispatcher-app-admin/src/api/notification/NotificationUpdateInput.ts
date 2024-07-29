import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type NotificationUpdateInput = {
  dispatcher?: DispatcherWhereUniqueInput | null;
  driver?: DriverWhereUniqueInput | null;
  message?: string | null;
  sentAt?: Date | null;
  typeField?: "Option1" | null;
};
