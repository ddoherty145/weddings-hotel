import '../styles/Hero.css';

const Hero = ({ backgroundImage }) => {
  // Remove 'public' from the path since Vite serves files from public directory directly
  const imagePath = backgroundImage.replace('public/', '');
  
  return (
    <div 
      className="hero" 
      style={{ 
        backgroundImage: `url(/${imagePath})` 
      }}
    />
  );
};

export default Hero; 