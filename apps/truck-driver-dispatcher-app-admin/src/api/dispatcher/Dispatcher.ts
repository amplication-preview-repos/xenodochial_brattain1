import { ComplianceDocument } from "../complianceDocument/ComplianceDocument";
import { LoadOffer } from "../loadOffer/LoadOffer";
import { Message } from "../message/Message";
import { Notification } from "../notification/Notification";
import { Payment } from "../payment/Payment";

export type Dispatcher = {
  complianceDocuments?: Array<ComplianceDocument>;
  createdAt: Date;
  email: string | null;
  id: string;
  loadOffers?: Array<LoadOffer>;
  messages?: Array<Message>;
  name: string | null;
  nationalId: string | null;
  notifications?: Array<Notification>;
  payments?: Array<Payment>;
  phone: string | null;
  updatedAt: Date;
};
