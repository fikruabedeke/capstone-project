import { useContext } from "react";
import UserContext from './Context.js';
import Card from "./Card.js";
const AllData = () => {
    const ctx = useContext(UserContext);
    return (
        <Card bgcolor="primary" title="Data" header="Get All Data" body={JSON.stringify(ctx)}>
        </Card>
    );
  };
  
  export default AllData;