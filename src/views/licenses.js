import React from 'react';
import { Atoms } from 'vc-components';

import Layout from './layout';
import { CardBox, CardList } from '../widgets';

const Licenses = () => (
	<Layout
		title="Manage Licenses"
		subtitle="Manage your Voice Computer licenses and computers."
	>
		<CardList
			itemList={[
				{ title: 'Available Licenses', subtitle: 3 },
				{ title: 'Licenses in use', subtitle: 3 }
			]}
		/>
		<CardBox title="Active Computers">
			asdf
		</CardBox>
	</Layout>
);

export default Licenses;
