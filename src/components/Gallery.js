import React from 'react';
import ReactPlayer from 'react-player'
import { Carousel } from 'react-bootstrap';
const Gallery = () => {
  return <div className='gallery'>
      <div data-aos="fade-up" data-aos-delay="200" id="Services_1">
            <h1>Our Gallery</h1>
            <h2>Watch Our Gallery</h2>
        </div>
       <div className="gallery_1">
       <Carousel>
            <Carousel.Item>
            <div>
            <ReactPlayer url='https://www.youthindiafoundation.com/static/img/home/Youth%20India%20Delhi.mp4' controls/>
            </div>           
            </Carousel.Item> 
            <Carousel.Item>
            <div>
            <ReactPlayer url='https://www.youthindiafoundation.com/static/img/home/Youth%20India%20Odisha.mp4' controls/>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
            <ReactPlayer url='https://www.youthindiafoundation.com/static/img/home/Youth%20India%20Tamil%20Nadu.mp4' controls/>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
            <ReactPlayer url='https://www.youthindiafoundation.com/static/img/home/Youth%20India%20Uttar%20Pradesh.mp4' controls/>
            </div>
            </Carousel.Item> 

        </Carousel>
       </div>
        
  </div>;
}

export default Gallery;
