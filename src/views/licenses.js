import React from 'react';
import { Atoms } from 'vc-components';

import Layout from './layout';
import { CardBox, CardList, ComputerCard } from '../widgets';

const computer = {
	title: 'John Snow PC',
	subtitle: 'Windows 10',
	details: [
		{ label: 'Machine', text: 'bloop blahp' },
		{ label: 'Machine', text: 'bloop blahp' },
		{ label: 'Machine', text: 'bloop blahp' }
	],
	onClick: () => {}
};

const computerList = [computer, computer, computer];

const Licenses = () => (
	<Layout
		title="Manage Licenses"
		subtitle="Manage your Voice Computer licenses and computers."
	>
		<CardBox title="License Info">
			<CardList
				itemList={[
					{ title: 'Available Licenses', subtitle: 3 },
					{ title: 'Licenses in use', subtitle: 3 }
				]}
			/>
		</CardBox>
		<CardBox is="article" title="Active Computers">
			<Atoms.Box mx={-4} mt={-5} mb={-5}>
				{computerList.map(x => <ComputerCard {...x} />)}
			</Atoms.Box>
		</CardBox>
	</Layout>
);

export default Licenses;
