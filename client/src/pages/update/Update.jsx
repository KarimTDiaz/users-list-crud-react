import FormEditUser from '../../components/form-edit-user/FormEditUser';
import { useLocation } from 'react-router-dom';
const Update = () => {
	const { state } = useLocation();
	return <FormEditUser user={state}></FormEditUser>;
};

export default Update;
