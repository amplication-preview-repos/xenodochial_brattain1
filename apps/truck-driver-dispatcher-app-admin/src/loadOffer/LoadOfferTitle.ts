import { LoadOffer as TLoadOffer } from "../api/loadOffer/LoadOffer";

export const LOADOFFER_TITLE_FIELD = "id";

export const LoadOfferTitle = (record: TLoadOffer): string => {
  return record.id?.toString() || String(record.id);
};
