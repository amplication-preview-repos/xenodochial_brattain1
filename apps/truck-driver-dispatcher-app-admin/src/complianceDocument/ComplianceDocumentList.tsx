import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DISPATCHER_TITLE_FIELD } from "../dispatcher/DispatcherTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const ComplianceDocumentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComplianceDocuments"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="verified" source="verified" />
      </Datagrid>
    </List>
  );
};
