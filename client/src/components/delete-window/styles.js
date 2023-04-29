import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const DeleteMessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	background-color: ${COLORS.textColor};
`;
const DeleteMessage = styled.p``;
const DeleteOptionsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 4rem;
`;
const DeleteOption = styled.p`
	padding: 0.5rem;
	font-size: 1.5rem;
	background-color: ${COLORS.greyColor};
	color: ${COLORS.textColor};
	border-radius: 10px;
	cursor: pointer;
`;

export {
	DeleteMessageContainer,
	DeleteMessage,
	DeleteOption,
	DeleteOptionsContainer
};
