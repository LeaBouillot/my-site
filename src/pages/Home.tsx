import Navbar from "../components/Navbar";
import Icons from "../components/Icons";
import backgroundImage from '../assets/hero-bg.jpg';

export default function Home() {
    const homeStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };
    return (
        <main className={homeStyle}>
            <Navbar />
            <h1>Brandon Johnson</h1>
            <p>I'm Developpeur</p>
            <Icons />
        </main>
    )
}