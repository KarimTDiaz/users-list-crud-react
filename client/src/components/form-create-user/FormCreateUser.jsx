import { useState } from 'react';
import { picture } from '../../utils/picture';
const FormCreateUser = () => {
	const [userInfo, setUserInfo] = useState({
		profileImage: '',
		name: '',
		username: '',
		email: '',
		age: '',
		gender: ''
	});

	return (
		<form onSubmit={ev => ev.preventDefault()}>
			<legend>Gender</legend>
			<label htmlFor='Male'>Male</label>
			<input
				type='radio'
				id='men'
				name='gender'
				value='male'
				onChange={e => {
					handleInfo(userInfo, setUserInfo, 'gender', e.target.id);
				}}
			/>
			<label htmlFor='Male'>Female</label>
			<input
				type='radio'
				id='women'
				name='gender'
				value='female'
				onChange={e => {
					handleInfo(userInfo, setUserInfo, 'gender', e.target.id);
				}}
			/>
			<button
				onClick={() =>
					setUserInfo({ ...userInfo, profileImage: picture(userInfo.gender) })
				}
			>
				Create Photo
			</button>
			<img src={userInfo.profileImage} alt='' />
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' name='name' />
			</div>
			<div>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' name='username' />
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' name='email' />
			</div>
			<div>
				<label htmlFor='title'>Title</label>
				<input type='text' id='title' name='title' />
			</div>
			<div>
				<label htmlFor='age'>Age</label>
				<input type='text' id='age' name='age' />
			</div>
		</form>
	);
};
const handleInfo = (userInfo, setUserInfo, key, value) => {
	setUserInfo({ ...userInfo, [key]: value });
};
export default FormCreateUser;
