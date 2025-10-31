import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const Home = ({seg}) => {
let segundos1 = seg % 10;
  let segundos2 = Math.floor(seg / 10) % 6;
  let minutos1 = Math.floor(seg / 60) % 10;
  let minutos2 = Math.floor(seg / 600) % 6;
  let horas1 = Math.floor(seg / 3600) % 10;
  let horas2 = Math.floor(seg / 36000);
	return (
		<div className="container bg-black ">
			<div className="row p-4  text-center mx-3">
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5 ">
						<i className="fa-regular fa-clock"></i>
					</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5" >{horas2}</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5" >{horas1}</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5" >{minutos2}</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5" >{minutos1}</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5" >{segundos2}</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5"> {segundos1}</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;