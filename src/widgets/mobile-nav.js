import React from 'react';
import sys from 'system-components';

import { Atoms, Organisms } from 'vc-components';

const links = [
	{ text: 'Manage Licenses', to: '/license' },
	{ text: 'Billing', to: '/billing' },
	{ type: 'divider' },
	{ text: 'Account Settings', to: '/account' },
	{ text: 'Sign Out', to: '/sign-out' }
];

const Divider = sys({
	borderTop: '1px solid',
	borderColor: 'neutral.2',
	my: 2
});

const MobileMenu = () => (
	<Organisms.MobileMenu
		renderMenu={dismissMenu => (
			<Atoms.Box mt={3}>
				{links.map(({ text, type, ...props }) => {
					if (type === 'divider') return <Divider />;
					return (
						<Atoms.NavLink
							{...props}
							onClick={dismissMenu}
							py={3}
							fontSize="1.2"
							justifyContent="flex-start"
						>
							{text}
						</Atoms.NavLink>
					);
				})}
			</Atoms.Box>
		)}
	/>
);

export default MobileMenu;
