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
					Gender: <DetailsValue>{user.gender}</DetailsValue>
				</DetailsKey>
				<DetailsActive>
					{user.active ? 'Following' : 'Not Following'}
				</DetailsActive>
			</StyledDetails>
		</>
	);
};

export default UserDetailsContainer;
