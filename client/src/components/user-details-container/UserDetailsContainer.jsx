import { useNavigate } from 'react-router-dom';
import Backbutton from '../back-button/BackButton';
import CardsHeader from '../cards-header/CardsHeader';
import Text from '../text/Text';
import {
	DetailsActive,
	DetailsKey,
	DetailsName,
	DetailsValue,
	StyledDetails,
	StyledImage
} from './styles';

const UserDetailsContainer = ({ user }) => {
	const navigate = useNavigate();
	return (
		<>
			<CardsHeader>
				<Text>User Details</Text>
			</CardsHeader>
			<StyledDetails>
				<StyledImage src={user.profileImage} />
				<DetailsName>{user.name}</DetailsName>
				<DetailsKey>
					Username: <DetailsValue>{user.username}</DetailsValue>
				</DetailsKey>
				<DetailsKey>
					Age: <DetailsValue>{user.age}</DetailsValue>
				</DetailsKey>
				<DetailsKey>
					Email: <DetailsValue>{user.email}</DetailsValue>
				</DetailsKey>
				<DetailsKey>
					Gender: <DetailsValue>{user.genre}</DetailsValue>
				</DetailsKey>
				<DetailsActive active={user.active}>
					{user.active ? 'Premium User' : 'Standard User'}
				</DetailsActive>
				<Backbutton />
			</StyledDetails>
		</>
	);
};

export default UserDetailsContainer;
