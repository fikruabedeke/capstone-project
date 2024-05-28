import React from "react"; 
import UserContext from "./Context";
const UsersForm = (props)=>{
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const UserInputForm = ()=>{
        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [password, setPwd] = React.useState('');
        const ctx = React.useContext(UserContext);
        const handle = ()=>{
        console.log(name, email, password);
        ctx.users.push({name:name,email:email, password:password});
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
            {show? <CreateForm setShow={setShow}/>: <statusMsg setshow={setShow}/>}
        </>
        );
    }
    //status message setter:
    const statusMsg = (props)=>{
    return(
        <>
        <h5>Success</h5>
        <button type='submit' className='btn btn-light' onClick={()=>props.setShow(true)}>Add another account</button>
        </>
    );
    }

    return(
        <div className={cls} style={{maxWidth:"18rem"}}>
            <div className="card-header">{props.label}</div>
            <div className="card-body">
              {props.body}
        </div>
     </div>
    );
}

export default UsersForm;