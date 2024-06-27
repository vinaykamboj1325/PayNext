import React, { useState ,memo} from 'react'
import Swal from 'sweetalert2';
import {Link,useNavigate} from 'react-router-dom'
import { BsMenuAppFill } from "react-icons/bs";
import { RiDashboard3Fill } from "react-icons/ri";
import { TbAlertSquare } from "react-icons/tb";
import { HiOutlineFlag } from "react-icons/hi";
import { GiShakingHands } from "react-icons/gi";
import { GiThorHammer } from "react-icons/gi";
import { RiPassPendingLine } from "react-icons/ri";
import { TbLicenseOff } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { FaFileArchive } from "react-icons/fa";

const Leftbar = () => {
  console.log("left page rendering")
  const[widthchange , setWidthchange]=useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();

  let changewidth=()=>{
    setWidthchange(change => !change);
    navigate("/arete/dashboard")
    setActiveIndex(null)
  };
  const onclicktext =(id)=>{
    setWidthchange(change => !change);
    setActiveIndex(id)
  };

  const NotAccessible=(id)=>{
    setWidthchange(change => !change);
    setActiveIndex(id)
    Swal.fire({
      icon: "error",
      title: "You Don't have access!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  };

 const menu =[
 { svg:<RiDashboard3Fill />, link : "/arete/transactions",title:"Transactions"},
 { svg:<TbAlertSquare />, link : "/arete/complain",title:"Complaint Management"},
 {svg:<HiOutlineFlag />, link : "/arete/violation",title:"Violation Management"},
 { svg:<GiShakingHands />, link : "/arete/settlement",title:"Settlements"},
 { svg:<GiThorHammer />, link : "/arete/dispute",title:"Dispute Management"},
 { svg:<RiPassPendingLine />, link : "/arete/pass-issuance",title:"Pass Issuance"},
 { svg:<FaFileArchive />, link : "/arete/dashboard",title:"File Exchange"},
 { svg:<TbLicenseOff />, link : "/arete/blacklist",title:"Blacklist Management"},
 { svg:<GrMoney />, link : "/arete/dashboard" ,title:"Fare Management"},
 { svg:<TbReport />, link : "/arete/report/Schedule" ,title:"Reports"},
 
 ];
  return (
    <>
    <div className="leftbar"  style={{width: widthchange ?  '60px' : '270px'}}>
       <ul  style={{left: widthchange ? 'none' : '15px'}}>
        {
        <span><li onClick={changewidth}><BsMenuAppFill style={{right: widthchange ? 'none' : '15px',color : activeIndex === null ? "#00684e" : "grey"}}/></li></span>
        }
         
          {
            menu.map((value,id)=>{
              return <>
              <span><li  key={id} style={{color : activeIndex === id ? "#00684e" : "grey"}} >{value.svg} </li> {widthchange ? null : <div><Link to={value.link} onClick={()=> id === 6 || id === 8 ? NotAccessible(id) : onclicktext(id)} style={{right: widthchange ? 'none' : '15px'}}>{value.title}</Link> </div> }</span>
              </>
            })
          }
       </ul>
    </div>
    </>
  )
}

export default Leftbar;