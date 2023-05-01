import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledDetails = styled.div`
	background-color: ${COLORS.textColor};
	padding: 1rem;
`;
const StyledImage = styled.img`
	margin-left: auto;
	margin-right: auto;
	border-radius: 50%;
`;
const DetailsName = styled.h2``;
const DetailsKey = styled.p``;
const DetailsValue = styled.span`
	color: ${COLORS.decoColor};
`;
const DetailsActive = styled.p`
	color: ${({ active }) => (active ? 'green' : `${COLORS.decoColor}`)};
`;

export {
	StyledDetails,
	StyledImage,
	DetailsName,
	DetailsKey,
	DetailsValue,
	DetailsActive
};
