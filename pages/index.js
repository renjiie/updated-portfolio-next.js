import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const roles = ['Web Developer', 'Team Player', 'Self motivated'];
const Home = () => {
	const [isFlipping, setIsFlipping] = useState(false);
	useEffect(() => {
		const animateCard = setInterval(() => {
			setIsFlipping(!isFlipping)
		}, 5000);
		return () => clearInterval(animateCard);
	}, [isFlipping]);
	const { user } = useUser();
	return (
		<BaseLayout
			className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`}
			headerType='index'
			title='Renjith Rajeevan - Portfolio'>
			<div className='main-section'>
				<div className='background-image'>
					<img src='/images/background-index.png' />
				</div>
				<Container>
					<Row>
						<Col md='6'>
							<div className='hero-section'>
								<div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
									<div className='front'>
										<div className='hero-section-content'>
											<h2> Full Stack Web Developer </h2>
											<div className='hero-section-content-intro'>
												Have a look at my portfolio and job history.
											</div>
										</div>
										<img
											alt='Guy programming welcome picture'
											className='image'
											src='/images/section-1.png'
										/>
										<div className='shadow-custom'>
											<div className='shadow-inner'> </div>
										</div>
									</div>
									<div className='back'>
										<div className='hero-section-content'>
											<h2>Looking for my Resume ? </h2>
											<div className='hero-section-content-intro'>
												Click on the resume link above.
											</div>
										</div>
										<img
											alt='Guy programming welcome picture'
											className='image'
											src='/images/section-2.png'
										/>
										<div className='shadow-custom shadow-custom-2'>
											<div className='shadow-inner'> </div>
										</div>
									</div>
								</div>
							</div>
						</Col>
						<Col md='6' className='hero-welcome-wrapper'>
							<div className='hero-welcome-text'>
								<h1>
									{user && (
										<span>
											{' '}
											<b> {user.name} </b>{' '}
										</span>
									)}
									Welcome to the portfolio website of Renjith Rajeevan. Get informed,
									collaborate and discover projects I was working on through the
									years!
								</h1>
							</div>
							<Typed
								loop
								typeSpeed={60}
								backSpeed={60}
								strings={roles}
								backDelay={1000}
								loopCount={0}
								showCursor
								className='self-typed'
								cursorChar='|'
							/>

							<div className='hero-welcome-bio'>
								<h2>Let's take a look on my work.</h2>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</BaseLayout>
	);
};

export default Home;
