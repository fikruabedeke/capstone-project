const Login = () => {
    return (
             <div class="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        Email<br/>
                        <input type="input" class="form-control" id="loginEmail" placeholder="Enter Email"/><br/>
                        Password:<br/>
                        <input type="password" class="form-control" id="loginpwd" placeholder="Enter passcode"/><br/>
                        <button type="submit" id="submit" class="btn" onclick="usrlogin()">Login</button>
                        <div id="loginStatus"></div>
                </div>
            </div>

    );
  };
  
  export default Login;