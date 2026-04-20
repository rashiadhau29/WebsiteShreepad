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
          <h1 className="main-title">Shreepad communication Pvt Ltd.</h1>
          <p className="tagline">PCMC'S FAVOURITE INTERNET SERVICE PROVIDER</p>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <img src={image4} alt="Service 4" className="gallery-image" />
          <img src={image3} alt="Service 3" className="gallery-image" />
          <img src={image2} alt="Service 2" className="gallery-image" />
          <img src={image1} alt="Service 1" className="gallery-image" />
        </div>

              </main>
    </div>
  )
}

export default App
