import React from 'react';
import Slider from  'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class VideoSlider extends React.Component {


    constructor(props) {
        super(props)
       
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

         
        return (
            <Slider {...settings}>
                <div>
                    <video width="100%" autoPlay loop muted>
                        <source
                            src="http://techslides.com/demos/sample-videos/small.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support html5 video
                    </video>
                </div>
                <div>
                     <video  width="100%" autoPlay loop muted>
                        <source
                            src='SampleVideo_1280x720_1mb.mp4'
                            type="video/mp4"
                        />
                        Your browser does not support html5 video
                     </video>
                </div>
                <div>
                     <video  width="100%" autoPlay loop muted>
                        <source
                            src='SampleVideo_1280x720_2mb.mp4'
                            type="video/mp4"
                        />
                        Your browser does not support html5 video
                     </video>
                </div>
                <div>
                        <video  width="100%" autoPlay loop muted>
                            <source
                                src={this.props.video.blobData}
                                type="video/mp4"
                            />
                            Your browser does not support html5 video
                        </video>
                    
                </div>
              
            </Slider>

        );
    }
}


export default VideoSlider;