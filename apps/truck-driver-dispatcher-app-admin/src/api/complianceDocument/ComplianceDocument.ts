import { Dispatcher } from "../dispatcher/Dispatcher";
import { JsonValue } from "type-fest";
import { Driver } from "../driver/Driver";

export type ComplianceDocument = {
  createdAt: Date;
  dispatcher?: Dispatcher | null;
  documentType?: "Option1" | null;
  documentUrl: JsonValue;
  driver?: Driver | null;
  id: string;
  updatedAt: Date;
  verified: boolean | null;
};
