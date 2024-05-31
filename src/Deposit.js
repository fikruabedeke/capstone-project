const Deposit = () => {
    return (
         <div className="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">Deposit</div>
            <div className="card-body">
                Amount<br/>
                <input type="input" className="form-control" id="depositEmail" placeholder="Enter Email"/><br/>
                Password:<br/>
                <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount"/><br/>
                <button type="submit" id="submit" className="btn" onClick="deposit()">Deposit</button>
                <div id="depositStatus"></div>
            </div>
        </div>
    );
  };
  
  export default Deposit;