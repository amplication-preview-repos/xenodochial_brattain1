import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  dispatcher?: DispatcherWhereUniqueInput | null;
  driver?: DriverWhereUniqueInput | null;
  timestamp?: Date | null;
};
