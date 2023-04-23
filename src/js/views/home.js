import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/fin-de-semana")
			.then((response) => response.json())
			.then((data) => setContacts(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="container">
			<div className="row">
				{contacts.map((contact, index) => (
					<div key={index} className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{contact.full_name}</h5>
								<p className="card-text">
									<strong>Phone:</strong> {contact.phone}
								</p>
								<p className="card-text">
									<strong>Email:</strong> {contact.email}
								</p>
								<Link to={"/edit/" + contact.id}>
									<button
										type="button"
										className="btn btn-secondary"
									>
										<i className="bi bi-pencil"></i> Edit
									</button>
								</Link>
								<button
									type="button"
									className="btn btn-danger ms-2">
									<i className="bi bi-trash"></i> Eliminar
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div >
	);
};

export { Home };
