import React from "react";
import Main from 'page/Main';
import FormItem from 'guide/FormItem';
import TableItem from 'guide/TableItem';
import TabItem from 'guide/TabItem';
import RegTemplate from 'guide/register_box_template';
import ProductReg from 'page/prdReg/ProductReg';
import {
	BrowserRouter as BRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';


const RouterSet = () => {
	return (
		<BRouter>
			<Header />
			<Gnb />
			<div id="container">

			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/contect" element={<Contect />} /> */}
				<Route path="*" element={<Navigate to="/" replace />}  />
			</Routes>


				{/* <Switch>
					<Route path="/" exact component={Main} />
					<Route path="/register_template" component={RegTemplate} />
					<Route path="/form_item" component={FormItem} />
					<Route path="/table_item" component={TableItem} />
					<Route path="/tab_item" component={TabItem} />
					<Route path="/regPrd" component={ProductReg} />
					<Redirect from="*" to="/" />
				</Switch> */}
			</div>
			<Footer />
		</BRouter>
	);
}

export default RouterSet;