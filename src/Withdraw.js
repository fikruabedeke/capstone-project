const Withdraw = () => {
    return (
        <div class="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
        <div class="card-header">WithDraw</div>
        <div class="card-body">
            Email:<br/>
            <input type="input" class="form-control" id="withDrawEmail" placeholder="Enter Email"/><br/>
            Amount:<br/>
            <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter Amount"/><br/>
            <button type="submit" id="submit" class="btn" onclick="withdraw()">Withdraw</button>
            <div id="withdrawStatus"></div>
        </div>
        </div>

    );
  };
  
  export default Withdraw;