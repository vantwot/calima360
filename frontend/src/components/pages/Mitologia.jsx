//importar Librerias
import React, {useState} from 'react'
import Experience from '../model3d/Experence'
import Header from '../Home/Header'
import { PectoralOrnamental } from '../model3d/PectoralOrnamental'
import Religion3D from '../model3d/Religion3D'
import PopupGeneral from '../utils/PopupGeneral'
import { 
    usePathtLocation,
    RenderContentFigure3D,
    ArrowRight
} from '../utils/ArrowLeft'
import Verificate from '../utils/verificate'


function RenderContentPopup() {
    return (
        <>
            <h1>Mitología de la Cultura Precolombina Calima</h1>
            <p>
                La cultura precolombina Calima fue una antigua civilización que habitó en lo que hoy es la región suroccidental de Colombia. Esta cultura tenía una rica tradición mitológica que influía en su visión del mundo y en sus prácticas religiosas.
                A continuación, exploraremos algunos de los mitos más destacados de la cultura Calima.
            </p>
            <strong>Mito del origen del mundo</strong>
            <p>
                Según la mitología Calima, el mundo fue creado por una deidad suprema conocida como "Chiminigagua". Se creía que Chiminigagua era el hacedor de todas las cosas y el dador de vida. Se decía que creó el universo a partir de un huevo cósmico y que luego dio forma a los seres humanos y a los dioses.
            </p>
            <strong>Los dioses Calima</strong>
            <p>
                La cultura Calima adoraba a varios dioses y diosas. Uno de los dioses más venerados era "Nopialli", dios del sol y la fertilidad. Se creía que Nopialli era responsable de la prosperidad de las cosechas y el ciclo de la vida. Otro dios importante era "Chibchacum", dios de la lluvia y el agua, quien controlaba los ríos y las fuentes de agua.
            </p>
            <strong>Mito de Bochica</strong>
            <p>
                Un mito central de la cultura Calima es el de "Bochica", un dios benevolente que enseñó a los seres humanos las artes de la civilización. Según el mito, Bochica enseñó a la humanidad la agricultura, la medicina y las leyes. También se le atribuyó la creación de los cuerpos celestes y la organización del mundo natural.
            </p>
            <strong>El mundo de los espíritus</strong>
            <p>
                Los Calima creían en la existencia de un mundo espiritual habitado por espíritus de la naturaleza y los ancestros. Estos espíritus eran considerados protectores y guías, y se les ofrecían ofrendas y rituales para mantener una buena relación con ellos. Los chamanes Calima eran los intermediarios entre el mundo humano y el mundo espiritual.
            </p>
            <strong>Conclusión</strong>
            <p>
                La mitología de la cultura precolombina Calima refleja la conexión profunda que tenían con la naturaleza y su búsqueda de comprender el mundo que los rodeaba. Estos mitos y creencias desempeñaron un papel fundamental en su vida cotidiana y en sus ceremonias religiosas, dejando un legado duradero en la región.
            </p>
        </>

    )
}


function RenderContentPopup2() {
    return (
        <>
            <h1>Mitología de la Cultura Precolombina Calima</h1>
            <p>
                La cultura precolombina Calima fue una antigua civilización que habitó en lo que hoy es la región suroccidental de Colombia. Esta cultura tenía una rica tradición mitológica que influía en su visión del mundo y en sus prácticas religiosas.
                A continuación, exploraremos algunos de los mitos más destacados de la cultura Calima.
            </p>
            <strong>Mito del origen del mundo</strong>
            <p>
                Según la mitología Calima, el mundo fue creado por una deidad suprema conocida como "Chiminigagua". Se creía que Chiminigagua era el hacedor de todas las cosas y el dador de vida. Se decía que creó el universo a partir de un huevo cósmico y que luego dio forma a los seres humanos y a los dioses.
            </p>
            <strong>Los dioses Calima</strong>
            <p>
                La cultura Calima adoraba a varios dioses y diosas. Uno de los dioses más venerados era "Nopialli", dios del sol y la fertilidad. Se creía que Nopialli era responsable de la prosperidad de las cosechas y el ciclo de la vida. Otro dios importante era "Chibchacum", dios de la lluvia y el agua, quien controlaba los ríos y las fuentes de agua.
            </p>
            <strong>Mito de Bochica</strong>
            <p>
                Un mito central de la cultura Calima es el de "Bochica", un dios benevolente que enseñó a los seres humanos las artes de la civilización. Según el mito, Bochica enseñó a la humanidad la agricultura, la medicina y las leyes. También se le atribuyó la creación de los cuerpos celestes y la organización del mundo natural.
            </p>
            <strong>El mundo de los espíritus</strong>
            <p>
                Los Calima creían en la existencia de un mundo espiritual habitado por espíritus de la naturaleza y los ancestros. Estos espíritus eran considerados protectores y guías, y se les ofrecían ofrendas y rituales para mantener una buena relación con ellos. Los chamanes Calima eran los intermediarios entre el mundo humano y el mundo espiritual.
            </p>
            <strong>Conclusión</strong>
            <p>
                La mitología de la cultura precolombina Calima refleja la conexión profunda que tenían con la naturaleza y su búsqueda de comprender el mundo que los rodeaba. Estos mitos y creencias desempeñaron un papel fundamental en su vida cotidiana y en sus ceremonias religiosas, dejando un legado duradero en la región.
            </p>
        </>

    )
}


/**
 * @description Encargado de mostrar la Figura 3D de la seccion Mitologia
 * @returns Mitologia Component Padre
 */
const Mitologia = () => {

    //variables
    const path_ = usePathtLocation();
    const [showIn, setShowIn] = useState(false);
    const [showIn_figure, setShowIn_figure] = useState({
        show_1: true,
        show_2: false,
    });

    //funciones
    const handleModalIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);


    const handleNextFigure = () => {
        setShowIn_figure({
            show_1: !showIn_figure.show_1,
            show_2: !showIn_figure.show_2,
        });
    }

    // el poderisimo useEffect
    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);

    //renderizar componente
    return (
        <>
            <Verificate target={"/model-mitologia"} />
            <Header login={true} />
            <div className='_container_primary_profile'>
                <RenderContentFigure3D path={path_} />
                <ArrowRight handleNextFigure={handleNextFigure} />
                {
                    showIn_figure.show_1 && 
                    <Experience 
                            title={'Mitologia'}
                            handleModalIn={handleModalIn}
                            children_={<PectoralOrnamental scale="0.25" />}
                    />
                }
                {
                    showIn_figure.show_2 &&
                    <Experience
                        title={'Mitologia'}
                        handleModalIn={handleModalIn}
                        children_= {<Religion3D scale="3.9" position={[0, 0, 0]} />}
                    />
                }
                { showIn && 
                  showIn_figure.show_1 && 
                  <PopupGeneral handleCloseIn={handleCloseIn} children_={<RenderContentPopup />} />
                }
                { showIn && 
                  showIn_figure.show_2 && 
                  <PopupGeneral handleCloseIn={handleCloseIn} children_={<RenderContentPopup2 />} />
                }

            </div>
        </>
    )
}
             


export default Mitologia;