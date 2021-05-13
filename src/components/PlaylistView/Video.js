import React,{Component} from 'react';
import ReactPlayer from 'react-player';

// Controls the view of playing video
class Video extends Component{

    render(){
        return(
            <div>
            <ReactPlayer  onEnded={()=>this.props.endVideo()}  url={this.props.link.url} height={450} width={"100%"} display="false" controls="true" playing/>
            </div>
                           
        );
    }
}

export default Video;