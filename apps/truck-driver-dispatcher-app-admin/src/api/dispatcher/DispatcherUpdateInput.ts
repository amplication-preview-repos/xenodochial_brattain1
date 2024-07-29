import { ComplianceDocumentUpdateManyWithoutDispatchersInput } from "./ComplianceDocumentUpdateManyWithoutDispatchersInput";
import { LoadOfferUpdateManyWithoutDispatchersInput } from "./LoadOfferUpdateManyWithoutDispatchersInput";
import { MessageUpdateManyWithoutDispatchersInput } from "./MessageUpdateManyWithoutDispatchersInput";
import { NotificationUpdateManyWithoutDispatchersInput } from "./NotificationUpdateManyWithoutDispatchersInput";
import { PaymentUpdateManyWithoutDispatchersInput } from "./PaymentUpdateManyWithoutDispatchersInput";

export type DispatcherUpdateInput = {
  complianceDocuments?: ComplianceDocumentUpdateManyWithoutDispatchersInput;
  email?: string | null;
  loadOffers?: LoadOfferUpdateManyWithoutDispatchersInput;
  messages?: MessageUpdateManyWithoutDispatchersInput;
  name?: string | null;
  nationalId?: string | null;
  notifications?: NotificationUpdateManyWithoutDispatchersInput;
  payments?: PaymentUpdateManyWithoutDispatchersInput;
  phone?: string | null;
};
