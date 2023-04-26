import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/apiRequests';
import UserCard from '../user-card/UserCard';
import { StyledCardsContainer } from './styles';
import { useEffect, useState } from 'react';

const UsersListContainer = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<>
			<StyledCardsContainer>
				{users.length > 0 ? (
					users.map(user => (
						<UserCard key={user.userId} user={user} setUsers={setUsers} />
					))
				) : (
					<h1>Loading...</h1>
				)}
			</StyledCardsContainer>
		</>
	);
};

const getAllUsers = async setUsers => {
	const request = await fetch(URLS.ALL_USERS);
	const data = await request.json();
	setUsers(data);
};

export default UsersListContainer;
