import React from 'react';
import PropTypes from 'prop-types';
import { Atoms } from 'vc-components';

const CardListItem = ({ itemList }) => (
	<Atoms.Box display="flex" flexWrap="wrap" m={-3} mb={0}>
		{itemList.map(({ title, subtitle }) => (
			<Atoms.Box m={3}>
				<Atoms.Subtitle is="h3">{title}</Atoms.Subtitle>
				<Atoms.Title is="p" m={0} style={{ fontWeight: 700 }}>{subtitle}</Atoms.Title>
			</Atoms.Box>
		))}
	</Atoms.Box>
);

CardListItem.propTypes = {
	itemList: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired
	})).isRequired
};

export default CardListItem;
