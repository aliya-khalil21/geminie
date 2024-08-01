import React, { useContext } from "react";
import './main.css'
import Sidebar from "../sidebar/sidebar";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                <p>Geminie</p>
                <img src={assets.bard_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">

                    <div className="card">

                        <p>suggest me best websites for learning c#</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brifely summarize this concept:AI/ML</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activities for our work relate</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the followig code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>

                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input  onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />


                        </div>
                    </div>
                    <p className="bottom-info">
                    Gemmini may display inaccurate info,including about people, so double check its response.Your privacy and Gemini Apps
                </p>
                </div>
                
            </div>

        </div>




    )
}
export default Main