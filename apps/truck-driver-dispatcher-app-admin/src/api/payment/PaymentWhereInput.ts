import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  dispatcher?: DispatcherWhereUniqueInput;
  driver?: DriverWhereUniqueInput;
  escrow?: BooleanNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
