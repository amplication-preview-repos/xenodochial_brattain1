import { SortOrder } from "../../util/SortOrder";

export type ComplianceDocumentOrderByInput = {
  createdAt?: SortOrder;
  dispatcherId?: SortOrder;
  documentType?: SortOrder;
  documentUrl?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  verified?: SortOrder;
};
