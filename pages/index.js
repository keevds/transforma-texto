import Head from 'next/head';
import Transforma from '../components/Transforma/Transforma';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Transforma texto</title>
			</Head>

			<main>
				<Transforma />
			</main>
		</div>
	);
}
