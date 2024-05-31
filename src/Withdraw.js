const Withdraw = () => {
    return (
        <div className="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">WithDraw</div>
        <div className="card-body">
            Email:<br/>
            <input type="input" className="form-control" id="withDrawEmail" placeholder="Enter Email"/><br/>
            Amount:<br/>
            <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter Amount"/><br/>
            <button type="submit" id="submit" className="btn">Withdraw</button>
            <div id="withdrawStatus"></div>
        </div>
        </div>

    );
  };
  
  export default Withdraw;