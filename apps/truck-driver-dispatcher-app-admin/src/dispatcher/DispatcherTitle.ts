import { Dispatcher as TDispatcher } from "../api/dispatcher/Dispatcher";

export const DISPATCHER_TITLE_FIELD = "name";

export const DispatcherTitle = (record: TDispatcher): string => {
  return record.name?.toString() || String(record.id);
};
