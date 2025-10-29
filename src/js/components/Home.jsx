import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container bg-black ">
			<div className="row p-4  text-center mx-3">
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5 ">
						<i className="fa-regular fa-clock"></i>
					</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5">0</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5 ">0</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5 ">0</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5 ">0</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5 ">0</h1>
				</div>
				<div className="col border border-secondary-subtle text-light rounded-2 py-5 mx-2 bg-dark">
					<h1 className="m-5">0</h1>
				</div>
			</div>

		</div>
	);
};

export default Home;