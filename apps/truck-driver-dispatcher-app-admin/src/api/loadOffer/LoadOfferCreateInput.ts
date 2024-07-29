import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type LoadOfferCreateInput = {
  amount?: number | null;
  description?: string | null;
  dispatcher?: DispatcherWhereUniqueInput | null;
  driver?: DriverWhereUniqueInput | null;
  status?: "Option1" | null;
};
