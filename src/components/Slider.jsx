import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import '../assets/Carousel.css'

function Slider(){
    return (
        <Carousel
            className='carousel' 
            
            variant='dark'
        >
            <Carousel.Item>
                <ExampleCarouselImage text="Competitive Insights" >
                    
                </ExampleCarouselImage>
                
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Trends Navigator" />
                
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Identify Key Industry Experts" />
                
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;