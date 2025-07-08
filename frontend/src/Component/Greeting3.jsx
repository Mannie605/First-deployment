import PropTypes from "prop-types";

function Greeting({ name, age}) {
    return (
    <>
    <h1>Hello, {name}</h1>
    <p>I am {age} years</p>
    </>
    );
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired, 
    age: PropTypes.number,
};

Greeting.defaultProps = {
    age: 18,
};

export default Greeting;