import { useState, useEffect } from "react";

function ControlledInput() {
    const [text, setText] = useState ("");
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("Text input changed:", text);
    }, [text]); // Runs whenever "text" state changes

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted with text", text);
        console.log("form submitted with password", password);
    };

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />

                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>Current text: {text}</p>
                    <button type="submit">Submit</button>
                    </form>
            </div>
    );
}

export default ControlledInput;