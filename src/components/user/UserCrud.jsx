/** @format */

import React, { Component } from "react";
import Leading from "../template/Leading";
import axios from "axios";
import UserForm from "./UserForm";

const headerProps = {
	icon: "users",
	title: "Usuários",
	subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
	user: { name: "", email: "" },
	list: [],
};

export default class UserCrud extends Component {
	state = { ...initialState };

	componentDidMount() {
		axios(baseUrl).then((resp) => {
			this.setState({ list: resp.data });
		});
	}

	clear = () => {
		this.setState({ user: initialState.user });
	};

	save = () => {
		const user = this.state.user;
		const method = user.id ? "put" : "post";
		const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
		axios[method](url, user).then((resp) => {
			const list = this.getUpdatedList(resp.data);
			this.setState({ user: initialState.user, list });
		});
	};

	getUpdatedList = (user, add = true) => {
		const list = this.state.list.filter((u) => u.id !== user.id);
		if (add) list.unshift(user);
		return list;
	};

	updateField = (event) => {
		const user = { ...this.state.user };
		user[event.target.name] = event.target.value;
		this.setState({ user });
	};

	renderForm() {
		return (
			<UserForm
				user={this.state.user}
				onUpdateField={this.updateField}
				onSave={this.save}
				onClear={this.clear}
			/>
		);
	}

	load = (user) => {
		this.setState({ user });
	};

	remove = (user) => {
		axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
			const updatedList = this.getUpdatedList(user, false);
			this.setState({ list: updatedList });
		});
	};

	renderTable() {
		return (
			<table className="table mt-4">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>E-mail</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>{this.renderRows()}</tbody>
			</table>
		);
	}

	renderRows() {
		return this.state.list.map((user) => {
			return (
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>
						<button
							className="btn btn-warning mt-sm-2"
							onClick={() => this.load(user)}>
							<i className="fa fa-pencil"></i>
						</button>

						<button
							className="btn btn-danger ml-lg-2 mt-sm-2"
							onClick={() => this.remove(user)}>
							<i className="fa fa-trash"></i>
						</button>
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<Leading {...headerProps}>
				{this.renderForm()}
				{this.renderTable()}
			</Leading>
		);
	}
}
