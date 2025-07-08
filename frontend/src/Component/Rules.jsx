import pawpaw from "../Media/Dinosaurs (Reptiles).webp";

function Rules () {
    const name = 'OTS';
   return(
    // must use a parent element for multiple element either use DIV tag or a react.fragment which is an empty tag
    <>
    <h1>Hello React</h1>
    <p>All about react</p>

    {/* images are closing tag they require a closing slash*/}
    <img src = {pawpaw} alt ='pawpaw'/>

{ /*use curly braces to input javascript expression inside of JSX */}
<h3>The name of this Academy is {name}</h3>

    </>
   );
}

export default Rules;