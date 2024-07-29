import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DISPATCHER_TITLE_FIELD } from "../dispatcher/DispatcherTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const LoadOfferShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="Dispatcher"
          source="dispatcher.id"
          reference="Dispatcher"
        >
          <TextField source={DISPATCHER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
