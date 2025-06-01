import React from 'react';
import { Link } from 'react-router-dom';
import ResortBrandCard from '../components/ResortBrandCard';
import Hero from '../components/Hero';
import resortBrands from '../data/resortBrands';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero backgroundImage="public/images/resort-image-1.webp" />
      <div className="resort-grid">
        {resortBrands.map((brand) => (
          <Link to={`/brand/${brand.id}`} key={brand.id} className="card-link">
            <ResortBrandCard brand={brand} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
