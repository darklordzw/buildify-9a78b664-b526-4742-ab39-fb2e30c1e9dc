
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          GreenSite was founded in 2025 with a simple mission: to create clean, 
          minimalist websites with a refreshing green aesthetic. We believe that 
          simplicity in design leads to better user experiences and more effective 
          communication.
        </p>
        <p>
          Our team of designers and developers work together to create websites 
          that are not only visually appealing but also functional and user-friendly.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Simplicity</h3>
            <p>We believe in the power of simplicity and minimalism in design.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Our green approach extends beyond aesthetics to sustainable business practices.</p>
          </div>
          <div className="value-card">
            <h3>Accessibility</h3>
            <p>We create websites that are accessible to all users, regardless of ability.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We constantly explore new ideas and technologies to improve our designs.</p>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Jane Doe</h3>
            <p>Founder & Lead Designer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>John Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Emily Johnson</h3>
            <p>UX Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;