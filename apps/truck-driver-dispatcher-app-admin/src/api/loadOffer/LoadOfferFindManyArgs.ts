import { LoadOfferWhereInput } from "./LoadOfferWhereInput";
import { LoadOfferOrderByInput } from "./LoadOfferOrderByInput";

export type LoadOfferFindManyArgs = {
  where?: LoadOfferWhereInput;
  orderBy?: Array<LoadOfferOrderByInput>;
  skip?: number;
  take?: number;
};
