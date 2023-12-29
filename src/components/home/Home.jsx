/** @format */

import React from "react";
import Leading from "../template/Leading";

const Home = (props) => (
	<Leading icon="home" title="Início" subtitle="Projeto de CRUD em React">
		<div className="display-4">Bem Vindo!</div>
		<hr />
		<p className="mb-0">
			Sistema para exemplificar a construção de um cadastro desenvolvido em
			React!
		</p>
	</Leading>
);

export default Home;
