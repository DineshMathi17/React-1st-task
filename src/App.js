import './App.css';

function App() {
  return (
    <div className="App">
      <Details1 />
      <Details2 />
      <Details3 />
    </div>
  );
}

export default App;

function Details1(props) {
  return (
    <div className="code">
      <h3 className='code1'>FREE</h3>
      <h6 className='rs'>$0<span className="month">/month</span></h6>
      <hr></hr>
     <p>
        <span>✔</span> Single User
      </p>
      <p>s
        <span>✔</span> 5GB Storage
      </p>
      <p>
        <span>✔</span> Unlimited Public Projects
      </p>
      <p>
        <span>✔</span> Community Access
      </p>
      <p className='code1'>
        <span>✖</span> Unlimited Private Projects
      </p>
      <p className='code1'>
        <span>✖</span> Dedicated Phone Support
      </p>
      <p className='code1'>
        <span>✖</span> Free Subdomain
      </p>
      <p className='code1'>
        <span>✖</span> Monthly Status Reports
      </p>
      <button><b>BUTTON</b></button>
    </div>
  );
}

function Details2(props) {
  return (
    <div className="code">
      <h3 className='code1'>PLUS</h3>
      <h6 className='rs'>$9<span className="month">/month</span></h6>
      <hr></hr>
      <p>
        <span>✔</span> <b>5 User</b>
      </p>
      <p>
        <span>✔</span> 50GB Storage
      </p>
      <p>
        <span>✔</span> Unlimited Public Projects
      </p>
      <p>
        <span>✔</span> Community Access
      </p>
      <p>
        <span>✔</span> Unlimited Private Projects
      </p>
      <p>
        <span>✔</span> Dedicated Phone Support
      </p>
      <p>
        <span>✔</span> Free Subdomain
      </p>
      <p className='code1'>
        <span>✖</span> Monthly Status Reports
      </p>
      <button><b>BUTTON</b></button>
    </div>
  );
}

function Details3(props) {
  return (
    <div className="code">
      <h3 className='code1'>PRO</h3>
      <h6 className='rs'>$49<span className="month">/month</span></h6>
      <hr></hr>
      <p>
        <span>✔</span> <b>Unlimited Users</b>
      </p>
      <p>
        <span>✔</span> 150GB Storage
      </p>
      <p>
        <span>✔</span> Unlimited Public Projects
      </p>
      <p>
        <span>✔</span> Community Access
      </p>
      <p>
        <span>✔</span> Unlimited Private Projects
      </p>
      <p>
        <span>✔</span> Dedicated Phone Support
      </p>
      <p>
        <span>✔</span> <b>Unlimited</b> Free Subdomain
      </p>
      <p>
        <span>✔</span> Monthly Status Reports
      </p>
      <button><b>BUTTON</b></button>
    </div>
  );
}