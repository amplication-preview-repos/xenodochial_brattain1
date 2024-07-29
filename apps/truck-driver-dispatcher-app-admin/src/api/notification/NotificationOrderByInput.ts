import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  dispatcherId?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sentAt?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
