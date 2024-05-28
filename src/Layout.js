import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick="defaultModule()">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/create" className="nav-link active" aria-current="page" href="#createAccount" onClick="loadCreateAccount()" id="createAccount">CreateAccount</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link" onclick="loadLogin()" id="login">Login</Link>
            </li>
            <li className="nav-item">
            <Link to="/deposit" className="nav-link" onclick="loadDeposit()" id="deposit">Deposit</Link>
            </li>
            <li className="nav-item">
              <Link to="/balance" className="nav-link" onclick="loadBalance()" id="balance">Balance</Link>
            </li>
            <li className="nav-item">
              <Link to="/withdraw" className="nav-link" onclick="loadWithdrawal()" id="withdraw">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link to="/alldata" className="nav-link" onclick="loadAllData()" id="alldata">AllData</Link>
            </li> 
            <li className="nav-item dropdown">
                <Link to="/select" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Select</Link>
                <ul className="dropdown-menu">
                    <li><Link to="/slecect1" className="dropdown-item">Select1</Link></li>
                    <li><Link to="/select2" className="dropdown-item">Select2</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link to="/other" className="dropdown-item" >Other</Link></li>
                </ul>
            </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
        </nav>
      <Outlet />
    </>
  )
};

export default Layout;