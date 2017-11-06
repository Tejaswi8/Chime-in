import React from 'react';

   /*Editable CTA Container*/
   class MoeConv extends React.Component {
    constructor(){
        super();
        this.state = {items:[]};
    }
    
    componentDidMount() {
        fetch(`http://ec2-34-212-93-241.us-west-2.compute.amazonaws.com:3000/api/rest/feed/popular`)
        .then(result=>result.json())
        .then(items=>this.setState({items}));
    }
  render() {
      const maxSmallImages = 3;
      
    return (
        <div className="container-fluid" className="tb">
        <div className="row" style={{display:'flex',flexWrap:'wrap'}}>
            {this.state.items.map((item,i)=>
                                  
              <div className="col-lg-3" key={i}>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p>This is an editable CTA – Please Chime In, send us your photos or videos on this specific topic</p>
                        <div className="row">
                             <div className="preview-container2">
                                {
                                    item.medias.type=='VIDEO' ?
                                                <iframe  className="preview-video" ></iframe>:
                                                <iframe  className="preview-video" ></iframe>
                                }
                            </div>
                            </div>
                            
                            <div className="row">
                                <div className='col-xs-4 ' className="checkThumbnail"> Image 1 </div>
                                <div className='col-xs-4 ' className="checkThumbnail"> Image 2 </div>
                                <div className='col-xs-4 ' className="checkThumbnail"> Image 3 </div>
                                
                         {/*   <div className="thumbnail-container" className="col-lg-2">
                                {item.posts.slice(0, maxSmallImages).map( ( smallMedia, index )=>{
                                    return <div key={smallMedia.postUuid} className="thumbnail-image">
                                        {
                                            smallMedia.medias.type=='IMAGE' ?
                                                    <img  className="thumbnail-image" ></img> :
                                                    <img  className="thumbnail-image" ></img>
                                        }
                                        { index == ( maxSmallImages - 1 ) ? <label className="thumbnail-image-more">{ ( item.posts.length > maxSmallImages ? item.posts.length+'+' : '' ) }</label> : null}
                                    </div>
                                })}
                            </div>  */}
                         
                        </div>
                        <div className="row">
                            { item.feedStatus=='ACTIVE' ? <button type="button" className="btn btn-link"> <span className="glyphicon glyphicon-camera" aria-hidden="true"></span> Upload </button> : null }
                            <button type="button" className="btn btn-link">
                                <span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}      
        </div>
        </div>
    );
  }
}

export default MoeConv;