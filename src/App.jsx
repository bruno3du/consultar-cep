/** @format */

import './App.css';
import { useState } from 'react';
import SeuEndereco from './components/SeuEndereco';

function App() {
	const [values, setValues] = useState('');
	const [andress, setAndress] = useState();
	const [openCard, setOpenCard] = useState(false);

	function handleClick(ev) {
		ev.preventDefault();

		const cep = values?.replace(/[^0-9]/g, '');
		if (cep.length !== 8) {
			return alert('Você não preencheu o campo corretamente, verifique e tente novamente')
		}

		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then((res) => res.json())
			.then((data) => {
				if (data.erro) {
					return alert(
						'Você inseriu um CEP inexistente, por favor verifique e tente novamente'
					);
				}
				setAndress({
					cep: data.cep,
					logradouro: data.logradouro,
					bairro: data.bairro,
					localidade: data.localidade,
					uf: data.uf,
				});
				setOpenCard(true);
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
						maxLength='9'
						value={values}
						className='input cep-input p-2 mt-2'
						id='cep'
						name='cep'
						type='text'
						onChange={(ev) => setValues(ev.target.value)}
						placeholder='Digite aqui seu CEP'
					/>
					<button onClick={handleClick} className='button mt-3'>
						Pesquisar
					</button>
				</form>
			</div>

			{openCard && <SeuEndereco andress={andress} />}
		</div>
	);
}

export default App;
