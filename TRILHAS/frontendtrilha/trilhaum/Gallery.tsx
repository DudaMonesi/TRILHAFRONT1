import React from 'react';
import './Gallery.css';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
            ))}
        </div>
    );
};

export default Gallery;