import { URLS } from '../../constants/apiRequests';
import CardsHeader from '../cards-header/CardsHeader';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import {
	DeleteMessage,
	DeleteMessageContainer,
	DeleteOption,
	DeleteOptionsContainer
} from './styles';

const DeleteWindow = ({ setAction, id, setFetchInfo }) => {
	return (
		<Modal>
			<div>
				<CardsHeader>
					<Text>Delete User</Text>
				</CardsHeader>
				<DeleteMessageContainer>
					<DeleteMessage>
						You are going to delete a user. Are you sure ?
					</DeleteMessage>
					<DeleteOptionsContainer>
						<DeleteOption
							onClick={() => {
								setFetchInfo({
									url: URLS.ALL_USERS + '/' + id,
									options: {
										method: 'DELETE'
									},
									redirectTo: { url: '/' }
								});
								setAction('trash');
							}}
							pointer
						>
							YES
						</DeleteOption>
						<DeleteOption onClick={() => setAction(null)} pointer>
							NO
						</DeleteOption>
					</DeleteOptionsContainer>
				</DeleteMessageContainer>
			</div>
		</Modal>
	);
};

export default DeleteWindow;
