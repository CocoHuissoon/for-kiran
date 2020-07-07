import heart from "../heart.svg";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";


const LoveMessage = () => {

    const [message, setMessage] = useState("I love you more!");

    function changeMessage() {
        setMessage("❤️ Yes I really really do ❤");
    }

    return (
        <div id="loveMessage" className="App-header">
            <img src={heart} className="App-logo" alt="logo"/>
            <h1>{message}</h1>

            <Button
                hidden={message === "❤️ Yes I really really do ❤"}
                variant="success"
                size={"lg"}
                onClick={() => {
                    changeMessage()
                }}>No you don't!</Button>
        </div>
    );
};

export default LoveMessage;
