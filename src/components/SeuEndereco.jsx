/** @format */

import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function SeuEndereco({ andress }) {
	const [valueField, setValueField] = useState({});

	useEffect(() => {
		if (!andress) {
			
			return;
		}

		setValueField({
			cep: andress.cep,
			logradouro: andress?.logradouro,
			bairro: andress?.bairro,
			localidade: andress?.localidade,
			uf: andress?.uf,
		});
	}, [andress]);

	return (
		<>
			<h2 className='container-fluid end text-light mt-5'>Seu Endereço</h2>
			<div className='andress-Filds pt-4 pb-4 container-fluid'>
				<div className='input-group'>
					<input
						className='text-light input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
						value={valueField?.cep}
						onFocus={(e) => e.preventDefault()}
						onChange={(e) => setValueField({ cep: e.target.value })}
					/>
					<CopyToClipboard text={valueField?.cep}>
						<button className='btn' type='button' id='btn-01'>
							<img
								src='clipboard.svg'
								width='20px'
								alt='Copy to clipboard field-01'
							/>
						</button>
					</CopyToClipboard>
				</div>
				<div className='input-group mt-3'>
					<input
						value={valueField?.logradouro}
						readOnly
						className='text-light text-light input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
						onChange={(e) => setValueField({ logradouro: e.target.value })}
					/>
					<CopyToClipboard text={valueField?.logradouro}>
						<button className='btn' type='button' id='btn-01'>
							<img
								src='clipboard.svg'
								width='20px'
								alt='Copy to clipboard field-02'
							/>
						</button>
					</CopyToClipboard>
				</div>
				<div className='input-group mt-3'>
					<input
						value={valueField?.bairro}
						className='text-light input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
						readOnly
						onChange={(e) => setValueField({ bairro: e.target.value })}
					/>
					<CopyToClipboard text={valueField?.bairro}>
						<button className='btn' type='button' id='btn-01'>
							<img
								src='clipboard.svg'
								width='20px'
								alt='Copy to clipboard field-03'
							/>
						</button>
					</CopyToClipboard>
				</div>
				<div className='input-group mt-3'>
					<input
						value={valueField?.localidade}
						onChange={(e) => setValueField({ localidade: e.target.value })}
						className='text-light input input-andress form-control'
						aria-describedby='btn-01'
						readOnly
						type='text'
					/>
					<CopyToClipboard text={valueField?.localidade}>
						<button className='btn' type='button' id='btn-01'>
							<img
								src='clipboard.svg'
								width='20px'
								alt='Copy to clipboard field-04'
							/>
						</button>
					</CopyToClipboard>
				</div>
				<div className='input-group mt-3'>
					<input
						value={valueField?.uf}
						aria-describedby='btn-02'
						className='text-light input input-andress form-control'
						readOnly
						type='text'
					/>
					<CopyToClipboard text={valueField.uf}>
						<button className='btn' type='button' id='btn-02'>
							<img
								src='clipboard.svg'
								width='20px'
								alt='Copy to clipboard field-5'
							/>
						</button>
					</CopyToClipboard>
				</div>
				<CopyToClipboard text={`CEP: ${valueField?.cep} Endereço: ${valueField?.logradouro}, ${valueField?.bairro} - ${valueField?.localidade} - ${valueField?.uf}` }>
					<button className='button mt-3'>Copiar tudo</button>
				</CopyToClipboard>
			</div>
		</>
	);
}
