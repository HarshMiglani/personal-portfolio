import './styles.scss'
import photo1 from './image.png';
import photo2 from './photo2.jpg';
import Typewriter from 'typewriter-effect'
import React, {useState} from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {

    const [isPhoto1Visible, setPhoto1Visible] = useState(true);

    const handlePhotoClick = () => {
      setPhoto1Visible((prevState) => !prevState);
    };

  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="text-column">
        <h1>Harsh Miglani</h1>
        <div className='autoType'>
        <Typewriter
        options = {{
          autoStart: true,
          loop: true,
          delay: 60,
          strings: [
            'Full Stack Developer',
            'Mern Stack Developer'
          ]
        }}
        />
        </div>
        <h2> Experienced Software Developer adept in bringing forth expertise in web development, design, testing and maintenance of software systems. Equipped with a diverse and promising skill-set.</h2>
      </div>
      <div
        className={`photo-column ${isPhoto1Visible ? 'rotate' : ''}`}
        onClick={handlePhotoClick}
      >
        <img
          src={isPhoto1Visible ? photo1 : photo2}
          alt={isPhoto1Visible ? 'Photo 1' : 'Photo 2'}
        />
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Home;
