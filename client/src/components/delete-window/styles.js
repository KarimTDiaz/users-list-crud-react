import styled from 'styled-components';
import { COLORS } from '../../constants/variables';
const DeleteMessageContainer = styled.div`
	position: absolute;
	display: flex;
	gap: 1rem;
	right: -200px;
	background-color: ${COLORS.cardColor};
`;
const DeleteMessage = styled.p`
	cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
`;

export { DeleteMessageContainer, DeleteMessage };
