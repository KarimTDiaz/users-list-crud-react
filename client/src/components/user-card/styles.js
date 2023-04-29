import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledUserCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 700px;
	padding: 0.2rem 2rem;
	background-color: ${COLORS.textColor};
	border-bottom: 1px solid ${COLORS.greyColor};
`;
const UserCardItemsLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
const UserCardItemsRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;
const UserCardImage = styled.img`
	width: 45px;
	border-radius: 50%;
	border: 2px solid ${COLORS.greyColor};
`;
const UserCardDelete = styled.img`
	width: 20px;
	cursor: pointer;
`;
const UserCardEdit = styled.img`
	width: 20px;
	cursor: pointer;
`;
const UserCardPlan = styled.p`
	color: ${({ plan }) => (plan ? 'green' : 'red')};
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

export {
	StyledUserCard,
	UserCardImage,
	UserCardButton,
	UserCardDelete,
	UserCardEdit,
	UserCardItemsLeft,
	UserCardItemsRight,
	UserCardPlan
};
