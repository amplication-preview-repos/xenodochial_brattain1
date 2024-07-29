import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ComplianceDocumentWhereInput = {
  dispatcher?: DispatcherWhereUniqueInput;
  documentType?: "Option1";
  documentUrl?: JsonFilter;
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  verified?: BooleanNullableFilter;
};
