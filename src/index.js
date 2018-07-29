import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Theme, Atoms } from 'vc-components';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

const Layout = () => (
	<BrowserRouter>
		<Theme>
			<Helmet
				title="Voice Computer Admin"
				meta={[
					{ name: 'description', content: 'Manage your voice computer account' }
				]}
			/>
			<Atoms.Container>
				<App />
			</Atoms.Container>
		</Theme>
	</BrowserRouter>
)

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
