import React from 'react';

const Map = () => {
  return (
    <section className="map-section" style={styles.section}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>📍 Find Us Easily</h2>
        <p style={styles.subtitle}>
          Kingsukh Guest House, Manpur, Barhanti, West Bengal
        </p>
        <div style={styles.underline}></div>
      </div>

      <div style={styles.mapBox}>
        <iframe
          title="Kingsukh Guest House Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.3322873089064!2d86.85722088524265!3d23.586343803029937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1747495238179!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          style={styles.iframe}
        ></iframe>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    background: '#f9f9f9',
    textAlign: 'center',
  },
  textContainer: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginTop: '10px',
  },
  underline: {
    width: '80px',
    height: '4px',
    backgroundColor: '#ff7f50',
    margin: '16px auto 0',
    borderRadius: '4px',
  },
  mapBox: {
    maxWidth: '1000px',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
  },
  iframe: {
    border: 0,
    width: '100%',
    height: '450px',
  },
};

export default Map;
