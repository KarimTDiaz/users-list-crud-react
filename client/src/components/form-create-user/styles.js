import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const FormContainerCreate = styled.div`
	background-color: ${COLORS.textColor};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;
const EditPhotoContainerCreate = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding-top: 1rem;
`;
const FormEditPhotoCreate = styled.div`
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
const EditCameraIconCreate = styled.img`
	width: 25px;
`;
const FormFieldCreate = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`;
const FormCreate = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
`;
export {
	FormContainerCreate,
	FormEditPhotoCreate,
	EditPhotoContainerCreate,
	EditCameraIconCreate,
	FormFieldCreate,
	FormCreate
};
