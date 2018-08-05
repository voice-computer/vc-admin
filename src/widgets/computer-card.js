import React from 'react';
import { Atoms } from 'vc-components';

const ComputerCard = ({ subtitle, title, details, onClick, id }) => (
	<Atoms.Box p={4} py={5} style={{ borderBottom: '1px solid #eeeff1' }}>
		<Atoms.Header>
			<Atoms.Title>{title}</Atoms.Title>
			<Atoms.Subtitle>{subtitle}</Atoms.Subtitle>
		</Atoms.Header>
		<Atoms.Box display="flex" flexWrap="wrap" alignItem="center">
			{details.map(({ label, text }) => (
				<Atoms.Box flex="1 33.3333%" minWidth="275px">
					<Atoms.Box is="h4" fontSize={0} m={0}>
						{label}
					</Atoms.Box>
					{text}
				</Atoms.Box>
			))}
		</Atoms.Box>
		<Atoms.Box is="footer" mt={5}>
			<Atoms.Button
				onClick={() => { onClick(id); }}
				outline
				type="primary"
			>
				Manage
			</Atoms.Button>
		</Atoms.Box>
	</Atoms.Box>
);

export default ComputerCard;
