import './App.css'
import shreepadLogo from './assets/shreepad-logo.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'

function App() {
  return (
    <div className="shreepad-website">
      {/* Header with Logo */}
      <header className="header">
        <div className="logo-container">
          <div className="logo">
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <img src={shreepadLogo} alt="Shreepad Communication Pvt Ltd" className="center-logo" />
          <div className="iso-certification">AN ISO 9001:2015 COMPANY</div>
          <div className="hero-text-block">
            <h1 className="main-title">Shreepad communication Pvt Ltd.</h1>
            <p className="tagline">PCMC'S FAVOURITE INTERNET SERVICE PROVIDER</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="gallery-item">
            <img src={image4} alt="Broadband Service" className="gallery-image" />
            <p className="gallery-label">BROADBAND SERVICE</p>
          </div>
          <div className="gallery-item">
            <img src={image3} alt="Leased Line" className="gallery-image" />
            <p className="gallery-label">LEASED LINE</p>
          </div>
          <div className="gallery-item">
            <img src={image2} alt="Fiber Infra and Management" className="gallery-image" />
            <p className="gallery-label gallery-label-multiline">FIBER INFRA AND<br />MANAGEMENT</p>
          </div>
          <div className="gallery-item">
            <img src={image1} alt="CCTV and security" className="gallery-image" />
            <p className="gallery-label">CCTV &amp; security</p>
          </div>
        </div>

        <section className="about-us-section">
          <h2 className="about-us-title">About Us</h2>
          <div className="about-us-divider" />
          <p className="about-us-intro">
            Shreepad Communication Pvt. Ltd. is an organization that endeavors to provide smart Internet Solutions in PCMC
            <br />
            and Banner.
          </p>
          <p className="about-us-intro">
            We are expertise in Infrastructure setup for various Broadband services, personal networks, IT-enabled security
            <br />
            and CCTV &amp; security services.
          </p>

          <div className="about-features">
            <article className="about-feature-card">
              <div className="about-feature-icon">🏅</div>
              <h3>Reliable</h3>
              <p>
                Team Shreepad is very
                <br />
                well-known for support
                <br />
                services. We believe in
                <br />
                building and maintaining
                <br />
                long-term relationships
                <br />
                with all our clients.
              </p>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">⚗️</div>
              <h3>Solutions</h3>
              <p>
                We endeavors offer you
                <br />
                the best solutions to
                <br />
                acquire your maximum
                <br />
                satisfaction. We are the
                <br />
                masters in offering
                <br />
                effective
                <br />
                Internet / BB solutions.
              </p>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">🖊️</div>
              <h3>Experience</h3>
              <p>
                We are a team having
                <br />
                more than 10 Years of
                <br />
                experience in Internet and
                <br />
                Broadband solutions. Our
                <br />
                consultants always
                <br />
                aiming to deliver what
                <br />
                was promised!!
              </p>
            </article>

            <article className="about-feature-card">
              <div className="about-feature-icon">💰</div>
              <h3>Affordable</h3>
              <p>
                We have provided best
                <br />
                plus affordable Internet,
                <br />
                Broadband, and Leased
                <br />
                Line services to Home as
                <br />
                well as Commercial users
                <br />
                in PCMC and banner area.
              </p>
            </article>
          </div>
        </section>

        <section className="our-services-section">
          <h2 className="our-services-title">Our Services</h2>
          <div className="our-services-divider" />

          <div className="our-services-box">
            <article className="our-service-item">
              <div className="our-service-icon">🌐</div>
              <h3>Broadband Service</h3>
              <p>
                We provide Internet broadband connection for Home / Business use. With our hassle-free installation and excellent
                service, you can enjoy smooth, high-bandwidth Internet connectivity.
              </p>
            </article>

            <article className="our-service-item">
              <div className="our-service-icon">🏠</div>
              <h3>Fabre to Home</h3>
              <p>
                With the help of the latest technology we install optical fiber from a central point directly to individual
                buildings to provide unprecedented high-speed Internet access.
              </p>
            </article>

            <article className="our-service-item">
              <div className="our-service-icon">📡</div>
              <h3>Leased Line Service</h3>
              <p>
                We provide a private bidirectional or symmetric telecommunications line between two or more locations in exchange
                for a monthly rent. Our leased line services are beneficial for businesses to connect geographically distant
                offices.
              </p>
            </article>

            <article className="our-service-item">
              <div className="our-service-icon">🧑‍💼</div>
              <h3>Network Infra Management</h3>
              <p>
                We have a team of network infra experts, who analyze the fiber root and point-to-point connectivity to make the
                network smarter. Our solutions also help you to reduce your infra cost and focus more on the network solutions
                effectively.
              </p>
            </article>
          </div>
        </section>

        <section className="cctv-security-section">
          <h2 className="cctv-security-title">CCTV &amp; Security</h2>
          <p className="cctv-security-intro">
            We provide advanced CCTV &amp; security services which include but are not limited to:
          </p>

          <div className="cctv-image-panel" aria-label="CCTV equipment image area">
            <span>📹</span>
            <span>📷</span>
            <span>🎥</span>
            <span>📷</span>
            <span>📹</span>
          </div>

          <ul className="cctv-security-list">
            <li>24/7 remote CCTV monitoring (live &amp; event-based)</li>
            <li>24/7 Electric Fence Monitoring</li>
            <li>
              CCTV camera installation Access control (Electronic tags, Biometrics, Facial Recognition and Automated Number Plate
              Recognition)
            </li>
            <li>On-site security staff monitoring (to ensure scheduled patrols and perimeter checks are adhered to)</li>
            <li>Healthcare support (Individualized patient care, security and fall prevention)</li>
            <li>Rent-to-own financing of CCTV &amp; security solutions</li>
          </ul>
        </section>

        <section className="why-team-section">
          <h2 className="why-team-title">Why Team Shreepad?</h2>
          <div className="why-team-divider" />

          <div className="why-team-graphic">
            <div className="wt-label wt-left-top">• Well Trained Staff</div>
            <div className="wt-label wt-left-mid">• Secure Infrastructure</div>
            <div className="wt-label wt-left-bottom">• Clear communication</div>
            <div className="wt-label wt-bottom">• Expert analysts</div>
            <div className="wt-label wt-right-top">• Networks Experts Team</div>
            <div className="wt-label wt-right-mid">• Promised SLA awareness</div>
            <div className="wt-label wt-right-bottom">• Latest techniques for Network monitoring</div>

            <div className="wt-dot wt-a" />
            <div className="wt-dot wt-b" />
            <div className="wt-dot wt-c" />
            <div className="wt-dot wt-d" />
            <div className="wt-dot wt-e" />
            <div className="wt-dot wt-f" />
            <div className="wt-dot wt-g" />
            <div className="wt-dot wt-h" />

            <div className="wt-line wt-l1" />
            <div className="wt-line wt-l2" />
            <div className="wt-line wt-l3" />
            <div className="wt-line wt-l4" />
            <div className="wt-line wt-l5" />
            <div className="wt-line wt-l6" />
            <div className="wt-line wt-l7" />
            <div className="wt-line wt-l8" />
            <div className="wt-line wt-l9" />
            <div className="wt-line wt-l10" />
          </div>
        </section>

        <section className="why-team-summary-section">
          <h2 className="why-team-summary-title">Why Team Shreepad?</h2>
          <div className="why-team-summary-divider" />

          <div className="why-team-summary-box">
            <div className="why-team-summary-icon">
              <img src="/growth-icon.png" alt="Growth chart icon" />
            </div>
            <div className="why-team-summary-separator" />
            <div className="why-team-summary-text">
              <p>
                Shreepad communication Pvt. Ltd. is having current 600 (Home and
                <br />
                Commercial) active customers. We are authorised Licensed C Class Licensed
                <br />
                Hoder.
              </p>
              <p>
                Our key area as of now is Moshi Borhadewadi, Jadhavwadi, Bhosarigaon and
                <br />
                MIDC. We are using our own fiber infrastructure which is covered more than
                <br />
                35 km in PCMC.
              </p>
              <p>
                We at team Shreepad always looking to convert opportunities into the
                <br />
                deliverables.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
