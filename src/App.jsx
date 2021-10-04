/** @format */

import './App.css';
import { useState } from 'react';
import SeuEndereco from './components/SeuEndereco';

function App() {
	const [andress, setAndress] = useState({});

	function handleChange(ev) {
		const { value } = ev.target;

		const cep = value?.replace(/[^0-9]/g, '');
		if (cep.length !== 8) {
			return;
		}
		setAndress({});

		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then((res) => res.json())
			.then((data) => {
				setAndress(...value, { logradouro: data.logradouro });
				setAndress(...value, { bairro: data.bairro });
				setAndress(...value, { localidade: data.localidade });
				setAndress(...value, { uf: data.uf });
			});
	}

	return (
		<div className='d-flex justify-content-center flex-column'>
			<h1 className='container text-center title mt-5'>Buscar meu Endereço</h1>

			<div className='container-fluid d-flex justify-content-center mt-5'>
				<form className='d-flex flex-column'>
					<label className='text-light cep' htmlFor='cep'>
						CEP
					</label>
					<input
						className='input cep-input p-2 mt-2'
						id='cep'
						name='cep'
						type='number'
						placeholder='Digite aqui seu CEP'
						onChange={handleChange}
					/>
					<button className='button mt-3'>Pesquisar</button>
				</form>
			</div>

			<SeuEndereco />
		</div>
	);
}

export default App;
