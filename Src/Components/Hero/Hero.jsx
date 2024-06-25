// import Card from '../Card/Card';

function Hero() {
    return (
    <>
        <section className='article-hero article'>
        <div className='hero'>
          <h2 className='hero__h2'>Bienvenue sur mon portfolio</h2>
          <h3 className='hero__h3 margin-16'>Je m'appelle Quentin Janvier</h3>
          <p className='hero__p'>
            Ce portfolio me sert de moyen d'expression pour mettre en avant mes compétences.
          </p>
          <p className='hero__p'>
            Mes compétences incluent le débogage, l'optimisation SEO/Performance ainsi que la création d'application
          </p>
          <p className='hero__p'>
            Explorez mon portfolio pour découvrir ma vision du développement web.
          </p>
        </div>
        {/* <Card /> */}
      </section>
    </>
    );
}

export default Hero