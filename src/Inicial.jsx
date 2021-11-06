import React, { useState, useEffect } from "react";

const Inicial = () => {
const tituloinicial = "El Titulo Inicial";
const [nombre, setNombre] = useState("Pikachu");
const [animal, setAnimal] = useState("León");
const [planta, setPlanta] = useState("Toronjil");
const [contador, setContador] = useState(0);


	const modificarNombre = () => {
		console.log("nombre");
		setNombre("Charmander");
		setAnimal("Iguanga");
		setPlanta("Caléndula");
		console.log("Modificar Nombre");
		console.log(nombre);
	};

	const modificarNombre2 = () => {
		console.log("nombre");
		setNombre("Bulbasaur");
		setAnimal("Paletero");
		setPlanta("Floripondio");
		console.log("Modificar Nombre");
		console.log(nombre);
	};

	const modificarNombreVolver = () => {
		console.log("nombre");
		setNombre("Pikachu2");
		setAnimal("León2");
		setPlanta("Toronjil");
		console.log("Modificar Nombre");
		console.log(nombre);
	};

	const incrementarContador = () => {
		setContador(contador + 1);
	};
	const decrementarContador = () => {
	setContador(contador - 1);
	};	
	const incrementarContadorValor = () => {
	setContador(contador + 50);
	};
	const decrementarContadorValor = () => {
	setContador(contador - 50);
	};
	const incrementarContadorValor2 = (valor) => {
	setContador(contador + valor);
	};

	useEffect(() => {
		console.log("useEffect");
		setContador(contador + 1);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nombre]);

	return (
	<React.Fragment>
		<h1>{tituloinicial}</h1> 
		<p>{nombre}</p>
		<h2>{animal}</h2>
		<h2>{planta}</h2>
		<h1>Valor del contador: {contador}</h1>
		<button onClick={modificarNombre}>Modificar Nombre</button>
		<button onClick={modificarNombre2}>Modificar Nombre2</button>
		<button onClick={modificarNombreVolver}>Modificar Nombre Volver</button>
		<button onClick={incrementarContador}>Incrementar</button>
		<button onClick={decrementarContador}>Decrementar</button>
		<button onClick={incrementarContadorValor}>Incrementar en 50</button>
		<button onClick={decrementarContadorValor}>Decrementar en 50</button>
		<button onClick={() => {incrementarContadorValor2(20);
		}}>Incrementar en 20</button>
	</React.Fragment>
	);
};
 
export default Inicial; 