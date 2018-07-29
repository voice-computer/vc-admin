import React from 'react';
import { Atoms, Molecules, Organisms } from 'vc-components';

const iconAttributes = {
	name: 'user',
	color: 'primary.main',
	iconSize: 'sm',
	mr: 2
};

const DesktopNav = () => (
	<Organisms.DesktopMenu
		renderRightNav={() => (
			<React.Fragment>
				<Molecules.DropdownNav
					title="Account"
					iconAttributes={iconAttributes}
					left="-150px"
					arrowPosition="240px"
				>
					<Atoms.Box my={-2}>
						<Atoms.NavLink p={2} to="/account">Settings</Atoms.NavLink>
						<Atoms.NavLink p={2} to="/sign-out">Sign Out</Atoms.NavLink>
					</Atoms.Box>
				</Molecules.DropdownNav>
			</React.Fragment>
		)}
	/>
);

export default DesktopNav;
