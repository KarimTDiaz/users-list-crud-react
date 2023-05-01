import { URLS } from '../../constants/apiRequests';
import UserCard from '../user-card/UserCard';
import DeleteWindow from '../delete-window/DeleteWindow';
import FormEditUser from '../form-edit-user/FormEditUser';
import CardsHeader from '../cards-header/CardsHeader';
import Text from '../text/Text';
import Title from '../title/Title';
import { useEffect, useState } from 'react';
import { ICONS } from '../../constants/icons';
import { StyledCardsContainer, AddIcon, AddItem } from './styles';
import FormCreateUser from '../form-create-user/FormCreateUser';

const UsersListContainer = () => {
	const [users, setUsers] = useState([]);
	const [action, setAction] = useState({
		trash: false,
		edit: false,
		create: false
	});
	const [id, setId] = useState('');
	const [userSelected, setUserSelected] = useState();

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<>
			<StyledCardsContainer>
				<CardsHeader>
					<Title>Users List</Title>
					<AddItem
						onClick={() => setAction({ ...action, create: !action.create })}
					>
						<Text>Create New User</Text>
						<AddIcon {...ICONS.add} />
					</AddItem>
				</CardsHeader>
				{users === [] ? (
					<h1>Loading...</h1>
				) : (
					users.map(user => (
						<UserCard
							key={user.userId}
							user={user}
							setUsers={setUsers}
							setId={setId}
							setUserSelected={setUserSelected}
							action={action}
							setAction={setAction}
						/>
					))
				)}
			</StyledCardsContainer>
			{action.trash && (
				<DeleteWindow
					action={action}
					setAction={setAction}
					id={id}
					setUsers={setUsers}
				></DeleteWindow>
			)}
			{action.edit && (
				<FormEditUser
					user={userSelected}
					setUsers={setUsers}
					action={action}
					setAction={setAction}
				/>
			)}
			{action.create && (
				<FormCreateUser
					setUsers={setUsers}
					action={action}
					setAction={setAction}
				/>
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
