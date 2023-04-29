import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const EditPhotoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding-top: 1rem;
`;
const FormEditPhoto = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 0.5rem;
	width: 60%;
	border: 1px solid ${COLORS.decoColor};
	border-radius: 20px;
	cursor: pointer;
`;
const EditCameraIcon = styled.img`
	width: 25px;
`;
const FormEdit = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
`;
const FormContainer = styled.div`
	background-color: ${COLORS.textColor};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;
const FormField = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`;
export {
	FormEdit,
	FormContainer,
	FormField,
	FormEditPhoto,
	EditCameraIcon,
	EditPhotoContainer
};
