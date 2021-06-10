import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Buttons = styled.div`
	width: 40vw;
	display: flex;
	justify-content: space-between;
	color: #291720;
	> button {
		cursor: pointer;
		padding: 1rem 3.2rem;
		border: 1px solid #000;
		overflow: hidden;
		color: #fff;
		background: black;
		transition: all ease 0.2s;
		&:hover {
			color: black;
			background: white;
		}
	}
`;

export const Input = styled.div`
	> textarea {
		outline: none;
		width: 40vw;
		height: 30vh;
		font-family: 'Oxanium', cursive;
		font-size: 1.3rem;
		border: 1px solid #000;
		padding: 20px 20px;
		resize: none;
	}
`;

export const Dados = styled.div`
	width: 40vw;
	text-align: start;
`;

export const Anuncio = styled.div``;
