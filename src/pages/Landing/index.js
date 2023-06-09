import { Login } from "@mui/icons-material";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Landing = () => {
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
                    <div style={{position:"absolute",top:"40px",right:"50px"}}>
                        <button onClick={() => window.location='/login'} class="white" style={{fontSize:"16px",verticalAlign:"bottom",cursor:"pointer", backgroundColor:"transparent",border:"none"}}>Proceed to login 
                            <span style={{marginLeft:"5px",verticalAlign:"bottom"}} class="material-icons white">login</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
       );
};
