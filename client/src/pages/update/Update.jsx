import FormEditUser from '../../components/form-edit-user/FormEditUser';
import { useLocation } from 'react-router-dom';
const Update = () => {
	const { state, setUsers } = useLocation();
	console.log(state);
	return <FormEditUser user={state} setUsers={setUsers}></FormEditUser>;
};

export default Update;
