import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type NotificationCreateInput = {
  dispatcher?: DispatcherWhereUniqueInput | null;
  driver?: DriverWhereUniqueInput | null;
  message?: string | null;
  sentAt?: Date | null;
  typeField?: "Option1" | null;
};
