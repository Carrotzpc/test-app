import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PorjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="desc" multiline source="desc" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
