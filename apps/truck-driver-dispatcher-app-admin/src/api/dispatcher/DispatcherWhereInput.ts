import { ComplianceDocumentListRelationFilter } from "../complianceDocument/ComplianceDocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoadOfferListRelationFilter } from "../loadOffer/LoadOfferListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type DispatcherWhereInput = {
  complianceDocuments?: ComplianceDocumentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  loadOffers?: LoadOfferListRelationFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  nationalId?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  payments?: PaymentListRelationFilter;
  phone?: StringNullableFilter;
};
