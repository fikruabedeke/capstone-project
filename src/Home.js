import Pic from './bank.png'
const Home = () => {
    return (
        <div className="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">B&B Bank Landing Module</div>
                    <div className="card-body">
                        <h5 className="card-title">Welcome to the B&B Bank</h5>
                        <p className="card-text">Create account if you are new or login to start your journey</p>
                        <img src={Pic} className="img-fluid" alt="Responsive Image"/>
                        <div id="withdrawStatus"></div>
                    </div>
                    </div>
    );
  };
  
  export default Home;