import React from 'react';
import PageTitle from 'comUI/page_title';
import RegFoldItemBox from 'comUI/regist_folding_box';

const TableItem = () => {
	
	
	return (
		<div className="contents">
			<PageTitle
				title={'TABLE GUIDE'}
			/>

			<RegFoldItemBox
				title={'className = tblWrap : default text-align left'}
			>
				<div className="tblWrap">
					<table>
						<caption>table sample</caption>
						<colgroup>
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : 'auto'}} />
						</colgroup>
						<thead>
							<tr>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>tdead01</td>
								<td>tdead02tdead02tdead02tdead02</td>
								<td>tdead03tdead03tdead03tdead03</td>
								<td>tdead04tdead04tdead04tdead04</td>
								<td>tdead05</td>
								<td>tdead01tdead01tdead01tdead01</td>
								<td>tdead02tdead02tdead02tdead02tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RegFoldItemBox>

			
			<RegFoldItemBox
				title={'table nodata'}
			>
				<div className="tblWrap">
					<table>
						<caption>table sample</caption>
						<colgroup>
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
						</colgroup>
						<thead>
							<tr>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colSpan="5">
									<div className="nodata">
										<span className="tit">내용이 없습니다.</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RegFoldItemBox>

		</div>
	);
}

export default TableItem;