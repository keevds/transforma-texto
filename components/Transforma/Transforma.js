import React, { useState, useRef } from 'react';
import { Container, Buttons, Input, Dados, Anuncio } from './Style';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Transforma() {
	const [texto, setTexto] = useState('');

	const input = useRef(null);

	function valorTexto(e) {
		setTexto(String(e.target.value)); //Pegar o texto e transformar em String
	}

	function capslock() {
		setTexto(texto.toUpperCase()); //Transformar em capslock
		input.current.style.textTransform = 'none';
	}
	function lowercase() {
		setTexto(texto.toLowerCase()); //Transforma em minúscula
		input.current.style.textTransform = 'none';
	}

	function capitalizar() {
		input.current.style.textTransform = 'capitalize';
	}
	function clear() {
		setTexto('');
		input.current.style.fontStyle = 'normal';
		input.current.style.textTransform = 'none';
	}

	return (
		<Container>
			<Buttons>
				<button onClick={capslock}>
					<span>
						<span>Capslock</span>
					</span>
				</button>
				<button onClick={lowercase}>Minúscula</button>
				<button onClick={capitalizar}>Maiúsculas</button>
				<CopyToClipboard text={texto}>
					<button>Copiar</button>
				</CopyToClipboard>
				<button onClick={clear}>Limpar</button>
			</Buttons>
			<Input>
				<textarea
					placeholder="Digite ou cole o texto aqui"
					value={texto}
					ref={input}
					type="text"
					onChange={valorTexto}></textarea>
			</Input>
			<Dados>
				<p>Caractéres: {texto.length}</p>
			</Dados>
			<Anuncio></Anuncio>
		</Container>
	);
}

export default Transforma;
