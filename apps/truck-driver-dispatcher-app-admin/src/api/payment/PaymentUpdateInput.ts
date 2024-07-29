import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  dispatcher?: DispatcherWhereUniqueInput | null;
  driver?: DriverWhereUniqueInput | null;
  escrow?: boolean | null;
  status?: "Option1" | null;
};
