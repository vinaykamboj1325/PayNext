import { useNavigate } from 'react-router-dom';
import img2 from "../Assets/arete.jpg"
import Swal from 'sweetalert2';
import { useEffect ,useState} from 'react';

const Header = () => {


let navigate =useNavigate();

  let turnOff =()=>{
    localStorage.clear();
    window.history.pushState(null,"",window.location.href);
    Swal.fire('Success', 'Logout Successfully', 'success');
    navigate("/")
  };

  return (
    <>
      <div classNameName="dashboard" style={{ zIndex: 1 }}>
        <nav className="navbar bg-body-tertiary fixed-top" >
          <div className="container-fluid" >

            <div className="options">
              <img src={img2} alt="" />
              <button type="button" class="btn btn-light" style={{ backgroundColor: "#52796f", color: "white" }}>NeollMe</button>
              <button type="button" class="btn btn-light">NETC Portal</button>
              <button type="button" class="btn btn-light">M-Portal</button>
              <button type="button" class="btn btn-light">DMZ</button>
              <button type="button" class="btn btn-light">Tricz</button>
              <button type="button" class="btn btn-light">Zindagi-O</button>
            </div>
            <div class="button-borders" onClick={turnOff}>
              <button class="primary-button"> Log Out
              </button>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}

export default Header;