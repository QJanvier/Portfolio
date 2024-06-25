import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';

function Home() {
    return (
        <>
        <Navbar />
        <section className='Hero-Pages'>
            <Hero />
        </section>
        <header>
            <Header />
        </header>       
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Home