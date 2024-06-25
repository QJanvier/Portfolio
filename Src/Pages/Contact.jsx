import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Form_contact from "../Components/Form_contact/Form_contact";

function Contact() {
    return (
        <>
            <Navbar />
            <section>
                <Form_contact />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Contact