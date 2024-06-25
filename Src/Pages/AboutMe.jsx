import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import About from '../Components/Aboutme_content/Aboutme_content';

function AboutMe() {
    return (
        <>
        <Navbar />
        <section>
            <About />
        </section>
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default AboutMe