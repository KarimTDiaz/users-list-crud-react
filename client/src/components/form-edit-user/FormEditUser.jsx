import { useState } from 'react';
import { URLS } from '../../constants/apiRequests';

const FormEditUser = ({ user, setUsers }) => {
	const [userInfo, setUserInfo] = useState({
		name: user.name,
		username: user.username,
		email: user.email,
		age: user.age,
		gender: user.gender
	});
	return (
		<form
			onSubmit={ev => {
				ev.preventDefault();
				updateUser(user.userId, userInfo, setUsers);
			}}
		>
			<div>
				<legend>Gender</legend>
				<label htmlFor='Male'>Male</label>
				<input
					type='radio'
					id='male'
					name='gender'
					value={userInfo.gender}
					defaultChecked={userInfo.gender === 'Male'}
					onChange={e => {
						handleInfo(userInfo, setUserInfo, 'gender', e.target.id);
					}}
				/>
				<label htmlFor='Male'>Female</label>
				<input
					type='radio'
					id='female'
					name='gender'
					value={userInfo.gender}
					defaultChecked={userInfo.gender === 'Female'}
					onChange={e =>
						handleInfo(userInfo, setUserInfo, 'gender', e.target.id)
					}
				/>
			</div>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					name='name'
					value={userInfo.name}
					onChange={e =>
						handleInfo(userInfo, setUserInfo, 'name', e.target.value)
					}
				/>
			</div>
			<div>
				<label htmlFor='user-name'>UserName</label>
				<input
					type='text'
					id='user-name'
					name='user-name'
					value={userInfo.username}
					onChange={e =>
						handleInfo(userInfo, setUserInfo, 'username', e.target.value)
					}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					id='email'
					name='email'
					value={userInfo.email}
					onChange={e =>
						handleInfo(userInfo, setUserInfo, 'email', e.target.value)
					}
				/>
			</div>
			<div>
				<label htmlFor='age'>Age</label>
				<input
					type='text'
					id='age'
					name='age'
					value={userInfo.age}
					onChange={e =>
						handleInfo(userInfo, setUserInfo, 'age', e.target.value)
					}
				/>
			</div>
			<input type='submit' value='Update User' />
		</form>
	);
};
const handleInfo = (userInfo, setUserInfo, key, value) => {
	setUserInfo({ ...userInfo, [key]: value });
};
const updateUser = async (userId, userInfo, setUsers) => {
	const request = await fetch(URLS.ALL_USERS + '/' + userId, {
		method: 'PATCH',
		body: JSON.stringify({ ...userInfo }),
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	});
	const data = await request.json();
	setUsers(data.users);
};

export default FormEditUser;
