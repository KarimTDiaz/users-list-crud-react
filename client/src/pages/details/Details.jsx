import { useLocation } from 'react-router-dom';
import UserDetailsContainer from '../../components/user-details-container/UserDetailsContainer';

const Details = () => {
	const { state } = useLocation();
	return <UserDetailsContainer user={state} />;
};

export default Details;
