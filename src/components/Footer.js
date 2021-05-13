import React from 'react';

import linkedin from '../images/linkedin.png';

function Footer() {
	return (
		<footer className='footer'>
			<h3 />
			<h3>
				desenvolvido por
				<a
					target='_blank'
					rel='noreferrer'
					href='https://github.com/angelis-reis'
				>
					angelis-reis
				</a>
			</h3>

			<a
				target='_blank'
				rel='noreferrer'
				href='https://github.com/angelis-reis'
			>
				<img src={linkedin} alt='linkedin link' />
			</a>
		</footer>
	);
}

export default Footer;
