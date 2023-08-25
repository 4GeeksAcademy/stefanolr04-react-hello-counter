//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i class="fa-regular fa-clock"></i>
			</div>
			<div className="fourthNumber">{props.digitFour % 10}</div>
			<div className="thirdNumber">{props.digitThree  % 10}</div>
			<div className="secondNumber">{props.digitTwo  % 10}</div>
			<div className="firstNumber">{props.digitOne  % 10}</div>
		</div>
	);
};
let counter = 0 
setInterval(function(){
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    counter ++
    ReactDOM.render(<Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four}   />, 
    document.querySelector("#app"));

},1000)

