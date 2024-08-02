import React, { useContext, useEffect, useState } from "react";
import './main.css';
import Sidebar from "../sidebar/sidebar";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    // Define a list of questions
    const questions = [
        "Suggest me best websites for learning C#",
        "Briefly summarize this concept: AI/ML",
        "Brainstorm team bonding activities for our work related",
        "Improve the readability of the following code",
        "What are the primary differences between compiled and interpreted languages?",
        "How do statically typed and dynamically typed languages compare in terms of performance and error handling?",
        "What are the most effective strategies for mastering Python programming?",
"Can you explain the key principles of object-oriented programming?",
"How can teams improve communication and collaboration in a remote work environment?",
"Identify common performance issues in web applications and suggest optimizations.",
"What are the main differences between SQL and NoSQL databases?",
"How do functional programming and imperative programming paradigms differ in terms of design and application?",
"What are the benefits and drawbacks of using containerization technologies like Docker?",
"Discuss the role of machine learning in modern data analytics and business intelligence.",
"How can developers ensure code quality and maintainability in large-scale software projects?",
"What are the best practices for secure coding and data protection in web applications?"
    ];

    // Shuffle the questions and select a subset
    const shuffleQuestions = () => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setShuffledQuestions(shuffled.slice(0, 3)); // Limit to 4 questions
    };

    // Call shuffleQuestions on component mount or when needed
    useEffect(() => {
        shuffleQuestions();
    }, []);

    // Handler to set input based on clicked text
    const handleCardClick = (text) => {
        setInput(text);
    };

    return (
        <div className="main">
            <div className="nav">
                <p>Geminie</p>
                <img src={assets.bard_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            {shuffledQuestions.map((question, index) => (
                                <div className="card" key={index} onClick={() => handleCardClick(question)}>
                                    <p>{question}</p>
                                    <img
                                        src={index === 0 ? assets.compass_icon :
                                             index === 1 ? assets.bulb_icon :
                                             index === 2 ? assets.message_icon :
                                             assets.code_icon}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.bard_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                    {/* Add any additional loader content here */}
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemmini may display inaccurate info, including about people, so double check its response. Your privacy and Gemini Apps.
                </p>
            </div>
        </div>
    );
}

export default Main;
