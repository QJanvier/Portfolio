import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Works_slider from '../Components/Works_slider/Works_slider';

function Works() {
    return (
        <>
        <Navbar />
        <section>
            <Works_slider />
        </section>
         
         <footer>
            <Footer />
         </footer>
        </>
    )
}

export default Works