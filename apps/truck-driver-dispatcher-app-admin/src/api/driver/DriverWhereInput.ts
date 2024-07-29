import { ComplianceDocumentListRelationFilter } from "../complianceDocument/ComplianceDocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { LoadOfferListRelationFilter } from "../loadOffer/LoadOfferListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type DriverWhereInput = {
  complianceDocuments?: ComplianceDocumentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  insurance?: StringNullableFilter;
  itinerary?: JsonFilter;
  lastName?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  loadOffers?: LoadOfferListRelationFilter;
  messages?: MessageListRelationFilter;
  notifications?: NotificationListRelationFilter;
  payments?: PaymentListRelationFilter;
  phone?: StringNullableFilter;
};
