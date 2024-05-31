const  Card = (props)=>{
    //class="card text-bg-secondary mb-3
    const  cls = 'card text-bg-'+ props.bgcolor + ' mb-3';
    return(
        <div className={cls} style={{maxWidth:"18rem"}}>
           <div className="card-header">{props.btn && (<p><br></br><button type="submit" onClick={props.fetchU}  className="btn btn-light">Fetch</button></p>)}</div>
           <div className="card-body">
            {props.title && (<h5 className="card-title">{props.title}</h5>)}
            {props.text && (<p className="card-text">{props.text}</p>)}
            {props.body}
           </div>
        </div>
    );
}
export  default Card; 