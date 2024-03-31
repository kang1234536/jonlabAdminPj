import React, {useEffect, useContext} from "react";

import {
	BrowserRouter as BRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import {GState} from './GState';

import Main from 'page/Main';
import Login from 'layout/Login';
import Layout from 'layout/Layout';

import FormItem from 'guide/FormItem';
import TableItem from 'guide/TableItem';
import TabItem from 'guide/TabItem';
import RegTemplate from 'guide/register_box_template';
import PjtBoard from 'page/pjtBoard';
import PjtBoardDetail from 'page/pjtBoard/detail';
import PopupSample01 from 'guide/popup/popupSample01';

const RouterSet = () => {
	const {loginYn} = useContext(GState);

	useEffect(()=>{
		console.log('useEffect ========= RouterSet');
	}, [loginYn]);

	return (
		<BRouter>

			<Layout loginYn={loginYn}>
				<Routes>
					<Route path="/" element={!loginYn ? <Navigate to="/login" replace /> : <Main />} />
					<Route path="/register_template" element={!loginYn ? <Navigate to="/login" replace /> : <RegTemplate />} />
					<Route path="/form_item" element={!loginYn ? <Navigate to="/login" replace /> :<FormItem />} />
					<Route path="/table_item" element={!loginYn ? <Navigate to="/login" replace /> :<TableItem />} />
					<Route path="/tab_item" element={!loginYn ? <Navigate to="/login" replace /> :<TabItem />} />
					<Route path="/pjtBoard" element={!loginYn ? <Navigate to="/login" replace /> :<PjtBoard />} />
					<Route path="/pjtBoard/detail" element={!loginYn ? <Navigate to="/login" replace /> :<PjtBoardDetail />} />
					<Route path="/PopupSample01" element={!loginYn ? <Navigate to="/login" replace /> :<PopupSample01 />} />
					<Route path="/login" element={!loginYn ? <Login /> : <Navigate to="/" replace />} />
					<Route path="*" element={<Navigate to="/" replace />}  />
				</Routes>
			</Layout>

		</BRouter>
	);
}

export default RouterSet;