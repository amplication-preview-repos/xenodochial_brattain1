import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import { DISPATCHER_TITLE_FIELD } from "../dispatcher/DispatcherTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const ComplianceDocumentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Dispatcher"
          source="dispatcher.id"
          reference="Dispatcher"
        >
          <TextField source={DISPATCHER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="documentType" source="documentType" />
        <TextField label="documentUrl" source="documentUrl" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="verified" source="verified" />
      </SimpleShowLayout>
    </Show>
  );
};
