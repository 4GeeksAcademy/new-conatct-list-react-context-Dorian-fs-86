import AddContact from "../views/add-contact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactList: [],
			AddContact: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContactList: async() => {
				// me quiero traer la lista de internet
				const response = await fetch('https://playground.4geeks.com/contact/agendas/dorian/contacts', {method: 'GET'})
				
				const data = await response.json()
				console.log(data)
				const store = getStore()
				setStore({...store, contactList: data.contacts})
				// return data.contacts
			},
			getAddContact: () => {
				
	


			}
		}
	};
};

export default getState;
