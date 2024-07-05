import Navbar from "../components/Navbar";
import Icons from "../components/Icons";
import backgroundImage from "../assets/hero-bg.jpg";

export default function Home() {
  const homeStyle = {
    position: 'relative',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'hidden',
};

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de l'overlay avec transparence
    zIndex: 0,
};

const contentStyle = {
    position: 'relative',
    zIndex: 1,
};

  return (
    <main style={homeStyle}>
      <img
        src={backgroundImage}
        alt="background image"
        style={backgroundStyle}
      />
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
      <Navbar />
      <h1>Brandon Johnson</h1>
      <p>I'm Developpeur</p>
      <Icons />
      </div>
    </main>
  );
}
