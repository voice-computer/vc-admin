import React from 'react';
import { Atoms } from 'vc-components';
import Layout from './layout';
import { CardBox } from '../widgets';

const AccountSettings = () => (
	<Layout
		title="Account Settings"
		subtitle="Manage your account settings for Voice Computer."
	>
		<CardBox title="Profile">
			<Atoms.Box is="form">
				<Atoms.Box style={{ maxWidth: '350px' }}>
					<Atoms.Label>
						Email
						<Atoms.Input gray type="email" name="email" />
					</Atoms.Label>
				</Atoms.Box>
				<Atoms.Box my={5} style={{ width: '100%', maxWidth: '350px' }}>
					<Atoms.Label>
						Password
						<Atoms.Input style={{ width: '100%' }} gray type="password" name="email" />
					</Atoms.Label>
				</Atoms.Box>
			</Atoms.Box>
			<Atoms.ArrowButton onClick={() => {}}>
				Save Changes
			</Atoms.ArrowButton>
		</CardBox>
	</Layout>
);

export default AccountSettings;
