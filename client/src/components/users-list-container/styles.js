import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
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
export { StyledCardsContainer, AddIcon, AddItem };
