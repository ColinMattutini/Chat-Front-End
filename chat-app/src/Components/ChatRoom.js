import React, { useState } from "react";


const ChatRoom = () => {
    
    const [userData, setUserData] = useState({
        username: "",
        recieverName: "",
        connected: false,
        message: ""
    });


    
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
                    

                </div>
            }
        </div>
    )
}

export default ChatRoom;