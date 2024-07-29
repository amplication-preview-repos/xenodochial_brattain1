import { ComplianceDocument } from "../complianceDocument/ComplianceDocument";
import { JsonValue } from "type-fest";
import { LoadOffer } from "../loadOffer/LoadOffer";
import { Message } from "../message/Message";
import { Notification } from "../notification/Notification";
import { Payment } from "../payment/Payment";

export type Driver = {
  complianceDocuments?: Array<ComplianceDocument>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  insurance: string | null;
  itinerary: JsonValue;
  lastName: string | null;
  licenseNumber: string | null;
  loadOffers?: Array<LoadOffer>;
  messages?: Array<Message>;
  notifications?: Array<Notification>;
  payments?: Array<Payment>;
  phone: string | null;
  updatedAt: Date;
};
