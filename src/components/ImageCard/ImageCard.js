import React from 'react';
import "./ImageCard.css";

const ImageCard = props => (

	<div 
		className="img-container"
		key={props.id}
		onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
			id={props.name}
			src={props.image}		
			alt={props.name}
		/>
	</div> 
);

export default ImageCard;