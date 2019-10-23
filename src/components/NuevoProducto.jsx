import React from 'react';

const NuevoProducto = () => {
	const [ nombre, setNombre ] = React.useState('');
	const [ precio, setPrecio ] = React.useState('');

	const submitNuevoProducto = (e) => {
		e.preventDefault();
		if (nombre.trim() === '' || precio.trim() === '') {
			return;
        }
        console.log("Si entro");
        

		// Validar el formulario
	};

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
						<form onSubmit={submitNuevoProducto}>
							<div className="form-group">
								<label>Nombre Libro</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre Libro"
									required
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Precio Libro</label>
								<input
									type="text"
									className="form-control"
									placeholder="Precio Libro"
									required
									value={precio}
									onChange={(e) => setPrecio(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Agregar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NuevoProducto;
