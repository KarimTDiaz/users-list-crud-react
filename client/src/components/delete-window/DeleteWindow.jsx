import { DeleteMessageContainer, DeleteMessage } from './styles';
import { URLS } from '../../constants/apiRequests';

const DeleteWindow = ({ action, setAction, id, setUsers }) => {
	return (
		<DeleteMessageContainer>
			<DeleteMessage>Are you sure ?</DeleteMessage>
			<DeleteMessage
				onClick={() => {
					deleteUserFetch(setUsers, id);
					setAction({ ...action, trash: !action.trash });
				}}
				pointer
			>
				YES
			</DeleteMessage>
			<DeleteMessage
				onClick={() => setAction({ ...action, trash: !action.trash })}
				pointer
			>
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
