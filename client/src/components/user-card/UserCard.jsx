import { ICONS } from '../../constants/icons';
import {
	StyledUserCard,
	UserCardButton,
	UserCardDelete,
	UserCardImage
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/apiRequests';
import { useState } from 'react';

const UserCard = ({ user, setUsers }) => {
	const navigate = useNavigate();
	console.log(user);
	return (
		<StyledUserCard>
			<UserCardImage src={user.profileImage} alt='Imagen de Perfil' />
			<p>{user.username}</p>
			<p>{user.active ? 'Unfollow' : 'Follow'}</p>
			<UserCardButton onClick={() => navigate('/details', { state: user })}>
				SEE DETAILS
			</UserCardButton>
			<UserCardDelete
				{...ICONS.trash}
				onClick={() => deleteUserFetch(setUsers, user.userId)}
			/>
		</StyledUserCard>
	);
};
const deleteUserFetch = async (setUsers, id) => {
	const request = await fetch(URLS.ALL_USERS + '/' + id, {
		method: 'DELETE'
	});
	const data = await request.json();
	setUsers(data);
};
export default UserCard;
