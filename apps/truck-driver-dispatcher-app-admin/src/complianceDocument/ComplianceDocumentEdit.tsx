import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { DispatcherTitle } from "../dispatcher/DispatcherTitle";
import { DriverTitle } from "../driver/DriverTitle";

export const ComplianceDocumentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dispatcher.id"
          reference="Dispatcher"
          label="Dispatcher"
        >
          <SelectInput optionText={DispatcherTitle} />
        </ReferenceInput>
        <SelectInput
          source="documentType"
          label="documentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <BooleanInput label="verified" source="verified" />
      </SimpleForm>
    </Edit>
  );
};
