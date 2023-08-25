import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i class="fa-regular fa-clock"></i>
			</div>
			<div className="fourthNumber">0</div>
			<div className="thirdNumber">0</div>
			<div className="secondNumber">0</div>
			<div className="firstNumber">{props.digit}</div>


		</div>
	);
};
setInterval(function(){

},1000)



export default Home;
