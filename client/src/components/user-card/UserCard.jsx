import { ICONS } from '../../constants/icons';
import {
	StyledUserCard,
	UserCardButton,
	UserCardDelete,
	UserCardEdit,
	UserCardImage,
	UserCardItemsLeft,
	UserCardItemsRight
} from './styles';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/apiRequests';
import { useState } from 'react';

const UserCard = ({
	user,
	setUsers,
	trash,
	setTrash,
	setId,
	edit,
	setEdit
}) => {
	const navigate = useNavigate();

	return (
		<StyledUserCard>
			<UserCardItemsLeft>
				<UserCardImage src={user.profileImage} alt='Imagen de Perfil' />
				<p>{user.username}</p>
			</UserCardItemsLeft>
			<UserCardItemsRight>
				<p
					onClick={() => {
						followUserFetch(setUsers, user.userId, user.active);
					}}
				>
					{user.active ? 'Unfollow' : 'Follow'}
				</p>
				<UserCardButton onClick={() => navigate('/details', { state: user })}>
					SEE DETAILS
				</UserCardButton>

				<UserCardDelete
					{...ICONS.trash}
					onClick={() => {
						setTrash(!trash);
						setId(user.userId);
					}}
				/>
				<UserCardEdit
					{...ICONS.edit}
					onClick={() =>
						navigate('/update', { state: user, setUsers: setUsers })
					}
				/>
			</UserCardItemsRight>
		</StyledUserCard>
	);
};

const followUserFetch = async (setUsers, id, active) => {
	const request = await fetch(URLS.ALL_USERS + '/' + id, {
		method: 'PATCH',
		body: JSON.stringify({ active: !active }),
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	});
	const data = await request.json();
	setUsers(data.users);
};
export default UserCard;
