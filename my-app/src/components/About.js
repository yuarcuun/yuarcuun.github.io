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


class About extends Component {
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
				<div className='pageheader'>About</div>
				<div className='pagetext'>

				<div>

				<span>Quyana tailuci! Ukut website-aput calissuucetgun computer science-aakun caliaqellruaput. Wangkuk Egalaaq Alaskuk-llu anglillruukuk Kusquqviim nuniini. Una caliaput piurtesciigacartuq amlleret yuut ikayuqsaitellrukatkut. Quyavikaput elitnauristeput, Yugtun igatulit, ilaput-llu tamalkuita.</span>

                <Popup
                  trigger={<Icon style={{color:'#497182',width:'22px',paddingLeft:'5px'}} link name='comment alternate outline'>{'\n'}</Icon>}
                  on='click'
                  content={<div style={{fontSize:'16px'}}>{'Thank you all for coming! Our websites were built using computer science tools. The two of us, Egalaaq and Alaskuk, were raised in the Kuskokwim region. Our work would not exist without the help of many people. We are thankful to our teachers, Yugtun language authors, and our families.'}</div>}
                  position='bottom left'
                />
				</div>



				<div style={{paddingTop:'10px'}}>
				We are proud to be a team of Yup'ik developers. Current contributors are Christopher Egalaaq Liu, from Mamterilleq (Bethel, Alaska), Lonny Alaskuk Strunk from Kuinerraq (Quinhagak, Alaska), and Laura Domine from Paris.
				</div>
				<div style={{paddingTop:'10px'}}>

				Please contact us at yuarcuun [at] gmail [dot] com for questions about our projects or to discuss any new collaborations.
				</div>
				<div style={{paddingTop:'10px'}}>

				Quyana cakneq!
				</div>

				<div style={{display:'flex',justifyContent:'center',paddingTop:'20px'}}>
					<div style={{margin:20}}>
						<div style={{textAlign:'center',maxWidth:'200px'}}>
							<Image style={{borderRadius:'20px',width:'100%',height:'auto'}} src="/egal.jpg"/>
							<div style={{marginTop:10}}>Egalaaq</div>
						</div>
					</div>
					<div style={{margin:20}}>
						<div style={{textAlign:'center',maxWidth:'200px'}}>
							<Image style={{borderRadius:'20px',width:'100%',height:'auto'}} src="/lonny.jpeg"/>          
							<div style={{marginTop:10}}>Alaskuk</div>
						</div>
					</div>
				</div>

				</div>
			</div>
		);
	}
}
export default About;