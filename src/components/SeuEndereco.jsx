/** @format */

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function SeuEndereco() {
	const [valueField, setValueField] = useState({});

	return (
		<div className='container-sm'>
			<h2 className='text-light ms-2 mt-5'>Seu Endereço</h2>
			<div className='andress-Filds pt-4 pb-4 container-fluid '>
				<div className='input-group'>
					<input
						className='input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
					/>
					<CopyToClipboard>
						<button className='btn' type='button' id='btn-01'>
							<img src='clipboard.svg' width='20px' alt='Copy to clipboard' />
						</button>
					</CopyToClipboard>
				</div>
				<div className='input-group mt-3'>
					<input
						className='input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
					/>
					<CopyToClipboard>
						<button className='btn' type='button' id='btn-01'>
							<img src='clipboard.svg' width='20px' alt='Copy to clipboard' />
						</button>
					</CopyToClipboard>
				</div><div className='input-group mt-3'>
					<input
						className='input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
					/>
					<CopyToClipboard>
						<button className='btn' type='button' id='btn-01'>
							<img src='clipboard.svg' width='20px' alt='Copy to clipboard' />
						</button>
					</CopyToClipboard>
				</div><div className='input-group mt-3'>
					<input
						className='input input-andress form-control'
						aria-describedby='btn-01'
						type='text'
					/>
					<CopyToClipboard>
						<button className='btn' type='button' id='btn-01'>
							<img src='clipboard.svg' width='20px' alt='Copy to clipboard' />
						</button>
					</CopyToClipboard>
				</div>
				<div className='input-group mt-3'>
					<input
						onChange={(e) => {
							setIsCopied(e.target.value);
						}}
						value={isCopied}
						aria-describedby='btn-02'
						className='input input-andress form-control'
						type='text'
					/>
					<CopyToClipboard text={isCopied}>
						<button className='btn' type='button' id='btn-02'>
							<img src='clipboard.svg' width='20px' alt='Copy to clipboard field-6' />
						</button>
					</CopyToClipboard>
				</div>
				

				<button className='button mt-3'>Copiar tudo</button>
			</div>
		</div>
	);
}
