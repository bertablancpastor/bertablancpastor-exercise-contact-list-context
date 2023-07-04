const getState = ({ getStore, setStore }) => {
	return {
		//Donde almazenamos los datos
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		//Donde se crean las funciones que se iran ejecutando globalmente
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			//1.Get All available agendas right now
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/bertablancpastoragenda/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then((response) => console.log(response))
					.then((data) => setStore({ contacts: data }))// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},
			
			//8.Update one contact
			updateContact: (full_name, email, address, phone) => {
				fetch('https://assets.breatheco.de/apis/fake/contact', {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						"full_name": full_name,
						"email": email,
						"agenda_slug": "bertablancpastoragenda",
						"address": address,
						"phone": phone
					}), // body data type must match "Content-Type" header
				})//busca informacion a la url dada con el metodo especificado
					.then((response) => response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
					.then((data) => console.log(data))// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},

		}
	}
}


export default getState;