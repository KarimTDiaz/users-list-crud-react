import {
	StyledDetails,
	StyledImage,
	DetailsName,
	DetailsKey,
	DetailsValue,
	DetailsActive
} from './styles';

const UserDetailsContainer = ({ user }) => {
	return (
		<>
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
				<DetailsActive>
					{user.active ? 'Premium User' : 'Standard User'}
				</DetailsActive>
			</StyledDetails>
		</>
	);
};

export default UserDetailsContainer;
