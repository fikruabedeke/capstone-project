import React, { useContext } from "react";
import UserContex from './Context.js';
import Card from "./Card.js";
const AllData = () => {
    const ctx = useContext(UserContex);
   const [data, setData] = React.useState('');
    async function fetchUsers(){
        const port = process.env.PORT || 9080;
        let url = new URL(`http://162.243.184.144:9080/account/all`);
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