import { useNavigate } from 'react-router-dom';
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

const UserCard = ({ user, setId, setUserSelected, setAction }) => {
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
						setAction('trash');
						setId(user.userId);
					}}
				/>
				<UserCardEdit
					{...ICONS.edit}
					onClick={() => {
						setAction('edit');
						setUserSelected(user);
					}}
				/>
			</UserCardItemsRight>
		</StyledUserCard>
	);
};

export default UserCard;
