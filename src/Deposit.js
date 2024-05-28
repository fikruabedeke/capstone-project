const Deposit = () => {
    return (
         <div class="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">Deposit</div>
            <div class="card-body">
                Amount<br/>
                <input type="input" class="form-control" id="depositEmail" placeholder="Enter Email"/><br/>
                Password:<br/>
                <input type="number" class="form-control" id="depositAmount" placeholder="Enter Amount"/><br/>
                <button type="submit" id="submit" class="btn" onclick="deposit()">Deposit</button>
                <div id="depositStatus"></div>
            </div>
        </div>
    );
  };
  
  export default Deposit;