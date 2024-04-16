import LoadPortal from "./loadPortal";

const Loading = ()=>{
	return(
		<LoadPortal
			name = 'loadingWrap'
		>
			<div className="loadAni">
				<img src={"/resources/images/loading.svg"} alt="로딩중" />
			</div>
		</LoadPortal>
	);
}

export default Loading;