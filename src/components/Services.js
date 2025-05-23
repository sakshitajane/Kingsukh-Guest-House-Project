import React from 'react';
import serviceImage from '../assets/service.jpg'; // Replace with actual image path

const services = [
  {
    iconClass: 'ri-shield-star-line',
    title: 'High Class Security',
    description: '24/7 security surveillance, trained guards, and secure access to ensure your safety.',
    color: '#E0F3FF',
  },
  {
    iconClass: 'ri-24-hours-line',
    title: '24 Hours Room Service',
    description: 'Get fresh food, cleaning, or amenities anytime, delivered right to your room.',
    color: '#FEE9F2',
  },
  {
    iconClass: 'ri-restaurant-2-fill',
    title: 'Restaurant',
    description: 'Delicious, hygienic meals with a variety of cuisines served daily.',
    color: '#F4ECFD',
  },
  {
    iconClass: 'ri-map-2-line',
    title: 'Tourist Guide Support',
    description: 'Get help planning your local tours with our in-house travel assistant.',
    color: '#FFEAE6',
  },
];

const statsData = [
  {
    count: '100+',
    label: 'Bookings Completed',
  },
  {
    count: '150+',
    label: 'Happy Customers',
  },
];

const Services = () => {
  return (
    <section className="services-section"  id="services" style={{ padding: '60px 20px' }}>
      {/* Centered Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className="title" >
          SERVICES
        </p>
        <h2 className="section-heading" style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#222'
        }}>
          Strive Only For The Best.
        </h2>
      </div>

      <div className="services-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}>
    
        <div style={{ flex: '1 1 400px' }}>
          <img
            src={serviceImage}
            alt="Service Area"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '550px',
              objectFit: 'cover',
              borderRadius: '16px'
            }}
          />
        </div>

        <div className="services-content">
          <div className="services-list" >
            {services.map((service, index) => (
              <div className="service-item" key={index} >
                <div
                  className="service-icon"
                  style={{
                    backgroundColor: service.color,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  <i className={service.iconClass}></i>
                </div>
                <div>
                  <p className="service-title" style={{ fontWeight: 'bold', margin: '0 0 4px' }}>{service.title}</p>
                  <p className="service-description" style={{ fontSize: '14px', color: '#555', margin: 0 }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
  <div
  className="stats-container"
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '50px',
    flexWrap: 'wrap',
    padding: '30px 20px',
    background: 'linear-gradient(to right, #f9f9f9, #f1f1f1)',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  }}
>
  {statsData.map((stat, index) => (
    <div
      key={index}
      className="stat-box"
      style={{
        textAlign: 'center',
        background: '#fff',
        padding: '25px 30px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease',
        minWidth: '180px',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h2
        className="stat-count"
        style={{
          fontSize: '36px',
          color: '#2c3e50',
          marginBottom: '10px',
          fontWeight: '700',
        }}
      >
        {stat.count}
      </h2>
      <p
        className="stat-label"
        style={{
          fontSize: '16px',
          color: '#7f8c8d',
          fontWeight: '500',
        }}
      >
        {stat.label}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Services;
