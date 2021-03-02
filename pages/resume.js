import BaseLayout from '../components/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

const CV = () => {
	return (
		<BaseLayout>
			<BasePage title='Preview of my RESUME' className='cv-page'>
				<Row>
					<Col md={{ size: 8, offset: 2 }}>
						<div className='cv-title'>
							<a
								download='Renjith_Resume.pdf'
								className='btn btn-success'
								href='/Renjith_Resume.pdf'>
								Download
							</a>
						</div>
						<iframe
							style={{ width: '100%', height: '800px' }}
							src='/Renjith_Resume.pdf'></iframe>
					</Col>
				</Row>
			</BasePage>
		</BaseLayout>
	);
};

export default CV;
