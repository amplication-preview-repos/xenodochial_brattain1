import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { DISPATCHER_TITLE_FIELD } from "./DispatcherTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const DispatcherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="nationalId" source="nationalId" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ComplianceDocument"
          target="dispatcherId"
          label="ComplianceDocuments"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="verified" source="verified" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LoadOffer"
          target="dispatcherId"
          label="LoadOffers"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="dispatcherId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dispatcher"
              source="dispatcher.id"
              reference="Dispatcher"
            >
              <TextField source={DISPATCHER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="dispatcherId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dispatcher"
              source="dispatcher.id"
              reference="Dispatcher"
            >
              <TextField source={DISPATCHER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <TextField label="sentAt" source="sentAt" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="dispatcherId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dispatcher"
              source="dispatcher.id"
              reference="Dispatcher"
            >
              <TextField source={DISPATCHER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="escrow" source="escrow" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
