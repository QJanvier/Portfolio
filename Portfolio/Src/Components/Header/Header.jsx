import Slider from '../Slider/Slider.jsx';

function Header() {

    return (
<>
      <div id="header" className='article border-radius'>
        <Slider />
        <h1 className='header__h1'>
              <div className='article-hero article-space'>
                {/* <div className='header__pp'>
                  <img width={240} height={240} alt="Profile Picture" src='' loading='eager'/>
                </div> */}
              </div>
              <div className='header__text'>                    
                    <a href="https://github.com/QJanvier" target='_blank'>
                      <button className='header__button form-btn'>
                        <img width={32} height={32} src="/images/Logos/github_logo.svg" alt="Github Logo" className='header__logo'/>
                        GitHub
                      </button>
                    </a>

                    <a href="" target='_blank'>
                      <button className='header__button form-btn'>
                        <img width={32} height={32} src="/images/Logos/Linkedin.svg" alt="Linkedin Logo" className='header__logo'/>
                        LinkedIn
                      </button>
                    </a>
              </div>
        </h1>
      </div>
    </>
  );
}

export default Header;