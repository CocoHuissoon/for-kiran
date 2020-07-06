import React, {useState} from 'react';
import heart from './heart.svg';
import './App.css';
import Button from "react-bootstrap/Button";

function App() {
    const [message, setMessage] = useState("I love you more!");


    function changeMessage() {
        setMessage("❤️Yes I really really do ❤");
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={heart} className="App-logo" alt="logo"/>
                <h1>{message}</h1>

                <Button
                    hidden={message === "❤️Yes I really really do ❤"}
                    variant="success"
                    size={"lg"}
                    onClick={() => {
                        changeMessage()
                    }}>No you don't!</Button>
            </header>
        </div>
    );
}

export default App;
