import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from '../Assets/money.jpg'



const Login = () => {

    let navigate = useNavigate();

    const [login, setLogin] = useState({ LoginId: "", Password: "" });
    const [showpassword, setShowpassword] = useState(true);
    const [error, setError] = useState({ LoginId: "", Password: "" })


    let handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    };
    const Error = () => {
        if (!login.LoginId) {
            setError({ LoginId: "Firstly fill the Log Id" });
            return false;
        } else {
            setError({ LoginId: "" })
        };
        if (!login.Password) {
            setError({ Password: "Firstly fill the Password" });
            return false;
        } else {
            setError({ Password: "" })
        };
        return true;
    };

    let Submitted = async (e) => {
        e.preventDefault();
        try {
            const validCheck = Error();
            if (!validCheck) {
                return
            }
            if(login.LoginId && login.Password){
                localStorage.setItem("LoginId", login.LoginId)
                Swal.fire({
                    title: "Login Successfully",
                    icon: "success"
                  });
                navigate("/arete/dashboard")
            }
        } catch (err) {

        }
    };

    let loginClick = () => {

    };

    let showPassword = () => {
        setShowpassword(preview => !preview)
    };

    return (
        <>
            <div>
                <img src={img3} style={{ width: "80vw" }} />
            </div>
            <div className="login-details">
                <div className="title">
                    <h1>AreteInfo</h1>
                    <h4>DIGITAL PAYMENT EXPERTS</h4>
                </div>
                <form action="" onSubmit={Submitted}>

                    <input style={!login.LoginId && error.LoginId ? { marginBottom: 5 } : { marginBottom: 20 }} type="text" name='LoginId' placeholder={login.LoginId ? "" : "Enter the Login Id"} value={login.LoginId} onChange={handleChange} />
                    {login.LoginId ? null : error.LoginId ? <p style={{ backgroundColor: "#B00020",color:'white', padding: 5, marginBottom:5,marginLeft:10,fontSize:12 ,borderRadius:10}} >{error.LoginId}</p> : null}

                    <div className="passwordInput">
                        <input style={!login.Password && error.Password ? { marginBottom: 5 } : { marginBottom: 20 }} type={showpassword ? "password" : "text"} name='Password' placeholder={login.Password ? "" : "Enter the Password"} value={login.Password} onChange={handleChange} />
                        <span onClick={showPassword}>{showpassword && login.Password ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                    {login.Password ? null : error.Password ? <p style={{ backgroundColor: "#B00020",color:'white', padding: 5, marginBottom:5,marginLeft:10,fontSize:12 ,borderRadius:10}} >{error.Password}</p> : null}

                    <h3>Forgot Password?</h3>
                    <button type="submit" onClick={loginClick}>Login</button>
                </form>
            </div>

        </>
    )
}

export default Login