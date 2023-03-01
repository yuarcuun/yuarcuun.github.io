// import _ from 'lodash'
import React, { Component } from 'react';
import { Container, Header, Button, Icon, Divider, Image, Grid, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {YouTubeLinks} from './info/YouTubeLinks.js';
// import {summaries} from './info/summaries.js';
// import {categories} from './info/categories.js';
// import { FeaturedVideos } from './Helpers.js';


// const categories = _.times(6, (i) => (
//   <Grid.Column key={i}>
//   	<div>
// 	    <Image src='/images/categories1.jpg' />
// 	    <h3 className='yugtun'>Ellavut</h3>
// 	    Weather, Climate
// 	  </div>
//   </Grid.Column>
// ))

// const keywords = _.times(6, (i) => (
//   <Grid.Column key={i}>
//   	<Button basic color='blue' size='mini'>Yugtun<br /><em>inYup'ik</em></Button>
//   </Grid.Column>
// ))


class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// show: false,
			// showAllElders: false,
			// categoriesDisplayed: ['1','2','3','4','5','6'],
			// featuredVideos:['cpb-aacip-127-009w0z0q.h264','cpb-aacip-127-00ns1t6z.h264','cpb-aacip-127-010p2r15.h264','cpb-aacip-127-65v6x4wh.h264'],
			// eldersList: [],
		}
	}

	// componentDidMount() {
	// 	let eldersList = []
	// 	Object.keys(categories).map((k) => {
	// 		if (k.includes('23.')) {
	// 			eldersList.push(k)
	// 		}
	// 	})
	// 	this.setState({eldersList:eldersList})
	// }

	// summariesRetrieval = (x, index) => {
	// 			return (<span> 
	// 						<span style={{fontFamily:"'Roboto',Arial, Helvetica",fontSize:'14px'}}>{summaries[x].summary[index][1]}</span>
	// 	          <Popup
	// 	            trigger={<Icon style={{color:'#d4d4d4',paddingLeft:'3px'}} link name='comment alternate outline'>{'\n'}</Icon>}
	// 	            on='click'
	// 	            content={<div style={{fontSize:'16px'}}>{summaries[x].summary[index][2]}</div>}
	// 	            position='bottom left'
	// 	          />
	// 	          </span>
	// 		)
	// }

	// featuredVideos = (x,xind) => {
	// 	var stringLengthCounter = 0
	// 	var upToIndex = 0
	// 	while (stringLengthCounter < 300 && upToIndex < summaries[x].summary.length) {
	// 		stringLengthCounter += summaries[x].summary[upToIndex][1].length
	// 		upToIndex += 1
	// 	}
	// 	return (
	//      (window.innerWidth < 480 ?
	// 			<Grid style={{marginTop:30,marginBottom:30}} container>
	// 				<Grid.Row key={xind}>
	// 		  		<Grid.Column style={{display:'flex',justifyContent:'center'}}>
	// 						<Link style={{maxWidth:'240px'}} to={{pathname: '/video/'+x, state: { currentVideoId: x}}}>
	// 							<Image style={{borderRadius:'10px'}} src={"https://img.youtube.com/vi/"+
	// 							YouTubeLinks[x].split(".be/")[1]
	// 							+"/hqdefault.jpg"} />
	// 						</Link>			    
	// 					</Grid.Column>
	// 		  	</Grid.Row>		
	// 		  	<Grid.Row>
	// 			    <Grid.Column>
	// 				    	<Link style={{display:'flex',justifyContent:'center',color:'black'}} to={{pathname: '/video/'+x, state: { currentVideoId: x}}}>
	// 		  					<div style={{fontSize:'16px',fontWeight:'600',paddingBottom:10}}>{summaries[x].title}</div>
	// 		  				</Link>
	// 		  				{Array.from({length: upToIndex}, (_, i) => i ).map((y) => this.summariesRetrieval(x,y) )}
	// 		  				{'. . .'}    
	// 					</Grid.Column>
	// 		  	</Grid.Row>
	// 		  	<Grid.Row style={{display:'flex',justifyContent:'center'}}>
	// 		  	<div style={{maxWidth:700,textAlign:'center',lineHeight:'34px'}}>
	// 			  {summaries[x].tags.map((y)=>(
	//           y in categories ?
	//           <Link to={{pathname: '/category/'+categories[y].name.split(' -- ')[0].replaceAll("'","").replaceAll(/, | & | /g,"-")}}>
	//             <Button basic compact>
	//             {categories[y].name.replaceAll('--','—')}
	//             {/*{categories[y].name.split(' -- ')[0]}*/}
	//             </Button>
	//           </Link>
	//           :
	//           null
	//         ))}
 //          <Popup
 //            trigger={<Icon style={{color:'#d4d4d4',paddingLeft:'3px'}} link name='comment alternate outline'>{'\n'}</Icon>}
 //            on='click'
 //            content={<div style={{fontSize:'16px'}}>{''}</div>}
 //            position='bottom left'
 //          />
	// 		  	</div>
	// 		  	</Grid.Row>
	// 		  </Grid>
	// 		  :
	// 			<Grid style={{marginTop:30,marginBottom:30}} container>
	// 				<Grid.Row columns={2} key={xind}>
	// 		  		<Grid.Column style={{display:'flex',justifyContent:'flex-end'}} width={6}>
	// 						<Link style={{maxWidth:'240px'}} to={{pathname: '/video/'+x, state: { currentVideoId: x}}}>
	// 							<Image style={{borderRadius:'10px'}} src={"https://img.youtube.com/vi/"+
	// 							YouTubeLinks[x].split(".be/")[1]
	// 							+"/hqdefault.jpg"} />
	// 						</Link>			    
	// 					</Grid.Column>
	// 			    <Grid.Column width={10}>
	// 				    <div style={{maxWidth:450}}>
	// 				    	<Link style={{color:'black'}} to={{pathname: '/video/'+x, state: { currentVideoId: x}}}>
	// 		  					<div style={{fontSize:'16px',fontWeight:'600',paddingBottom:10}}>{summaries[x].title}</div>
	// 		  				</Link>
	// 		  				{Array.from({length: upToIndex}, (_, i) => i ).map((y) => this.summariesRetrieval(x,y) )}
	// 		  				{'. . .'}    
	// 						</div>
	// 					</Grid.Column>
	// 		  	</Grid.Row>		
	// 		  	<Grid.Row style={{display:'flex',justifyContent:'center'}}>
	// 		  	<div style={{maxWidth:700,textAlign:'center',lineHeight:'34px'}}>
	// 			  {summaries[x].tags.map((y)=>(
	//           y in categories ?
	//           <Link to={{pathname: '/category/'+categories[y].name.split(' -- ')[0].replaceAll("'","").replaceAll(/, | & | /g,"-")}}>
	//             <Button basic compact>
	//             {/*{categories[y].name.replaceAll('--','—')}*/}
	//             {categories[y].name.split(' -- ')[0]}
	//             </Button>
	//           </Link>
	//           :
	//           null
	//         ))}
 //          <Popup
 //            trigger={<Icon size='large' style={{color:'#d4d4d4',paddingLeft:'3px'}} link name='comment alternate outline'>{'\n'}</Icon>}
 //            on='click'
 //            content={summaries[x].tags.map((y)=><div style={{fontSize:'16px'}}>{y}</div>)}
 //            position='bottom left'
 //          />
	// 		  	</div>
	// 		  	</Grid.Row>
	// 		  </Grid>
	// 		)
	// 	)
	// }

	// featuredVideos1 = (featuredVideos) => {
	// 	return (
	// 	featuredVideos.map((x,xind) => <Grid container>
	// 			<Grid.Row  columns={2} key={xind}>
	// 	  		<Grid.Column width={6}>
	// 		    	<Image style={{width:'250px',borderRadius:'15px'}} src='/images/popularVideo1.png' />
	// 		    </Grid.Column>
	// 		    <Grid.Column width={10}>
	// 			    <div>
	// 	  				<h4>{summaries[x].title}</h4>
	// 				    <span style={{fontFamily:"'Roboto',Arial, Helvetica"}}>{summaries[x].yugtun['summary']}</span>
	// 	          <Popup
	// 	            trigger={<Icon style={{color:'#d4d4d4'}} link name='comment alternate outline'>{'\n'}</Icon>}
	// 	            on='click'
	// 	            content={<div style={{fontSize:'16px'}}>{summaries[x].english.summary[0]}</div>}
	// 	            position='bottom left'
	// 	          />					    
	// 					</div>
	// 				</Grid.Column>
	// 	  	</Grid.Row>		
	// 	  </Grid>
	// 		)
	// 	)
	// }

	render() {
		// console.log(this.state)

		return (
			<div>
				<div className='pageheader'>Featured Projects</div>

				<div className='pagetext'>

				<div>
					<div className='projectDate'>
					RELEASED JUNE 2022
					</div>
					<div className='projectTitle'>
					Iñupiaq Online
					</div>
					<div className='projectPicture'>
						<a href="https://www.inupiaqonline.com" target="_blank"><Image style={{borderRadius:'20px'}} src="/inupiaqonlinelogo.png"/></a>  
					</div>
					<div className='projectDescription'>
						<div style={{paddingBottom:'10px'}}>This is an online version of the North Slope Iñupiaq dictionary compiled by Edna MacLean. It contains an audio library and a word builder function to form Iñupiaq words.</div>
						<div>View the website <a href="https://www.inupiaqonline.com" target="_blank" >here</a>.</div>

					</div>
				</div>

				<div>
					<div className='projectDate'>
					RELEASED FEBRUARY 2023
					</div>
					<div className='projectTitle'>
					Ciuliamta Paiciutait
					</div>
					<div style={{marginTop:'25px',marginBottom:'10px'}} className='projectPicture'>
						<a href="https://archive.kyuk.org" target="_blank"><Image style={{borderRadius:'20px'}} src="/kyukwowsmall.png"/></a>   
					</div>
					<div className='projectDescription'>
					An online archive of 100 Yup'ik elder interview with access to interactive sentence and word-level translations. In partnership with KYUK. 
					</div>
				</div>


				<div>
					<div className='projectDate'>
					UPDATED MARCH 2023
					</div>
					<div className='projectTitle'>
					Yugtun.com
					</div>
					<div style={{marginTop:'25px',marginBottom:'10px'}} className='projectPicture'>
						<a href="https://www.yugtun.com" target="_blank"><Image style={{borderRadius:'20px'}} src="/yugtun.png"/></a>   
					</div>
					<div className='projectDescription'>
					<div style={{paddingBottom:'10px'}}> This is an online searchable dictionary of Yugtun. It contains a sentence builder function that can be used to form different Yugtun sentences. It also incorporates a morphological parser built by Lonny Alaskuk Strunk that deconstructs and explains the individual parts of a Yugtun word. </div>
					<div>View the website <a href="https://www.yugtun.com" target="_blank" >here</a>.</div>
					<div>View the sentence builder <a href="https://www.yugtun.com/sentencebuilder/1" target="_blank" >here</a>.</div>

					</div>
				</div>


				<div>
					<div className='projectDate'>
					RELEASED FEBRUARY 2020
					</div>
					<div className='projectTitle'>
					Naaqerkat App
					</div>
					<div className='projectPicture'>
						<a href="https://www.youtube.com/watch?v=zS12MG2U4QQ" target="_blank"><Image style={{borderRadius:'20px'}} src="/naaqerkat.png"/></a>      
					</div>
					<div className='projectDescription'>
					<div style={{paddingBottom:'10px'}}>This app was created with the help of Yugtun speakers and teachers in the Lower Kuskokwim School District (LKSD). It contains a library of 36 Yugtun books that are narrated, translated, and color-coded!</div>
					<div>View the tutorial <a href="https://www.youtube.com/watch?v=zS12MG2U4QQ" target="_blank" >here</a>.</div>
					<div>Download the iOS version <a href="https://apps.apple.com/us/app/naaqerkat/id1522318403" target="_blank" >here</a>.</div>
					<div>Download the Android version <a href="https://play.google.com/store/apps/details?id=com.yugtunbooks" target="_blank" >here</a>.</div>

					</div>

				</div>

				</div>
			</div>
		);
	}
}
export default Projects;