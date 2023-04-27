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
	/* &::after {
		content: 'DELETE USER';
		bottom: 100px;
		left: -3.5%;
		font-size: 1rem;
		padding: 6px 3px;
		background-color: black;
		color: #fffbf6;
		border-radius: 5px;
		transform: scale(0);
		transition: transform 0.2s;
	} */
`;

export { StyledUserCard, UserCardImage, UserCardButton, UserCardDelete };
