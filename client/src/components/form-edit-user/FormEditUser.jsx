import { useState } from 'react';

const FormEditUser = ({ user }) => {
	const [userInfo, setUserInfo] = useState({
		name: user.name,
		userName: user.username,
		email: user.email,
		age: user.age
	});

	return (
		<form>
			<div></div>
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
			<input type='submit' value='Update User' />
		</form>
	);
};

const handleInfo = (userInfo, setUserInfo, key, value) => {
	setUserInfo({ ...userInfo, [key]: value });
};
export default FormEditUser;
