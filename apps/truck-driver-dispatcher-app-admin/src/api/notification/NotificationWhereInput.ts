import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  dispatcher?: DispatcherWhereUniqueInput;
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  typeField?: "Option1";
};
