// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { ItemList } from './items';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:5000/admin');
const App = () => (
    <Admin dataProvider={dataProvider}>
         <Resource name="shop" list={ItemList} />
    </Admin>
)

export default App;