
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

const BigLoad = (props) => {
	let showLoader = useSelector(state => state.bigLoader);
	console.log(showLoader)
	console.log("USAMA ALI KHAN")
	const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: '600'};

	return (
		<div>
		{(showLoader === true) ?
			<div style={styles}>
				<div style={{paddingTop:'300px'}}>
				<Loader type="Oval" color="#ff9900" height={80} width={80} />
				</div>
			</div>
		: <br /> }
		</div>
		
	);
};

BigLoad.defaultProps = {
	error:false
};

export default BigLoad;
