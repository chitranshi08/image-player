import React from 'react';
import './Image.css'
 export class Image extends React.Component{
	constructor(){
	super();
	this.state = {
		image:""
	}
	}
	imageClick = (img) => {

		this.setState({
			
				image: img
			
			
		})
	}

render(){
	const imageList = ["Chrysanthemum.jpg","Desert.jpg","Hydrangeas.jpg","Jellyfish.jpg","Tulips.jpg"]
	const showimage = imageList.map((image) =>{
		return <img onClick={() =>this.imageClick(image)} src={"/images/"+image}/>
	})
console.log(showimage)
return(
	<div className="container">
		<div className="leftImageContainer">
			{showimage}
		</div>
		<div>
			<img className="rightContainerImage" src={"/images/"+this.state.image}/>
		</div>
	</div>
	)

}

}











export default Image