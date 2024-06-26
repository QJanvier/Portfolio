import Logos from '../../Data/Logos.json';

function About() {
    return (
        <>
            <div className="about-me">
                <div className="about-me__content">
                    <div className='about-me__description'>
                        <h2 className="about-me__title">
                            A propos de moi
                        </h2>
                        <p className="about-me__text">
                            Bonjour, je m'appelle Quentin Janvier, je suis développeur web Front-end. Actuellement mes compétences reposent essentiellement sur du Javascript, avec l'utilisation de React mais également Sass pour le style.   
                        </p>
                        <p className='about-me__text'>
                            Bien que mes compétences reposent sur du Front-end, je cherche à m'améliorer en permanence pour étoffer mon portfolio et étendre mes horizons.
                            Mon but est de devenir un développeur full-stack, pour ensuite me spécialiser dans le Back-end.
                        </p>
                        <p className="about-me__text">
                            Je suis titulaire d'un diplome d'intégrateur Web obtenu via la plateforme OpenClassrooms.
                        </p>
                    </div>
                    <div className='list_container'>
                        <ul className='spec_list'>
                            {Logos.map((item, index) => (
                                <li className='border-radius' key={index}>
                                    <p>{item.name}</p>
                                <img width={32} height={32} src={item.url} alt={item.alt} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About