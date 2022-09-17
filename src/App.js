import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Open from "./component/Open";
import Clientlogin from './component/Client/Clientlogin';
import Clientregister from './component/Client/Clientregister';
import Projectdetail from './component/Client/Projectdetail';
import Freelancerview from './component/Client/Freelancerview';
import Confirmmail from './component/Client/Confirmmail';

import Freelancerlogin from './component/Freelancer/Freelancerlogin';
import Freelancerregister from './component/Freelancer/Freelancerregister';
import Projectlist from './component/Freelancer/Projectlist';
import Booking from './component/Freelancer/Booking';
import Emailsend from './component/Freelancer/Emailsend';

function App() {
  return (

    <BrowserRouter>
      <div className='container bg-success p-2 text-dark bg-opacity-25 mt-5'>
        <Routes>
          <Route path="/" element={<Open />} />
          {/* Client components */}
          <Route path="/clientlogin" element={<Clientlogin />} />
          <Route path="/clientregister" element={<Clientregister />} />
          <Route path="/projectdetail" element={<Projectdetail />} />
          <Route path="/freelancerview" element={<Freelancerview />} />
          <Route path="/confirmmail" element={< Confirmmail />} />

          {/* Freelancer components */}
          <Route path="/freelancerlogin" element={<Freelancerlogin />} />
          <Route path="/freelancerregister" element={<Freelancerregister />} />      
          <Route path="/projectlist" element={<Projectlist />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/email" element={< Emailsend />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
