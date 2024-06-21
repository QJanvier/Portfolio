import { useNavigate } from "react-router";
import WorksData from '../../Data/Wall.json'

function Grid() {
    const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
        <section className='article'>
          <h2>Mes Projets</h2>
          {/* Need to add each pages for each work showed like i did in the KAsa project path already done */}
          <div onClick={() => handleNavigation("/works")} className='works-grid'>
            {WorksData.map(work => (
              <div key={work.wallId} className='works-grid__slot'>
                <img
                  src={work.wallSrc}
                  alt={`Projet ${work.workName}`} 
                  className={`bg ${work.wallName}`} 
                  width={work.width}
                  height={work.height}
                />
              </div>
            ))}
          </div>
        </section>
    </>
  );
}

export default Grid;
