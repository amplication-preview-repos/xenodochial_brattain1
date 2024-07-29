import { DispatcherWhereInput } from "./DispatcherWhereInput";
import { DispatcherOrderByInput } from "./DispatcherOrderByInput";

export type DispatcherFindManyArgs = {
  where?: DispatcherWhereInput;
  orderBy?: Array<DispatcherOrderByInput>;
  skip?: number;
  take?: number;
};
