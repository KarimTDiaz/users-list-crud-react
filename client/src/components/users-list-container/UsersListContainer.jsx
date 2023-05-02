import { useEffect, useState } from 'react';
import { URLS } from '../../constants/apiRequests';
import { ICONS } from '../../constants/icons';
import { StyledCardsContainer, AddIcon, AddItem } from './styles';
import UserCard from '../user-card/UserCard';
import DeleteWindow from '../delete-window/DeleteWindow';
import FormEditUser from '../form-edit-user/FormEditUser';
import CardsHeader from '../cards-header/CardsHeader';
import Text from '../text/Text';
import Title from '../title/Title';
import FormCreateUser from '../form-create-user/FormCreateUser';
import { useFetch } from '../../hooks/useFetch';

const UsersListContainer = () => {
	const { data, loading, error, setFetchInfo } = useFetch(URLS.ALL_USERS);
	const [action, setAction] = useState(null);
	const [id, setId] = useState('');
	const [userSelected, setUserSelected] = useState();

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Something went wrong!</h1>;
	return (
		<>
			<StyledCardsContainer>
				<CardsHeader>
					<Title>Users List</Title>
					<AddItem onClick={() => setAction('create')}>
						<Text>Create New User</Text>
						<AddIcon {...ICONS.add} />
					</AddItem>
				</CardsHeader>
				{data.users.map(user => (
					<UserCard
						key={user.userId}
						user={user}
						setId={setId}
						setUserSelected={setUserSelected}
						setAction={setAction}
					/>
				))}
			</StyledCardsContainer>
			{action === 'trash' && (
				<DeleteWindow
					setAction={setAction}
					id={id}
					setFetchInfo={setFetchInfo}
				></DeleteWindow>
			)}
			{action === 'edit' && (
				<FormEditUser
					user={userSelected}
					setFetchInfo={setFetchInfo}
					setAction={setAction}
				/>
			)}
			{action === 'create' && (
				<FormCreateUser setFetchInfo={setFetchInfo} setAction={setAction} />
			)}
		</>
	);
};

export default UsersListContainer;
