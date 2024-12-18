import React from 'react';
import "../assets/Carousel.css"

const ExampleCarouselImage = ({ text }) => {

  const getImageSource = (text) => {
    if (text === "Competitive Insights") {
      return '/chess.webp'; 
    } else if (text === "Trends Navigator") {
      return '/trends.png'; 
    } else if (text === "Identify Key Industry Experts") {
      return '/experts.jpg'; 
    }
    return '/default.png'; 
  };

  const handleLink = (text) => {
    if (text === "Competitive Insights") {
      return 'search'; 
    } else if (text === "Trends Navigator") {
      return 'trends'; 
    } else if (text === "Identify Key Industry Experts") {
      return 'experts'; 
    }
    return '#';
  }

  const handleImg = (text) => {
    if (text === "Competitive Insights") {
      return 'search'; 
    } else if (text === "Trends Navigator") {
      return 'trends'; 
    } else if (text === "Identify Key Industry Experts") {
      return 'experts'; 
    }
    return '#';
  }

  return (
    <div className='container'>
      <a href={handleLink(text)} style={{textDecoration:'none', color:'black'}}>{text}</a>
      <a href={handleImg(text)} >
        <img src={getImageSource(text)} />
      </a>
    </div>
  );
};

export default ExampleCarouselImage;
