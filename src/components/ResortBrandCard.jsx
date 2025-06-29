import '../styles/ResortBrandCard.css';

const ResortBrandCard = ({ brand }) => {
  return (
    <div className="resort-brand-card">
      <div className="image-container">
        <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
      </div>
      <h3 className="brand-name">{brand.name}</h3>
      <div className="explore-button">
        Explore More
      </div>
    </div>
  );
};

export default ResortBrandCard; 