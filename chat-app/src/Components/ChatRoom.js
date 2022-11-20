import React, { useState } from "react";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

const ChatRoom = () => {
    
    const [userData, setUserData] = useState({
        username: "",
        recieverName: "",
        connected: false,
        message: ""
    });

    const handleUsername = e => {
        const {value} = e.target.value;
        setUserData({...userData, "username": value})
    }

    const registerUser = () => {
        let Sock = new SockJS("hhtp://localhost:8080/ws");
    }
    
    return(
        <div className="container">
            {userData.connected ? 
                <div>
                </div>
                :
                <div className='register'>
                    <input
                        id="user-name"
                        placeholder="Enter the username: "
                        value={userData.username}
                        onChange={handleUsername}
                    />
                    <button type='button' onClick={registerUser}>
                        Connect
                    </button>

                </div>
            }
        </div>
    )
}

export default ChatRoom;