// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const ItemList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        {console.log(props)}
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="price" />
        </Datagrid>
    </List>
);