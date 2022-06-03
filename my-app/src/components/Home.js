// import _ from 'lodash'
import React, { Component } from 'react';
import { Container, Header, Button, Icon, Divider, Image, Grid, Popup, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {YouTubeLinks} from './info/YouTubeLinks.js';
// import {summaries} from './info/summaries.js';
// import {categories} from './info/categories.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';


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


class Home extends Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			show: false,
			showAllElders: false,
			categoriesDisplayed: ['1','2','3','4','5','6'],
			featuredVideos:['cpb-aacip-127-009w0z0q.h264','cpb-aacip-127-00ns1t6z.h264','cpb-aacip-127-010p2r15.h264','cpb-aacip-127-65v6x4wh.h264'],
			eldersList: [],
			innerWidth: window.innerWidth,
		}

		this.updateDimensions = this.updateDimensions.bind(this);
	}

  updateDimensions() {
    this.setState({
      innerWidth: window.innerWidth
    });
  }
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}

	  componentWillUnmount() {
	    window.removeEventListener("resize", this.updateDimensions);
	  }
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
		console.log(this.state)
		console.log(this.props)

		return (
			<div>
			{this.state.innerWidth < 480 ?
				<div className='headerfont' style={{padding:10}}>
					<div style={{display:'flex',flexDirection:'row'}}>
						<div style={{paddingTop:'10px'}}>
							<Image style={{cursor:'pointer',width:'150px'}} src="/yuraq.png"/>          
						</div>
						<div>
						<div style={{paddingLeft:'15px',paddingTop:'20px',fontWeight:'600',fontSize:'22px'}}> Yuarcuun 
		                <Popup
		                  trigger={<Icon style={{color:'#497182',width:'22px',paddingLeft:'5px'}} link name='comment alternate outline'>{'\n'}</Icon>}
		                  on='click'
		                  content={

	                      <div>
	                      <div style={{fontSize:22}}>{'yuar·cuun'}</div>

	                            <div style={{paddingTop:15,paddingLeft:0,fontSize:'16px'}}>
	                                <div>
	                                <div style={{fontWeight:'bold',fontFamily:'Lato,Arial,Helvetica,sans-serif',paddingBottom:'5px'}}>
	                                <div>
	                                {'yuar'}
	                                </div>
	                                </div>                  
	                                {'to look for; to miss; to long for'}
	                                </div>
	                            </div>

	                            <div style={{paddingTop:15,paddingLeft:20,fontSize:'16px'}}>
	                                <div>
	                                <div style={{fontWeight:'bold',fontFamily:'Lato,Arial,Helvetica,sans-serif',paddingBottom:'5px'}}>
	                                <div>
	                                {'+cuute|+ssuute[V→N]'}
	                                </div>
	                                </div>                  
	                                {'device for V-ing'}
	                                </div>
	                            </div>
	                            <div style={{paddingTop:15,paddingLeft:40,fontSize:'16px'}}>
	                                <div>
	                                <div style={{fontFamily:'Lato,Arial,Helvetica,sans-serif',paddingBottom:'5px'}}>
	                                <div>
	                                {'the one'}
	                                </div>
	                                </div>                  
	                                {'absolutive noun ending'}
	                                </div>
	                            </div>	                           
	                      </div>

		                  }
		                  position='bottom left'
		                />
						</div>
						<div style={{paddingLeft:'15px',paddingTop:'7px',fontWeight:'600',fontSize:'22px'}}> Technologies </div>
						<div style={{paddingLeft:'15px',paddingTop:'20px',fontStyle:'italic',fontWeight:'300',fontSize:'16px',color:'#9b9b9b'}}> [tool to find what you're searching for] </div>
						</div>
					</div>

						<div style={{paddingTop:'50px'}} className='navigation'>
							<List link>
								<List.Item active={this.props.currentPage === undefined}>
									<Link style={{height:'28px',paddingBottom:'3px',borderBottom:(this.props.currentPage === undefined ? '2px black solid' : '')}} to={{pathname: '/'}}>
										About
									</Link>
								</List.Item>
								<List.Item active={this.props.currentPage === 'projects'}>
									<Link style={{height:'28px',paddingBottom:'3px',borderBottom:(this.props.currentPage === 'projects' ? '2px black solid' : '')}} to={{pathname: '/projects'}}>
										Projects
									</Link>
								</List.Item>
								<List.Item active={this.props.currentPage === 'contact'}>
									<Link style={{height:'28px',paddingBottom:'3px',borderBottom:(this.props.currentPage === 'contact' ? '2px black solid' : '')}} to={{pathname: '/contact'}}>
										Contact
									</Link>
								</List.Item>
							</List>
						</div>
						<div style={{paddingLeft:'20px',paddingTop:'20px', paddingBottom:'30px'}}>

            			<a href="https://github.com/cwtliu" target="_blank" ><Icon size='large' color='grey'  name='github' /></a>
            			<a href="mailto:yuarcuun@gmail.com" target="_blank" ><Icon size='large' color='grey'  name='mail outline' /></a>
            			<a href="https://www.linkedin.com/in/cwtliu/" target="_blank" ><Icon size='large' color='grey'  name='linkedin' /></a>

						</div>

					{this.props.currentPage === undefined ?
					<About />
					:
					null
					}

					{this.props.currentPage === 'projects' ?
					<Projects />
					:
					null
					}

					{this.props.currentPage === 'contact' ?
					<Contact />
					:
					null
					}
				</div>
				:
				<Grid style={{padding:20}} columns={2} divided>
					<Grid.Row>
					<Grid.Column className='headerfont' style={{paddingLeft:'10px'}} width={6}>
						<div style={{paddingTop:'20px'}}>
							<Image style={{cursor:'pointer',width:'150px'}} src="/yuraq.png"/>          
						</div>
						<div style={{paddingLeft:'15px',paddingTop:'20px',fontWeight:'600',fontSize:'22px'}}> Yuarcuun 
		                <Popup
		                  trigger={<Icon style={{color:'#497182',width:'22px',paddingLeft:'5px'}} link name='comment alternate outline'>{'\n'}</Icon>}
		                  on='click'
		                  content={

	                      <div>
	                      <div style={{fontSize:22}}>{'yuar·cuun'}</div>

	                            <div style={{paddingTop:15,paddingLeft:0,fontSize:'16px'}}>
	                                <div>
	                                <div style={{fontWeight:'bold',fontFamily:'Lato,Arial,Helvetica,sans-serif',paddingBottom:'5px'}}>
	                                <div>
	                                {'yuar'}
	                                </div>
	                                </div>                  
	                                {'to look for; to miss; to long for'}
	                                </div>
	                            </div>

	                            <div style={{paddingTop:15,paddingLeft:20,fontSize:'16px'}}>
	                                <div>
	                                <div style={{fontWeight:'bold',fontFamily:'Lato,Arial,Helvetica,sans-serif',paddingBottom:'5px'}}>
	                                <div>
	                                {'+cuute|+ssuute[V→N]'}
	                                </div>
	                                </div>                  
	                                {'device for V-ing'}
	                                </div>
	                            </div>
	                            <div style={{paddingTop:15,paddingLeft:40,fontSize:'16px'}}>
	                                <div>
	                                <div style={{fontFamily:'Lato,Arial,Helvetica,sans-serif',paddingBottom:'5px'}}>
	                                <div>
	                                {'the one'}
	                                </div>
	                                </div>                  
	                                {'absolutive noun ending'}
	                                </div>
	                            </div>	                           
	                      </div>

		                  }
		                  position='bottom left'
		                />
						</div>
						<div style={{paddingLeft:'15px',paddingTop:'7px',fontWeight:'600',fontSize:'22px'}}> Technologies </div>
						<div style={{paddingLeft:'15px',paddingTop:'20px',fontStyle:'italic',fontWeight:'300',fontSize:'16px',color:'#9b9b9b'}}> [tool to find what you're searching for] </div>
						<div className='navigation'>
							<List link>
								<List.Item active={this.props.currentPage === undefined}>
									<Link style={{height:'28px',paddingBottom:'1px',borderBottom:(this.props.currentPage === undefined ? '2px black solid' : '')}} to={{pathname: '/'}}>
										About
									</Link>
								</List.Item>
								<List.Item active={this.props.currentPage === 'projects'}>
									<Link style={{height:'28px',paddingBottom:'1px',borderBottom:(this.props.currentPage === 'projects' ? '2px black solid' : '')}} to={{pathname: '/projects'}}>
										Projects
									</Link>
								</List.Item>
								<List.Item active={this.props.currentPage === 'contact'}>
									<Link style={{height:'28px',paddingBottom:'1px',borderBottom:(this.props.currentPage === 'contact' ? '2px black solid' : '')}} to={{pathname: '/contact'}}>
										Contact
									</Link>
								</List.Item>
							</List>
						</div>
						<div style={{paddingLeft:'20px',paddingTop:'20px'}}>

            			<a href="https://github.com/cwtliu" target="_blank" ><Icon size='large' color='grey'  name='github' /></a>
            			<a href="mailto:yuarcuun@gmail.com" target="_blank" ><Icon size='large' color='grey'  name='mail outline' /></a>
            			<a href="https://www.linkedin.com/in/cwtliu/" target="_blank" ><Icon size='large' color='grey'  name='linkedin' /></a>

						</div>

					</Grid.Column>
					<Grid.Column width={10}>
						{this.props.currentPage === undefined ?
						<About />
						:
						null
						}

						{this.props.currentPage === 'projects' ?
						<Projects />
						:
						null
						}

						{this.props.currentPage === 'contact' ?
						<Contact />
						:
						null
						}
					</Grid.Column>
					</Grid.Row>
				</Grid>
			}

			</div>
		);
	}
}
export default Home;