import React from 'react';
import useFormInput from "../hooks/useFormInput";

function Form() {
    const username = useFormInput("");
    const email = useFormInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username.value}, Email: ${email.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" {...username} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...email} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
    export default Form;