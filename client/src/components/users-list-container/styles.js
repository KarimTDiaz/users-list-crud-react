import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const CardsContainerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	background-color: ${COLORS.decoColor};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;
const AddItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
`;
const AddIcon = styled.img`
	width: 20px;
`;
export { StyledCardsContainer, CardsContainerHeader, AddIcon, AddItem };
