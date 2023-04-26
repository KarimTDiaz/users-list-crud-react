import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledUserCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 500px;
	padding: 1rem 2rem;
	background-image: linear-gradient(
		to left,
		${COLORS.borderColor},
		${COLORS.cardColor}
	);

	border-radius: 10px;
`;

const UserCardImage = styled.img`
	width: 50px;
	border-radius: 50%;
`;
const UserCardDelete = styled.img`
	width: 20px;
	cursor: pointer;
`;
const UserCardButton = styled.div`
	cursor: pointer;
`;

export { StyledUserCard, UserCardImage, UserCardButton, UserCardDelete };
