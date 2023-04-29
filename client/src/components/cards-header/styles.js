import styled from 'styled-components';
import { COLORS } from '../../constants/variables';
const StyledCardsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	background-color: ${COLORS.decoColor};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

export { StyledCardsHeader };
