import React from 'react';
import NavHeader from './NavHeader';
import Head from 'next/head';

const BaseLayout = (props) => {
	const { className, children, cannonical } = props;
	const headerType = props.headerType || 'default';
	const title = props.title || 'Renjith Rajeevan Portfolio';
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content="My name is Renjith Rajeevan and I am an experienced software engineer and web developer."
				/>
				<meta
					name='keywords'
					content='Renjith portfolio, Renjith resume, Renjith cv, Renjith web developer portfolio'
				/>
				<meta
					property='og:title'
					content='Renjith Rajeevan - programmer, developer'
				/>
				<meta property='og:locale' content='en_EU' />
				<meta property='og:url' content={`${process.env.BASE_URL}`} />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content='My name is Renjith Rajeevan and I am an experienced software engineer and web developer.'
				/>
				<link
					href='https://fonts.googleapis.com/css?family=Montserrat:400,700'
					rel='stylesheet'
				/>
				{cannonical && (
					<link
						rel='cannonical'
						href={`${process.env.BASE_URL}${cannonical}`}
					/>
				)}
				<link rel='icon' type='image/ico' href='/favicon.ico' />
			</Head>
			<div className='layout-container'>
				<NavHeader
					className={`port-nav-${headerType}`}
					// isAuthenticated={isAuthenticated}
					// user={user}
					// isSiteOwner={isSiteOwner}
				/>
				<main className={`cover ${className}`}>
					<div className='wrapper'>{children}</div>
				</main>
			</div>
		</React.Fragment>
	);
};

export default BaseLayout;
