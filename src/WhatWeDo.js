import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './WhatWeDo.css';

class WhatWeDo extends Component {
	render() {
		return (
			<Paper id="what" className="WhatWeDoDiv">
				<div className="WhatWeDoItem">
					<Avatar className="WhatWeDoAvatar" style={{color: '#5283EC', backgroundColor: 'white'}}>a</Avatar>
					<div className="WhatWeDoBigText" style={{color: '#5283EC'}}>automate</div>
					<div className="WhatWeDoSmallText">we automate garage operation and parking process to make parking easier for users and more profitable for garages</div>
				</div>
				<div className="WhatWeDoItem">
					<Avatar className="WhatWeDoAvatar" style={{color: '#D8503F', backgroundColor: 'white'}}>b</Avatar>
					<div className="WhatWeDoBigText" style={{color: '#D8503F'}}>build</div>
					<div className="WhatWeDoSmallText">we build a comprehensive parking network by aggregating real time parking data</div>
				</div>
				<div className="WhatWeDoItem">
					<Avatar className="WhatWeDoAvatar" style={{color: '#F0BE41', backgroundColor: 'white'}}>c</Avatar>
					<div className="WhatWeDoBigText" style={{color: '#F0BE41'}}>connect</div>
					<div className="WhatWeDoSmallText">we connect garages, drivers, and vehicles for seamless parking for all</div>
				</div>
			</Paper>
		);
	}
}

export default WhatWeDo;