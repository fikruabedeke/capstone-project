import React, { useContext } from "react";
import UserContex from './Context.js';
import Card from "./Card.js";
const AllData = () => {
    const ctx = useContext(UserContex);
   const [data, setData] = React.useState('');
    async function fetchUsers(){
        let url = new URL("https://fikru-bedeke-bb-bank-3s24l.ondigitalocean.app/account/all");
        let rsp = await fetch(url);
        let body = await rsp.text();
        setData(body);
    }
    return (
        <>
        <Card bgcolor="primary" btn={true} title="Fetch Users Data" fetchU={fetchUsers} header="Get All Data" default={ctx}  body={JSON.stringify(data)}>
        </Card>
        </>
    );
  };
  
  export default AllData;