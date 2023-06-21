import { useNavigate } from 'react-router-dom';
import { StyledBackButton } from './styles';
const Backbutton = () => {
	const navigate = useNavigate();
	return (
		<StyledBackButton onClick={() => navigate('/')}>Come Back</StyledBackButton>
	);
};

export default Backbutton;
