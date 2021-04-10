import React from 'react';

// Função recebendo o props com o valor da classe que variou a cada aperto do botão gerar. Com isSecureContext, mudo a class do hero, mudando a imagem de background

function Hero(props) {
	// console.log("props recebido: ", props.changeHero)

	let heroFinal = props.image;

	// console.log("heroFinal: ", heroFinal)

	return (
		<section className={heroFinal}>
			<div className='hero-text'>
				<div className='titulo'>
					<h1 className='hero-text-1'>Samba</h1>
					<h1 className='hero-text-2'>Ipsum</h1>
				</div>
				<h2>Lorem Ipsum pra quem não é ruim</h2>
				<h2>da cabeça e nem doente do pé</h2>
			</div>
		</section>
	);
}

export default Hero;
