import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Grid from '../Components/Grid/Grid';

function Home() {
    return (
        <>
        <header>
            <Header />
        </header>
        <section className='Hero-Pages'>
            <Hero />
        </section>
        <Grid />
        </>
    )
}

export default Home