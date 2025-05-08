import React from "react";

const MapEmbed: React.FC = () => {
    return (
        <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative overflow-hidden rounded-lg shadow-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.33528922538!2d145.7955778117692!3d-16.958050083790443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6978619d111b44c3%3A0x216c1e2b7a8bd47!2sCairns%20Boat%20Yard!5e0!3m2!1sen!2sph!4v1742459143858!5m2!1sen!2sph"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapEmbed;



