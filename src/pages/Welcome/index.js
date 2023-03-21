import { Login } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box, Grid, Snackbar } from "@mui/material";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export const Welcome = () => {
  const [passVisible,setPassVisibile] = useState("visibility");
  const [passType,setPassType] = useState("password");
    const [navValue, setNavValue] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");
    const [fname, setFname] = useState("Oluwatobi");
    const [lname, setLname] = useState("Olowu");
    const [position, setPosition] = useState("Operating Manager");
    const [station, setStation] = useState("Sangotedo");
    const [region, setRegion] = useState("Island");
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
        <main style={{backgroundColor:"#fff",
        }}>
            <div style={{minHeight:"100vh", padding:"0px 20px 30px", position:"relative", overflowX:"hidden" }}>
                <div style={{textAlign:"left"}}>
                    <h3 className="title">Welcome</h3>
                </div>
                <div className="dark-header">
                    <div style={{display:"flex"}}>
                        <img src="/images/avatar.svg" style={{marginRight:"20px"}}/>
                        <div style={{display:"block"}}>
                            <h4>{fname}</h4>
                            <p>{position}</p>
                        </div>
                    </div>
                </div>
                <div className="light-header">
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:"block"}}>
                            <h6>Station</h6>
                            <p>{station}</p>
                        </div>
                        <div style={{display:"block"}}>
                            <h6>Region</h6>
                            <p>{region}</p>
                        </div>
                    </div>
                </div>
                <div className="major-contents">
                    <h5 className="title">Selling Price</h5>
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>PMS</h6>
                                <h3>165</h3>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>AGO</h6>
                                <h3>340</h3>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>HHK</h6>
                                <h3>0</h3>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>LPG 6KG</h6>
                                <h3>4250</h3>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>LPG 12.5KG</h6>
                                <h3>8500</h3>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>LPG 50KG</h6>
                                <h3>16000</h3>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className="each-content">
                                <h6>Pump Integrity</h6>
                                <h3>0.7</h3>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div style={{position:"fixed",bottom:"0px",backgroundColor:"#fff",width:"100%",}}>
                <div style={{display:"flex",justifyContent:"space-between",boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",borderRadius: "5px",padding:"16px 45px 13px"}}>
                    <div onClick={()=>setNavValue(0)} className="bottomnav">
                        <img src="/images/startofday.svg" />
                        <p>Start of Day</p>
                    </div>
                    <div onClick={()=>setNavValue(1)} className="bottomnav">
                        <img src="/images/startofday.svg" />
                        <p>End of Day</p>
                    </div>
                    <div onClick={()=>setNavValue(2)} className="bottomnav">
                        <img src="/images/startofday.svg" />
                        <p>More Actions</p>
                    </div>
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
