import { Login } from "@mui/icons-material";
import { Snackbar } from "@mui/material";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export const LoginPage = () => {
  const [passVisible,setPassVisibile] = useState("visibility");
  const [passType,setPassType] = useState("password");
    const [navChecked, setNavChecked] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");
    const [fname, setFname] = useState("Daniel");
    const [capitalUSD, setCapitalUSD] = useState("0.00");
    const [capitalBTC, setCapitalBTC] = useState("0.00000000");
    const [profitUSD, setProfitUSD] = useState("0.00");
    const [profitBTC, setProfitBTC] = useState("0.00000000");
    const [bonusUSD, setBonusUSD] = useState("0.00");
    const [bonusBTC, setBonusBTC] = useState("0.00000000");

    const navigate = useNavigate();
    
    let tvScriptLoadingPromise;
    const onLoadScriptRef = useRef();

    const handleLogin = async () => {
        if ((password == "") && (username == "")) {
            setAlertMessage("All fields are required!");
            setAlertSeverity("warning");
            setOpenAlert(true);
        } else if ((username == "")) {
            setAlertMessage("Username is required!");
            setAlertSeverity("warning");
            setOpenAlert(true);
        } else if ((password == "")) {
            setAlertMessage("Password is required!");
            setAlertSeverity("warning");
            setOpenAlert(true);
        } else {
            setAlertMessage("Logging in...");
            setAlertSeverity("success");
            setOpenAlert(true);
            setTimeout(function(){
                window.location="/welcome";
            },2000)
        }
    }

    const handleAlert = () => {
        setOpenAlert(false);
    }

    const handleVisibility = () => {
        if (passVisible == "visibility") {
            setPassVisibile("visibility_off");
            setPassType("text");
            return;
        } else {
            setPassVisibile("visibility");
            setPassType("password");
            return;
        }
    }

useEffect(() => {
    
},[])
    return (
        <main style={{backgroundColor:"#1c1f42",
        }}>
            <div style={{minHeight:"100vh", padding:"20px 50px", position:"relative", overflowX:"hidden" }}>
                <div className="logo-bg">
                </div>
                <div style={{textAlign:"left"}}>
                    <img src="/images/logolight.png"/>
                </div>
                <div className="white-ellipse">
                </div>
                <div className="yellow-ellipse">
                </div>
                <div className="loginform">
                    <h3>Login to Account</h3>
                    <p>Enter your Username & Password</p>
                    <div className="form-control">
                        <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <input type={passType} placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <div className="seepass"><span onClick={handleVisibility} className="material-icons grey">{passVisible}</span></div>
                    </div>
                    <p onClick={()=>window.location="/forgot-password"} className="forgotpass">I forgot my password</p>
                    <button className="gradient-btn" onClick={handleLogin}>Login Here</button>
                </div>
            </div>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlert}>
                <Alert onClose={handleAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                {alertMessage}
                </Alert>
            </Snackbar>
        </main>
       );
};
