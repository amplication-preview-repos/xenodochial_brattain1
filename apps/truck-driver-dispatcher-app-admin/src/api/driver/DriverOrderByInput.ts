import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  insurance?: SortOrder;
  itinerary?: SortOrder;
  lastName?: SortOrder;
  licenseNumber?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
