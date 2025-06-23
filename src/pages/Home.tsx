
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to GreenSite</h1>
          <p>A simple, clean website with a refreshing green design</p>
          <button className="btn">Learn More</button>
        </div>
      </section>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Eco-Friendly</h3>
            <p>Our design philosophy embraces sustainability and environmental consciousness.</p>
          </div>
          <div className="feature-card">
            <h3>Minimalist</h3>
            <p>Clean, simple, and effective design that focuses on what matters most.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Looks great on all devices, from mobile phones to desktop computers.</p>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <h2>Ready to get started?</h2>
        <p>Join us today and experience the refreshing simplicity of GreenSite.</p>
        <button className="btn">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;