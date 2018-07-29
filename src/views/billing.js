import React from 'react';
import { Atoms } from 'vc-components';
import Layout from './layout';
import { CardBox, CardList } from '../widgets';

const AccountSettings = () => (
	<Layout
		title="Billing"
		subtitle="See your next bill date, manage billing preferences, and download past invoices."
	>
		<CardList
			itemList={[
				{ title: 'Next due date', subtitle: 'May 31st 2018' }
			]}
		/>
		<CardBox mb={6} title="Current Subscription">
			asdfadf
		</CardBox>
		<CardBox title="Invoice History">

		</CardBox>
	</Layout>
);

export default AccountSettings;
