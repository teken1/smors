import { Login } from "@mui/icons-material";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Landing = () => {
  const [active,setActive] = useState("1");
    const [navChecked, setNavChecked] = useState(false);
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

useEffect(() => {
    
},[])
    return (
        <main style={{backgroundColor:"#303461",
        }}>
            <div style={{minHeight:"100vh", }}>
                <div style={{backgroundImage:"url(/images/logolight.png)",backgroundRepeat:"no-repeat",backgroundSize:"100%",backgroundPosition:"center",position:"absolute",top:"40px",left:0,width:"100%",minHeight:"100vh",opacity:".05"}}>
                </div>
                <div style={{paddingTop:"25%",textAlign:"center"}}>
                    <img src="/images/logolight.png"/>
                    <div style={{position:"absolute",top:"10px",right:"35px"}}>
                        <button onClick={() => window.location='/login'} class="white" style={{fontSize:"16px",verticalAlign:"bottom",cursor:"pointer", backgroundColor:"transparent",border:"none"}}>Proceed to login 
                            <span style={{marginLeft:"10px",verticalAlign:"bottom"}} class="material-icons white">login</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
       );
};
