import { ComplianceDocumentUpdateManyWithoutDriversInput } from "./ComplianceDocumentUpdateManyWithoutDriversInput";
import { InputJsonValue } from "../../types";
import { LoadOfferUpdateManyWithoutDriversInput } from "./LoadOfferUpdateManyWithoutDriversInput";
import { MessageUpdateManyWithoutDriversInput } from "./MessageUpdateManyWithoutDriversInput";
import { NotificationUpdateManyWithoutDriversInput } from "./NotificationUpdateManyWithoutDriversInput";
import { PaymentUpdateManyWithoutDriversInput } from "./PaymentUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  complianceDocuments?: ComplianceDocumentUpdateManyWithoutDriversInput;
  email?: string | null;
  firstName?: string | null;
  insurance?: string | null;
  itinerary?: InputJsonValue;
  lastName?: string | null;
  licenseNumber?: string | null;
  loadOffers?: LoadOfferUpdateManyWithoutDriversInput;
  messages?: MessageUpdateManyWithoutDriversInput;
  notifications?: NotificationUpdateManyWithoutDriversInput;
  payments?: PaymentUpdateManyWithoutDriversInput;
  phone?: string | null;
};
