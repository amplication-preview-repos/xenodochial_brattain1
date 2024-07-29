import { ComplianceDocumentCreateNestedManyWithoutDispatchersInput } from "./ComplianceDocumentCreateNestedManyWithoutDispatchersInput";
import { LoadOfferCreateNestedManyWithoutDispatchersInput } from "./LoadOfferCreateNestedManyWithoutDispatchersInput";
import { MessageCreateNestedManyWithoutDispatchersInput } from "./MessageCreateNestedManyWithoutDispatchersInput";
import { NotificationCreateNestedManyWithoutDispatchersInput } from "./NotificationCreateNestedManyWithoutDispatchersInput";
import { PaymentCreateNestedManyWithoutDispatchersInput } from "./PaymentCreateNestedManyWithoutDispatchersInput";

export type DispatcherCreateInput = {
  complianceDocuments?: ComplianceDocumentCreateNestedManyWithoutDispatchersInput;
  email?: string | null;
  loadOffers?: LoadOfferCreateNestedManyWithoutDispatchersInput;
  messages?: MessageCreateNestedManyWithoutDispatchersInput;
  name?: string | null;
  nationalId?: string | null;
  notifications?: NotificationCreateNestedManyWithoutDispatchersInput;
  payments?: PaymentCreateNestedManyWithoutDispatchersInput;
  phone?: string | null;
};
