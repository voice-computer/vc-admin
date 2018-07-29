import React from 'react';
import PropTypes from 'prop-types';
import { Atoms, Molecules } from 'vc-components';

const titleAttributes = {
	is: 'h2',
	py: 3,
	px: 4,
	fontSize: 1,
	bg: 'primary.main',
	color: 'white'
};

const CardBox = ({ title, children, ...props }) => (
	<Atoms.Box {...props}>
		<Molecules.Section
			boxShadow={3}
			mt={4}
			titleAttributes={{ text: title, ...titleAttributes }}
		>
			<Atoms.Box p={4}>
				{children}
			</Atoms.Box>
		</Molecules.Section>
	</Atoms.Box>
);

CardBox.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default CardBox;
