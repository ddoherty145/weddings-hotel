import '../styles/Hero.css';

const Hero = ({ backgroundImage }) => {
  return (
    <div 
      className="hero" 
      style={{ 
        backgroundImage: `url(${backgroundImage})` 
      }}
    />
  );
};

export default Hero; 