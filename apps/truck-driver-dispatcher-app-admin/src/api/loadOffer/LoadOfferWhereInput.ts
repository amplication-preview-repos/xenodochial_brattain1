import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LoadOfferWhereInput = {
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  dispatcher?: DispatcherWhereUniqueInput;
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
