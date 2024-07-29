import { SortOrder } from "../../util/SortOrder";

export type LoadOfferOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dispatcherId?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
