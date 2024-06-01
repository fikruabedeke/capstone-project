import React from 'react';
import Card from './Card.js';
import UserContext from './Context.js';
const CreateAccount = () => {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const CreateForm = (props)=>{
        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [password, setPwd] = React.useState('');
        //const ctx = React.useContext(UserContext);
        const handle = ()=>{
          const port = process.env.PORT || 9080;
          console.log(name, email, password);
          const url = `http://162.243.184.144:9080/account/create/${name}/${email}/${password}`;
          //ctx.users.push({name:name,email:email, password:password});
          (async ()=>{
            let res = await fetch(url).then((result)=>{
              console.log(result);
            }).catch((err)=>{
              console.log(err);
            });
          })();
          props.setShow(false);
        }
        return(
           <>
            Name<br/>
            <input type='input' id='name' key={1} className='from-control' placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)}/><br/><br/>
            Email Address<br/>
            <input type='input'id='email' key={2} className='from-control' placeholder='Enter email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><br/>
             Password<br/>
            <input type='password'id='password' key={3} className='from-control' placeholder='Enter password' value={password} onChange={e=>setPwd(e.target.value)}/><br/><br/>
            <button type='submit' className='btn btn-light' onClick={handle}>Create Account</button><br/><br/>
           </>
        );
    }
  
  //status message setter:
  const CreateMsg = (props)=>{
       return(
          <>
          <h5>Success</h5>
          <button type='submit' className='btn btn-light' onClick={()=>props.setShow(true)}>Add another account</button>
          </>
       );
  }
   return (
       <Card 
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show? <CreateForm setShow={setShow}/> : <CreateMsg setShow={setShow}/>}
        />
   );
 }
 
 export default CreateAccount;