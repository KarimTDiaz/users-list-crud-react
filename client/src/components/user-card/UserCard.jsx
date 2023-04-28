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

const UserCard = ({
	user,
	setUsers,
	setId,
	setUserSelected,
	action,
	setAction
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
						setAction({ ...action, trash: !action.trash });

						setId(user.userId);
					}}
				/>
				<UserCardEdit
					{...ICONS.edit}
					onClick={() => {
						setAction({ ...action, edit: !action.edit });
						setUserSelected(user);
					}}
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
