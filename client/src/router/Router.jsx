import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Details from '../pages/details/Details';
import Update from '../pages/update/Update';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/details' element={<Details />} />
				<Route path='/update' element={<Update />} />
			</Route>
		</Routes>
	);
};

export default Router;
