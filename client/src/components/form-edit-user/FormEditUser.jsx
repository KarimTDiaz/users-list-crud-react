import { useState } from 'react';
import { picture } from '../../utils/picture';
import { URLS } from '../../constants/apiRequests';
import { ICONS } from '../../constants/icons';
import {
	EditCameraIcon,
	EditPhotoContainer,
	FormContainer,
	FormEdit,
	FormEditPhoto,
	FormField
} from './styles';
import CardsHeader from '../cards-header/CardsHeader';
import Text from '../text/Text';
import Modal from '../modal/Modal';

const FormEditUser = ({ user, setUsers, action, setAction }) => {
	const [userInfo, setUserInfo] = useState(user);
	return (
		<Modal>
			<FormContainer>
				<CardsHeader>
					<Text>Update User</Text>
				</CardsHeader>
				<EditPhotoContainer>
					<FormEditPhoto
						onClick={() =>
							handleInfo(
								userInfo,
								setUserInfo,
								'profileImage',
								picture(userInfo.genre)
							)
						}
					>
						Change Photo
						<EditCameraIcon {...ICONS.camera} />
					</FormEditPhoto>
					<img src={userInfo.profileImage} alt='' />
				</EditPhotoContainer>
				<FormEdit
					onSubmit={ev => {
						ev.preventDefault();
						updateUser(user.userId, userInfo, setUsers);
						setAction({ ...action, edit: !action.edit });
					}}
				>
					<div>
						<legend>Gender</legend>
						<label htmlFor='men'>Male</label>
						<input
							type='radio'
							id='men'
							name='genre'
							value={userInfo.genre}
							defaultChecked={userInfo.genre === 'men'}
							onChange={e => {
								handleInfo(userInfo, setUserInfo, 'genre', e.target.id);
							}}
						/>
						<label htmlFor='women'>Female</label>
						<input
							type='radio'
							id='women'
							name='genre'
							value={userInfo.genre}
							defaultChecked={userInfo.genre === 'women'}
							onChange={e =>
								handleInfo(userInfo, setUserInfo, 'genre', e.target.id)
							}
						/>
					</div>
					<div>
						<legend>User Plan</legend>
						<label htmlFor='standard'>Standard</label>
						<input
							type='radio'
							id='standard'
							name='active'
							value={userInfo.active}
							defaultChecked={!userInfo.active}
							onChange={e => {
								handleInfo(userInfo, setUserInfo, 'active', e.target.id);
							}}
						/>
						<label htmlFor='premium'>Premium</label>
						<input
							type='radio'
							id='premium'
							name='active'
							value={userInfo.active}
							defaultChecked={userInfo.active}
							onChange={e =>
								handleInfo(userInfo, setUserInfo, 'active', e.target.id)
							}
						/>
					</div>
					<FormField>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							value={userInfo.name}
							onChange={e =>
								handleInfo(userInfo, setUserInfo, 'name', e.target.value)
							}
						/>
					</FormField>
					<FormField>
						<label htmlFor='user-name'>UserName</label>
						<input
							type='text'
							id='user-name'
							value={userInfo.username}
							onChange={e =>
								handleInfo(userInfo, setUserInfo, 'username', e.target.value)
							}
						/>
					</FormField>
					<FormField>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							id='email'
							value={userInfo.email}
							onChange={e =>
								handleInfo(userInfo, setUserInfo, 'email', e.target.value)
							}
						/>
					</FormField>
					<FormField>
						<label htmlFor='age'>Age</label>
						<input
							type='text'
							id='age'
							value={userInfo.age}
							onChange={e =>
								handleInfo(userInfo, setUserInfo, 'age', e.target.value)
							}
						/>
					</FormField>
					<input type='submit' value='Update User' />
				</FormEdit>
			</FormContainer>
		</Modal>
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
