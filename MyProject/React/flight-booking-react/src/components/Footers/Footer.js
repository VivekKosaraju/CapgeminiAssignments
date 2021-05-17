import React from 'react'

const Footer = () => {
	return (
		<div className="container-fluid bg-dark text-light">
			<div className="row" style={{margin: "auto"}}>
				<div className="col-md-6 col-sm-12">
					<div className="container">
						<h5 className="text-center" style={{margin:"15px"}}>WebSite Links</h5>
						<ul className="footer-list text-center">
							<li className="list-group-item bg-dark">Home</li>
							<li className="list-group-item bg-dark">Profile</li>
							<li className="list-group-item bg-dark">Search Flights</li>
							<li className="list-group-item bg-dark">Login</li>
							<li className="list-group-item bg-dark">Signup</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6 col-sm-12">
					<div className="container">
						<h5 className="text-center" style={{margin:"15px"}}>Social Media</h5>
						<ul className="list-group text-center">
							<li className="list-group-item bg-dark ">Facebook</li>
							<li className="list-group-item bg-dark">Instagram</li>
							<li className="list-group-item bg-dark">Twitter</li>
							<li className="list-group-item bg-dark">Youtube</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
