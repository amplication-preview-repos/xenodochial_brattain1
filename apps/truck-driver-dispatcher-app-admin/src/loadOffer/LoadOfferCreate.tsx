import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DispatcherTitle } from "../dispatcher/DispatcherTitle";
import { DriverTitle } from "../driver/DriverTitle";

export const LoadOfferCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="dispatcher.id"
          reference="Dispatcher"
          label="Dispatcher"
        >
          <SelectInput optionText={DispatcherTitle} />
        </ReferenceInput>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
