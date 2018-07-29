import React from 'react';
import { Route } from 'react-router-dom';
import { Licenses, AccountSettings, Billing } from './views';
import { DesktopNav, MobileMenu } from './widgets';

const App = () => (
	<main>
		<header>
			<DesktopNav />
			<MobileMenu />
		</header>
		<Route exact path="/" component={Licenses} />
		<Route exact path="/license" component={Licenses} />
		<Route exact path="/account" component={AccountSettings} />
		<Route exact path="/billing" component={Billing} />
	</main>
);

export default App;
