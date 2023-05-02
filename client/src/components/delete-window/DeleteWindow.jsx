import {
	DeleteMessageContainer,
	DeleteMessage,
	DeleteOption,
	DeleteOptionsContainer
} from './styles';
import { URLS } from '../../constants/apiRequests';
import Modal from '../modal/Modal';
import CardsHeader from '../cards-header/CardsHeader';
import Text from '../text/Text';

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
									}
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
