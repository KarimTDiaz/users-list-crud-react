import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const CardsContainerHeader = styled.div`
	padding-left: 2rem;
	background-color: ${COLORS.decoColor};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

export { StyledCardsContainer, CardsContainerHeader };
