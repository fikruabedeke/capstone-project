const Login = () => {
    return (
             <div className="card text-bg-primary mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Log into your account</div>
                    <div className="card-body">
                        Email<br/>
                        <input type="input" class="form-control" id="loginEmail" placeholder="Enter Email"/><br/>
                        Password:<br/>
                        <input type="password" class="form-control" id="loginpwd" placeholder="Enter passcode"/><br/>
                        <button type="submit" id="loginviapwd" className="btn btn-info">Login with your account</button><br/><br/>
                        <button type="submit" id="loginviagoogle" className="btn btn-info">Login with Google account</button><br/><br/>
                        <button type="submit" id="loginviafacebook" className="btn btn-info">Login with Facebook account</button>
                        <div id="loginStatus"></div>
                </div>
            </div>

    );
  };
  
  export default Login;