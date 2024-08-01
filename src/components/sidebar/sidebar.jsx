import React, { useContext, useState } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className='top'>
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className='menu'
                    src={assets.menu_icon}
                    alt='Menu Icon'
                />
                <div onClick={() => newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt='Plus Icon' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended && (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {previousPrompts?.map((item, index) => (
                            <div onClick={() => loadPrompt(item)} className='recent-entry' key={index}>
                                <img src={assets.message_icon} alt='Message Icon' />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='bottom'>
                <div className='bottom-item'>
                    <img src={assets.question_icon} alt='Question Icon' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item'>
                    <img src={assets.history_icon} alt='History Icon' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className='bottom-item'>
                    <img src={assets.setting_icon} alt='Setting Icon' />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
