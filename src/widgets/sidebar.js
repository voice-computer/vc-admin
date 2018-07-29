import styled from 'styled-components';
import { Atoms } from 'vc-components';

const Sidebar = styled(Atoms.Box).attrs({
	is: 'aside',
	flex: '1 250px',
	bg: 'neutral.1',
	p: 4,
	my: 3
})`
	@media (max-width: 880px) {
		display: none;
	}
`;

export default Sidebar;
