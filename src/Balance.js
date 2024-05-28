const Balance = () => {
    return (
        <div class="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
        <div class="card-header">Balance</div>
        <div class="card-body">
             Email<br/>
             <input type="input" class="form-control" id="balanceEmail" placeholder="Enter Email"/><br/>
             <button type="submit" class="btn" onclick="balance()">Show Balance</button>
             <div id='balanceStatus'></div>
        </div>
        </div>
    );
  };
  
  export default Balance;