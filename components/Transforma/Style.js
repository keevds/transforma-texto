import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Buttons = styled.div`
	width: 50vw;
	display: flex;
	justify-content: space-between;
	color: #291720;
	@media (max-width: 1024px) {
		width: 70vw;
	}
	@media (max-width: 640px) {
		width: 95vw;
	}
	@media (max-width: 425px) {
		flex-direction: column;
	}
	> button {
		cursor: pointer;
		/* padding: 1rem 3.2rem; */
		width: 300px;
		height: 50px;
		border: 1px solid #000;
		overflow: hidden;
		color: #fff;
		background: black;
		transition: all ease 0.2s;
		&:hover {
			color: black;
			background: white;
		}
		@media (max-width: 425px) {
			width: 100%;
		}
	}
`;

export const Input = styled.div`
	> textarea {
		outline: none;
		width: 50vw;
		height: 40vh;
		font-family: 'Oxanium', cursive;
		font-size: 1.3rem;
		border: 1px solid #000;
		padding: 20px 20px;
		resize: none;

		@media (max-width: 1024px) {
			width: 70vw;
		}
		@media (max-width: 640px) {
			width: 95vw;
		}
	}
`;

export const Dados = styled.div`
	width: 50vw;
	text-align: start;
	@media (max-width: 1024px) {
		width: 70vw;
	}
	@media (max-width: 640px) {
		width: 95vw;
	}
`;

export const Anuncio = styled.div``;
