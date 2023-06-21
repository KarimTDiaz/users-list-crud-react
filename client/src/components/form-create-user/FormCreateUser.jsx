import { useState } from 'react';
import { URLS } from '../../constants/apiRequests';
import { ICONS } from '../../constants/icons';
import { picture } from '../../utils/picture';
import CardsHeader from '../cards-header/CardsHeader';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import {
	EditCameraIconCreate,
	EditPhotoContainerCreate,
	FormContainerCreate,
	FormCreate,
	FormEditPhotoCreate,
	FormFieldCreate
} from './styles';

const FormCreateUser = ({ setAction, setFetchInfo }) => {
	const [userCreate, setUserCreate] = useState({
		profileImage: picture('men'),
		name: '',
		username: '',
		email: '',
		age: '',
		genre: 'men',
		active: false
	});

	return (
		<Modal>
			<FormContainerCreate>
				<CardsHeader>
					<Text>Create New User</Text>
				</CardsHeader>
				<EditPhotoContainerCreate>
					<FormEditPhotoCreate
						onClick={() =>
							handleCreate(
								userCreate,
								setUserCreate,
								'profileImage',
								picture(userCreate.genre)
							)
						}
					>
						Change Photo
						<EditCameraIconCreate {...ICONS.camera} />
					</FormEditPhotoCreate>
					<img src={userCreate.profileImage} alt='Foto de Perfil' />
				</EditPhotoContainerCreate>
				<FormCreate
					onSubmit={ev => {
						ev.preventDefault();
						setFetchInfo({
							url: URLS.ALL_USERS,
							options: {
								method: 'POST',
								body: JSON.stringify({ ...userCreate }),
								headers: {
									Accept: '*/*',
									'Content-Type': 'application/json'
								}
							}
						});
						setAction(null);
					}}
				>
					<div>
						<legend>Gender</legend>
						<label htmlFor='men'>Male</label>
						<input
							type='radio'
							id='men'
							name='genre'
							value={userCreate.genre}
							defaultChecked
							onChange={e => {
								handleCreate(userCreate, setUserCreate, 'genre', e.target.id);
							}}
						/>
						<label htmlFor='women'>Female</label>
						<input
							type='radio'
							id='women'
							name='genre'
							value={userCreate.genre}
							onChange={e =>
								handleCreate(userCreate, setUserCreate, 'genre', e.target.id)
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
							value={userCreate.active}
							defaultChecked
							onChange={e => {
								handleCreate(userCreate, setUserCreate, 'active', false);
							}}
						/>
						<label htmlFor='premium'>Premium</label>
						<input
							type='radio'
							id='premium'
							name='active'
							value={userCreate.active}
							onChange={e =>
								handleCreate(userCreate, setUserCreate, 'active', true)
							}
						/>
					</div>
					<FormFieldCreate>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							onChange={e =>
								handleCreate(userCreate, setUserCreate, 'name', e.target.value)
							}
						/>
					</FormFieldCreate>
					<FormFieldCreate>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							onChange={e =>
								handleCreate(
									userCreate,
									setUserCreate,
									'username',
									e.target.value
								)
							}
						/>
					</FormFieldCreate>
					<FormFieldCreate>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							id='email'
							onChange={e =>
								handleCreate(userCreate, setUserCreate, 'email', e.target.value)
							}
						/>
					</FormFieldCreate>
					<FormFieldCreate>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							id='title'
							onChange={e =>
								handleCreate(userCreate, setUserCreate, 'title', e.target.value)
							}
						/>
					</FormFieldCreate>
					<FormFieldCreate>
						<label htmlFor='age'>Age</label>
						<input
							type='text'
							id='age'
							onChange={e =>
								handleCreate(userCreate, setUserCreate, 'age', e.target.value)
							}
						/>
					</FormFieldCreate>
					<input type='submit' value='Create User' />
				</FormCreate>
			</FormContainerCreate>
		</Modal>
	);
};
const handleCreate = (userCreate, setUserCreate, key, value) => {
	setUserCreate({ ...userCreate, [key]: value });
};

export default FormCreateUser;
