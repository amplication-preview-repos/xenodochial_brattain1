import { DispatcherWhereUniqueInput } from "../dispatcher/DispatcherWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type ComplianceDocumentUpdateInput = {
  dispatcher?: DispatcherWhereUniqueInput | null;
  documentType?: "Option1" | null;
  documentUrl?: InputJsonValue;
  driver?: DriverWhereUniqueInput | null;
  verified?: boolean | null;
};
