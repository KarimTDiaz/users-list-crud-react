import { URLS } from '../../constants/apiRequests';
import UserCard from '../user-card/UserCard';
import { CardsContainerHeader, StyledCardsContainer } from './styles';
import { useEffect, useState } from 'react';
import DeleteWindow from '../delete-window/DeleteWindow';
import FormEditUser from '../form-edit-user/FormEditUser';
import { StyledTitle } from '../title/styles';

const UsersListContainer = () => {
	const [users, setUsers] = useState([]);
	const [trash, setTrash] = useState(false);
	const [edit, setEdit] = useState(false);
	const [id, setId] = useState('');

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<>
			<StyledCardsContainer>
				<CardsContainerHeader>
					<StyledTitle>Users List</StyledTitle>
				</CardsContainerHeader>
				{users.map(user => (
					<UserCard
						key={user.userId}
						user={user}
						setUsers={setUsers}
						trash={trash}
						setTrash={setTrash}
						setId={setId}
						edit={edit}
						setEdit={setEdit}
					/>
				))}
			</StyledCardsContainer>
			{trash && (
				<DeleteWindow
					trash={trash}
					setTrash={setTrash}
					id={id}
					setUsers={setUsers}
				></DeleteWindow>
			)}
		</>
	);
};

const getAllUsers = async setUsers => {
	const request = await fetch(URLS.ALL_USERS);
	const data = await request.json();
	setUsers(data);
};

export default UsersListContainer;
