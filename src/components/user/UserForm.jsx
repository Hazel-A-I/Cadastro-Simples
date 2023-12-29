/** @format */

import React from "react";

const UserForm = ({ user, onUpdateField, onSave, onClear }) => {
	return (
		<div className="form">
			<div className="row">
				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="">Nome</label>
						<input
							type="text"
							className="form-control"
							name="name"
							value={user.name}
							onChange={onUpdateField}
							placeholder="Digite o nome..."
						/>
					</div>
				</div>

				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="">E-mail</label>
						<input
							type="text"
							className="form-control"
							name="email"
							value={user.email}
							onChange={onUpdateField}
							placeholder="Digite o e-mail..."
						/>
					</div>
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12 d-flex justify-content-end">
					<button className="btn btn-primary" onClick={onSave}>
						Salvar
					</button>
					<button className="btn btn-secondary ml-2" onClick={onClear}>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserForm;
