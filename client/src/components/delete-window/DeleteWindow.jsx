import {
	DeleteMessageContainer,
	DeleteMessage,
	DeleteOption,
	DeleteOptionsContainer
} from './styles';
import { URLS } from '../../constants/apiRequests';
import Modal from '../modal/Modal';
import CardsHeader from '../cards-header/CardsHeader';
import Text from '../text/Text';

const DeleteWindow = ({ action, setAction, id, setUsers }) => {
	return (
		<Modal>
			<div>
				<CardsHeader>
					<Text>Delete User</Text>
				</CardsHeader>
				<DeleteMessageContainer>
					<DeleteMessage>
						You are going to delete a user. Are you sure ?
					</DeleteMessage>
					<DeleteOptionsContainer>
						<DeleteOption
							onClick={() => {
								deleteUserFetch(setUsers, id);
								setAction({ ...action, trash: !action.trash });
							}}
							pointer
						>
							YES
						</DeleteOption>
						<DeleteOption
							onClick={() => setAction({ ...action, trash: !action.trash })}
							pointer
						>
							NO
						</DeleteOption>
					</DeleteOptionsContainer>
				</DeleteMessageContainer>
			</div>
		</Modal>
	);
};

const deleteUserFetch = async (setUsers, id) => {
	const request = await fetch(URLS.ALL_USERS + '/' + id, {
		method: 'DELETE'
	});
	const data = await request.json();
	setUsers(data.users);
};

export default DeleteWindow;
