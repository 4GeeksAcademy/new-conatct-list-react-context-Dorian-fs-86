import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context)
	useEffect(() => {
		actions.getContactList()
	}, [])
	console.log(store.contactList)



	return (

		<div className="text-center mt-5">
			<h1>Contact List</h1>
			<div>
				{store.contactList.map(contact => {
					return (
						<div>
							<div>{contact.name}</div>
							<div>{contact.phone}</div>
							<div>{contact.address}</div>
							<div>{contact.email}</div>
							<div>eliminar con button</div>
							<div>editar con button</div>
						</div>
					)
				})}
			</div>


			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
}
