import { useState } from 'react';
import { URLS } from '../../constants/apiRequests';
import { useNavigate } from 'react-router-dom';

const FormEditUser = ({ user, setUsers }) => {
	console.log(user);
	const [userInfo, setUserInfo] = useState({
		name: user.name,
		userName: user.username,
		email: user.email,
		age: user.age,
		gender: user.gender
	});
	return (
		<form>
			<div>
				<legend>Gender</legend>
				<label htmlFor='Male'>Male</label>
				<input
					type='radio'
					id='male'
					name='gender'
					/* checked={userInfo.gender === 'Male' ? true : false} */
					onChange={e => {
						handleInfo(userInfo, setUserInfo, 'gender', e.target.id);
					}}
				/>
				<label htmlFor='Male'>Female</label>
				<input
					type='radio'
					id='female'
					name='gender'
					/* checked={userInfo.gender === 'Female' ? true : false} */
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
					value={userInfo.userName}
					onChange={e =>
						handleInfo(userInfo, setUserInfo, 'userName', e.target.value)
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
			<input
				type='submit'
				value='Update User'
				onSubmit={ev => {
					ev.preventDefault();
					/* handleSubmit(ev, user.userId, userInfo, setUsers); */
					updateUser(user.userId, userInfo, setUsers);
				}}
			/>
		</form>
	);
};
const handleInfo = (userInfo, setUserInfo, key, value) => {
	setUserInfo({ ...userInfo, [key]: value });
	console.log(...userInfo);
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
	const data = request.json();
	setUsers(data);
};

/* const handleSubmit = (ev, userId, userInfo, setUsers) => {
	ev.preventDefault();
	updateUser(userId, userInfo, setUsers);
}; */
export default FormEditUser;
