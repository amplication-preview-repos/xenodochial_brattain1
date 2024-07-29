import { SortOrder } from "../../util/SortOrder";

export type DispatcherOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  nationalId?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
