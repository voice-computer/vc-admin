import React from 'react';
import PropTypes from 'prop-types';
import { Atoms } from 'vc-components';

import { IconLink, Sidebar } from '../widgets';

const contentAttributes = {
	p: 3,
	mt: 5,
	is: 'article',
	alignItems: 'flex-start',
	display: 'flex',
	flexWrap: 'wrap',
	mx: 'auto',
	maxWidth: '1110px'
};

const Layout = ({ title, subtitle, children }) => (
	<Atoms.Box {...contentAttributes}>
		<Sidebar>
			<IconLink to="/license" text="License" iconName="award" />
			<IconLink to="/billing" text="Billing" iconName="card" />
			<IconLink to="/account" text="Account" iconName="user" />
		</Sidebar>
		<Atoms.Box is="section" flex="2 70%" px={4} py={3}>
			<Atoms.Box is="header" mb={5}>
				<Atoms.Box is="h1" fontSize={[3, 3, 4]} mt={1} mb={0}>
					{title}
				</Atoms.Box>
				<Atoms.Box style={{ maxWidth: '500px' }}>
					{subtitle && subtitle}
				</Atoms.Box>
			</Atoms.Box>
			{children}
		</Atoms.Box>
	</Atoms.Box>
);

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.node.isRequired
};

Layout.defaultProps = {
	subtitle: null
};

export default Layout;
