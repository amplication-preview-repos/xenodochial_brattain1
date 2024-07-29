import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ComplianceDocumentTitle } from "../complianceDocument/ComplianceDocumentTitle";
import { LoadOfferTitle } from "../loadOffer/LoadOfferTitle";
import { MessageTitle } from "../message/MessageTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const DispatcherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="complianceDocuments"
          reference="ComplianceDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplianceDocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="loadOffers"
          reference="LoadOffer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LoadOfferTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="nationalId" source="nationalId" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
