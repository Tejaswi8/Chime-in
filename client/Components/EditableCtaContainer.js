import React from 'react';


   /*Editable CTA Container*/
   class EditableCtaContainer extends React.Component {
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
        <div className="row">
            {this.state.items.map(item=>
                                  
              <div className="col-lg-4" key={item.feedUuid} >
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p>This is an editable CTA – Please Chime In, send us your photos or videos on this specific topic</p>
                        <div className="row">
                             <div className="preview-container">
                                {
                                    item.medias.type=='VIDEO' ?
                                                <iframe key={item.feedUuid} className="preview-video" src={item.medias.renditionData.mp4.url}></iframe>:
                                                <iframe key={item.feedUuid} className="preview-video" src={item.medias.renditionData.mp4.url}></iframe>
                                }
                            </div>
                            
                            
                            <div className="thumbnail-container">
                                {item.posts.slice(0, maxSmallImages).map( ( smallMedia, index )=>{
                                    return <div key={smallMedia.postUuid} className="thumbnail-image">
                                        {
                                            smallMedia.medias.type=='IMAGE' ?
                                                    <img key={smallMedia.postUuid} className="thumbnail-image" src={smallMedia.medias.renditionData.medium3x2.url}></img> :
                                                    <img key={smallMedia.postUuid} className="thumbnail-image" src={smallMedia.medias.renditionData.medium3x2.url}></img>
                                        }
                                        { index == ( maxSmallImages - 1 ) ? <label className="thumbnail-image-more">{ ( item.posts.length > maxSmallImages ? item.posts.length+'+' : '' ) }</label> : null}
                                    </div>
                                })}
                            </div> 
                            
                            
                        </div>
                        <div className="row">
                            { item.feedStatus=='ACTIVE' ? <button type="button" className="btn btn-link pull-right"> <span className="glyphicon glyphicon-camera" aria-hidden="true"></span> Upload </button> : null }
                            <button type="button" className="btn btn-link pull-right">
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











export default EditableCtaContainer;