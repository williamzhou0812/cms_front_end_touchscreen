import React, { Component,Fragment } from 'react';
import  Edit from '@material-ui/icons/Edit'; 
import  AddCircleOutline from '@material-ui/icons/AddCircleOutline'; 

// import video_slider
import Slider from  'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Upload, Button, Icon } from 'antd';


import './ShowCase.styles.css';

class ShowCase extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            fileList : [],
            selectedAttachment: null, 
            videoBlob: [],
            testProps: 'Hi test Props',
            logo_selected: null,
            logo_upload : null
        }
        this.handleChange = this.handleChange.bind(this)
    }
        
// HandleChange from input Logo input

handleChange(event) {
    this.setState({
        logo_selected: URL.createObjectURL(event.target.files[0])
    });
};

// hander Video  file select  view 

viewAttachment = file => { 
    let reader = new FileReader();
    // if is reading complate   
    reader.onload = e => {
        //set value of selected attachment
        let newSelectedAttachment = {};
        newSelectedAttachment.file = file;
        newSelectedAttachment.blobData = e.target.result;

        

        let newVideoBlob = this.state.videoBlob;

        newVideoBlob.push(newSelectedAttachment.blobData)
        
        this.setState({
            videoBlob: newVideoBlob
        })
        console.log(this.state.videoBlob)


        // if file type is maing then show th attachment or dowload th same
        if (file.type.includes("video")) {
            this.setState({
                selectedAttachment: newSelectedAttachment
            });
        };
    };

    // read the file 

    reader.readAsDataURL(file);

}
   
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 9000,
            cssEase: "linear"
            
        };

        //console.log(this.state.selectedAttachment)

        return(
            <Fragment>
            <div className="container">
              <form >
                    <div className='logo-image'>
                        
                       
                        <input type='file' name="imageLogo" id="imageLogo" onChange={this.handleChange} />
                        <label htmlFor="imageLogo"><Edit style={{fontSize: 35, cursor: 'pointer', marginLeft: 190}}/></label>
                    </div>
                        <img src={this.state.logo_selected} alt=""  style={{width: 200, height:140, marginTop: -155}} />
                        <h4>Choose logo</h4>
                   
                        {/* <h3>Upload Video </h3>
                        Big video display here */}
                        <div className="video_update">

                        <Slider {...settings}>

                           
                        {this.state.videoBlob.map( videoBlob => (
                                    <div>
                                        {this.state.selectedAttachment && (
                                            <video  width="100%" autoPlay loop muted>
                                                <source
                                                    src={videoBlob}
                                                    type={this.state.selectedAttachment.file.type}
                                                    />
                                                Your browser does not support html5 video
                                            </video>
                                        )} 
                                </div>
                        )) }

                                {/* <div>
                                         {this.state.selectedAttachment && (
                                            <video width="400" autoPlay loop muted>
                                                <source
                                                    src={this.state.videoBlob[1]}
                                                    type={this.state.selectedAttachment.file.type}
                                                    />
                                                Your browser does not support html5 video
                                            </video>
                                        )} 
                                </div>
                                <div>
                                        {this.state.selectedAttachment && (
                                        <video width="400" autoPlay loop muted>
                                            <source
                                                src={this.state.videoBlob[2]}
                                                type={this.state.selectedAttachment.file.type}
                                                />
                                            Your browser does not support html5 video
                                        </video>
                                    )} 

                                </div> */}
         
                        </Slider>

            </div>
                        

                  
                    <div className="tubnail_video">  
                    
                       {/* make hiddien or can be visable whence clic */}


                        <Upload 
                            multiple={false}
                            beforeUpload={e => false}
                            showUploadList={false}
                            onChange={info => {
                                if(info.file.status !=='uploading') {
                                    let newFileList = this.state.fileList;
                                    newFileList.push(info.file);
                                    this.setState({
                                        fileList: newFileList
                                    })
                                }
                            }}
                            >
                            <Button style={{width: 100}}>
                                <Icon type='upload' />Choose Video
                            </Button>
                            </Upload>
                            {this.state.fileList.length > 0 && (
                                <ul>
                                    {this.state.fileList.map((file, index) => {
                                        return (
                                            <li 
                                            onClick={() => this.viewAttachment(file)}
                                            style={{ cursor: "pointer"}}
                                            key={index}
                                            >
                                             {file.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                            {/* {this.state.selectedAttachment && (
                                <video width="400" autoPlay loop muted>
                                    <source
                                        src={this.state.selectedAttachment.blobData}
                                        type={this.state.selectedAttachment.file.type}
                                        />
                                     Your browser does not support html5 video
                                </video>
                            )}  */}

                        {/* <div>
                            <input type='file' name='edit_video' id='edit_video' />
                            <label htmlFor="edit_video"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>
                            
                        </div>
                        <div>
                            <input type='file' name='edit_video' id='edit_video' />
                            <label htmlFor="edit_video"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>
                        
                        </div> */}
                    </div>
                       

                    <div className='main_contents_image'>
                        <h3>Main contents</h3>
                        <input type='file' name='main_contents_image' id='main_contents_image' />
                        <label htmlFor='main_contents_image'><Edit /></label>
                    </div>
                    
                    <div className='image_slider'>
                        <h3>Here is your slider</h3>
                    </div>
                    <div className="image_slider_container">
                            <div>
                                <h3>image Slider 01</h3>
                                <input type='file' name="eidt_image_slider"  id="eidt_image_slider"/>
                                <label htmlFor="edit_image_slider"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                <h3>image Slider 02</h3>
                                <input type='file' name="eidt_image_slider"  id="eidt_image_slider"/>
                                <label htmlFor="edit_image_slider"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                <h3>image Slider 03</h3>
                                <input type='file' name="eidt_image_slider"  id="eidt_image_slider"/>
                                <label htmlFor="edit_image_slider"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                 <h3>image Slider 04</h3>
                                 <input type='file' name="eidt_image_slider"  id="eidt_image_slider"/>
                                <label htmlFor="edit_image_slider"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                 <h3>image Slider 05</h3>
                                 <input type='file' name="eidt_image_slider"  id="eidt_image_slider"/>
                                <label htmlFor="edit_image_slider"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                    </div>
                        

                </form>  

                    
                     <button>Cancel</button>

                     <button>Publish</button>

                    <button>Save/PreView</button>
            </div>
            </Fragment>
        
        ) 
    }

}

export default ShowCase;