import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  dispatcher?: DispatcherWhereUniqueInput;
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
