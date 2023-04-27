import { DeleteMessageContainer, DeleteMessage } from './styles';
import { URLS } from '../../constants/apiRequests';

const DeleteWindow = ({ trash, setTrash, id, setUsers }) => {
	return (
		<DeleteMessageContainer>
			<DeleteMessage>Are you sure ?</DeleteMessage>
			<DeleteMessage
				onClick={() => {
					deleteUserFetch(setUsers, id);
					setTrash(!trash);
				}}
				pointer
			>
				YES
			</DeleteMessage>
			<DeleteMessage onClick={() => setTrash(!trash)} pointer>
				NO
			</DeleteMessage>
		</DeleteMessageContainer>
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
