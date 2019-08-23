// Todo Lists
// 1) Add top show case Nav bar 
// 2) improve main images section 
// 3 ) image Slider Section 
// TASK For Today 
// MAKE Image Slider Sections

// 28/8/2019
// 4) * form data submitstion  __ need to make change change change 
// 5) ......
// 6) ......
// 7) Improve performance for CMS


import React, { Component,Fragment } from 'react';
import axios from 'axios';

// Components from components folder

// import ShowCaseNav from '../../components/showcase_nav/showcase_nav.component';


// Third part components 
import  Edit from '@material-ui/icons/Edit'; 
import  AddCircleOutline from '@material-ui/icons/AddCircleOutline'; 
import Slider from  'react-slick';
import { Upload, Icon} from 'antd';
import Button from 'react-bootstrap/Button'

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// import Collapse from 'react-bootstrap/Collapse'

// StylesSheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './ShowCase.styles.css';

class ShowCase extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            fileList : [],
            selectedAttachment: null, 
            videoBlob: [],
            logo_selected: null,
            logo_upload : null,
            main_image: null,
            main_image_selected: null,

            imageSlider_sel_a: null,
            
            imageSlider_sel_b: null,
            imageslider_sel_c: null,
            imageSlider_sel_d: null,
            imageSlider_sel_e: null,
            
            menuInput_A: '',
            menuInput_B: '',
            menuInput_C: ''

        }

        // ** Need Clean Up Later On //
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMainImage = this.handleChangeMainImage.bind(this);

        this.handleChangeMainSilder_a = this.handleChangeMainSilder_a.bind(this);

        this.handleChangeMainSilder_b = this.handleChangeMainSilder_b.bind(this);
        this.handleChangeMainSilder_c = this.handleChangeMainSilder_c.bind(this);
        this.handleChangeMainSilder_d = this.handleChangeMainSilder_d.bind(this);
        this.handleChangeMainSilder_e = this.handleChangeMainSilder_e.bind(this);

        this.handleMenuInput_A = this.handleMenuInput_A.bind(this);
        this.handleMenuInput_B = this.handleMenuInput_B.bind(this);
        this.handelMenuInput_C = this.handelMenuInput_C.bind(this);

        

        this.handleSubmit = this.handleSubmit.bind(this);


    }
        
// HandleChange from input Logo input
handleChange(event) {
    this.setState({
        logo_upload: event.target.files[0],
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

// Main image contect select and upload functinon here

handleChangeMainImage(mainImageevent) { 

    this.setState({
          main_image_selected: URL.createObjectURL(mainImageevent.target.files[0])
    });
};


// Start to hander Image Slider parts
// first  to hard code each image to the slider and later i will push to array function


handleChangeMainSilder_a(sliderA) {
    console.log(sliderA);

    this.setState({
        imageSlider_sel_a: URL.createObjectURL(sliderA.target.files[0])
    })
}

handleChangeMainSilder_b(sliderB) {
    console.log(sliderB);

    this.setState({
        imageSlider_sel_b: URL.createObjectURL(sliderB.target.files[0])
    })
}

handleChangeMainSilder_c(sliderC) {
    console.log(sliderC);

    this.setState({
        imageSlider_sel_c: URL.createObjectURL(sliderC.target.files[0])
    })
}
handleChangeMainSilder_d(sliderD) {
    console.log(sliderD);

    this.setState({
        imageSlider_sel_d: URL.createObjectURL(sliderD.target.files[0])
    })
}
handleChangeMainSilder_e(sliderE) {
    console.log(sliderE);

    this.setState({
        imageSlider_sel_e: URL.createObjectURL(sliderE.target.files[0])
    })
}

/** 
 *  Handel form save metoh
 *  */ 
onSavePreViewHandler = () => {
    const  imageLogo = new FormData();
    imageLogo.append('file', this.state.logo_upload);
    axios.post("http://localhost:3002/api/showcase", imageLogo, {

    })
    .then(res => {
        console.log(res.statusText);
    })

    
    
}


// MenuInput handeler 

handleMenuInput_A(inputA) {
    this.setState({menuInput_A: inputA.target.value})
}

handleMenuInput_B(inputB) {
    this.setState({menuInput_B: inputB.target.value})
}

handelMenuInput_C(inputC) {
    this.setState({menuInput_C: inputC.target.value})
}

handleSubmit(event) {
   let showCaseData = {
       menuInputA: this.state.menuInput_A,
       menuInputB: this.state.menuInput_B,
       menuInputC: this.state.menuInput_C
   }
    event.preventDefault();
    alert('This input was submited: ' + this.state.menuInput_A) 
    alert('This input was submited: ' + this.state.menuInput_B) 
    alert('This input was submited: ' + this.state.menuInput_C)

    console.log(showCaseData)


}   
// end

// ...... Start from main Render functions

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

        // Setting for Slidershow


        const settings_slider = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear"
        }

       

       
        //console.log(this.state.selectedAttachment)

        return(
            <Fragment>


            < Container className="container">
                
              <form enctype="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
                    <div className='logo-image'>
                        
                       
                        <input type='file' name="imageLogo" id="imageLogo" onChange={this.handleChange} />
                        <label htmlFor="imageLogo"><Edit style={{fontSize: 35, cursor: 'pointer', marginLeft: 190}}/></label>
                    </div>
                        <img src={this.state.logo_selected} alt=""  style={{width: 200, height:140, marginTop: -155}} />
                        <h5>Choose logo</h5>
                    
                        <div>
                <hr/>
                <h5>Nav Bar section </h5>
        
                    <Nav className="justify-content-center">
                        <Nav.Item>
                             <input type="text"  value={this.state.menuInput_A} onChange={this.handleMenuInput_A}/>
                        </Nav.Item>
                        <Nav.Item>
                            <input type="text"  value={this.state.menuInput_B} onChange={this.handleMenuInput_B}/>
                        </Nav.Item>
                        <Nav.Item>
                              <input type="text"  value={this.state.menuInput_C} onChange={this.handelMenuInput_C}/>
                        </Nav.Item>
                  
                    </Nav>
                
            </div>

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

                     </Slider>

            </div>
                        

                  
            <div className="tubnail_video" >  

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
                            <Button variant="outline-info">
                                <Icon type='upload' />Choose Video
                            </Button>
                            </Upload>
                         
                            {this.state.fileList.length > 0 && (
                                <Table responsive="sm"  variant="dark" >
                                        <thead>
                                            <tr>
                                            <th>#</th>
                                            <th>File Name</th>
                                            <th></th>
                                            <th></th>
                                            
                                            </tr>
                                        </thead>
                                    <tbody>
                                           
                                         {this.state.fileList.map((file, index) => {
                                       
                                        return (
    
                                                <tr>
                                                    <td >{index}</td>

                                                    <td >  {file.name}   </td>

                                                     <td 
                                                        onClick={() => this.viewAttachment(file)}
                                                        style={{ cursor: "pointer"}}
                                                        key={index}> <Icon type="plus-circle" />
                                                    </td>

                                                    <td> <Icon type="delete" /></td>
                                                
                                                </tr>
                                                  
                                           
                                         )}
                                    
                                    )}

                                  </tbody>
                                </Table>
                            )}

                    </div>
                       
                    <hr/>

                    <div className='main_contents_image'>
                        
                        <img src={this.state.main_image_selected} alt=""  />
                        <h5> select a main contents image size for 1080 x 1098 </h5>
                        <input type='file' name='main_contents_image' id='main_contents_image' onChange={this.handleChangeMainImage} />
                        <label htmlFor='main_contents_image'><Edit /></label>

                        
                    </div>

                    <div className='image_slider'>
                    <hr/>

                        <Slider {...settings_slider} >
                            <div>
                                <img src={this.state.imageSlider_sel_a} />
                            </div>
                            <div>
                                <img src={this.state.imageSlider_sel_b} />
                            </div>
                            <div>
                                <img src={this.state.imageSlider_sel_c} />
                            </div>
                            <div>
                                <img src={this.state.imageSlider_sel_d} />
                            </div>
                            <div>
                                <img src={this.state.imageSlider_sel_e} />
                            </div>



                        </Slider>
                        
                    </div>
              
                    <div className="image_slider_container">
                            <div>
                                <h6>image Slider 01</h6>
                                <input type='file' name="eidt_image_slider_01"  id="eidt_image_slider_01" onChange={this.handleChangeMainSilder_a} />
                                <label htmlFor="eidt_image_slider_01"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                <h6>image Slider 02</h6>
                                <input type='file' name="eidt_image_slider_02"  id="edit_image_slider_02" onChange={this.handleChangeMainSilder_b}/>
                                <label htmlFor="edit_image_slider_02"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                <h6>image Slider 03</h6>
                                <input type='file' name="eidt_image_slider_03"  id="edit_image_slider_03" onChange={this.handleChangeMainSilder_c}/>
                                <label htmlFor="edit_image_slider_03"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                 <h6>image Slider 04</h6>
                                 <input type='file' name="eidt_image_slider_04"  id="edit_image_slider_04" onChange={this.handleChangeMainSilder_d} />
                                <label htmlFor="edit_image_slider_04"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                            <div>
                                 <h6>image Slider 05</h6>
                                 <input type='file' name="eidt_image_slider_05"  id="edit_image_slider_05" onChange={this.handleChangeMainSilder_e} />
                                <label htmlFor="edit_image_slider_05"><AddCircleOutline  style={{fontSize: 49, cursor: 'pointer'}}/></label>

                            </div>
                    </div>
                        


                <div>   
                     <Button  variant="outline-danger" >Cancel</Button>

                     <Button variant="outline-success" >Publish</Button>

                    <Button variant="outline-info" type="submit" onClick={this.onSavePreViewHandler} >Save/PreView</Button>
                </div>
                </form>  

            </Container>
            </Fragment>
        
        ) 
    }

}

export default ShowCase;