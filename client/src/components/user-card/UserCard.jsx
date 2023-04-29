import { ICONS } from '../../constants/icons';
import {
	StyledUserCard,
	UserCardButton,
	UserCardDelete,
	UserCardEdit,
	UserCardImage,
	UserCardItemsLeft,
	UserCardItemsRight,
	UserCardPlan
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
				<UserCardPlan plan={user.active}>
					{user.active ? 'Premium' : 'Standard'}
				</UserCardPlan>
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

export default UserCard;
