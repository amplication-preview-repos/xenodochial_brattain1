import { ComplianceDocumentCreateNestedManyWithoutDriversInput } from "./ComplianceDocumentCreateNestedManyWithoutDriversInput";
import { InputJsonValue } from "../../types";
import { LoadOfferCreateNestedManyWithoutDriversInput } from "./LoadOfferCreateNestedManyWithoutDriversInput";
import { MessageCreateNestedManyWithoutDriversInput } from "./MessageCreateNestedManyWithoutDriversInput";
import { NotificationCreateNestedManyWithoutDriversInput } from "./NotificationCreateNestedManyWithoutDriversInput";
import { PaymentCreateNestedManyWithoutDriversInput } from "./PaymentCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  complianceDocuments?: ComplianceDocumentCreateNestedManyWithoutDriversInput;
  email?: string | null;
  firstName?: string | null;
  insurance?: string | null;
  itinerary?: InputJsonValue;
  lastName?: string | null;
  licenseNumber?: string | null;
  loadOffers?: LoadOfferCreateNestedManyWithoutDriversInput;
  messages?: MessageCreateNestedManyWithoutDriversInput;
  notifications?: NotificationCreateNestedManyWithoutDriversInput;
  payments?: PaymentCreateNestedManyWithoutDriversInput;
  phone?: string | null;
};
