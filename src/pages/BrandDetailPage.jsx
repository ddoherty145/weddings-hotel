import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import resortBrands from '../data/resortBrands';
import '../styles/BrandDetailPage.css';

const BrandDetailPage = () => {
  const { id } = useParams();
  const brand = resortBrands.find(b => b.id === parseInt(id));

  if (!brand) {
    return (
      <div className="not-found">
        <h2>Brand not found</h2>
        <Link to="/" className="back-link">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="brand-detail-page">
      <Hero backgroundImage={brand.image} />
      
      <div className="content-container">
        <Link to="/" className="back-link">← Back to All Brands</Link>
        
        <div className="brand-header">
          <h1>{brand.name}</h1>
          <p className="brand-description">{brand.description}</p>
        </div>

        <div className="brand-meta">
          <span className="phone">📞 {brand.phoneNumber}</span>
          <span className="price-range">💰 {brand.priceRange}</span>
          <span className="rating">⭐ {brand.starRating}</span>
        </div>

        <section className="resorts-section">
          <h2>Available Resorts</h2>
          <div className="resorts-grid">
            {brand.resorts.map((resort, index) => (
              <div key={index} className="resort-card">
                <div className="resort-images">
                  {resort.images && resort.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`${resort.name} view ${imgIndex + 1}`} />
                  ))}
                </div>
                <div className="resort-info">
                  <div>
                    <h3>{resort.name}</h3>
                    <p className="location">{resort.location}</p>
                    <p className="price">{resort.price}</p>
                    <p className="rating">Rating: {resort.rating} ⭐</p>
                    <p className="phone">Phone: {resort.phoneNumber}</p>
                    <div className="resort-amenities">
                      {resort.amenities.map((amenity, index) => (
                        <span key={index} className="amenity-tag">{amenity}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandDetailPage; 