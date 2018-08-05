import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import Layout from './layout';
import { CardBox, CardList } from '../widgets';

const AccountSettings = () => (
	<Layout
		title="Billing"
		subtitle="See your next bill date, manage billing preferences, and download past invoices."
	>
		<CardBox title="Current Subscription">
			<CardList
				minWidth="300px"
				itemList={[{ title: 'Next due date', subtitle: 'May 31st 2018' }]}
			/>
			<Atoms.Button outline>Pause Subscription</Atoms.Button>
		</CardBox>
		<CardBox title="Billing History">
			<Molecules.Table
				m={-4}
				width="calc(100% + 48px)"
				headerCells={[
					{ text: 'Date' },
					{ text: 'Status' },
					{ text: 'Download' }
				]}
				bodyCells={[
					[
						{
							text: 'May 10, 2018',
							cellAttributes: { textAlign: 'center' }
						},
						{
							text: 'Paid',
							cellAttributes: { textAlign: 'center' }
						},
						{
							iconAttributes: {
								name: 'download',
								title: 'Download',
								description: 'Download the invoice',
								type: 'outline',
								hover: { color: 'tertiary.main' }
							},
							to: '/',
							cellAttributes: { textAlign: 'center' }
						}
					]
				]}
			/>
		</CardBox>
	</Layout>
);

export default AccountSettings;
