import React from 'react';

// style 
import './visualizarvaga.css';

// components
import Tag from '../../Components/Tag/Index';
import InfoVaga from '../../Components/InfoVaga/Index';

export default function VisualizarVaga() {
    return (
        <div className="VisualizarVaga">
            <main className="sessaoVisualizarVaga">

                <section className="imgBannerDescriVaga">

                    <div className="divisionIntroVaga">
                        <h2 className="v-titleVaga">Desenvolvedor Mobile Jr.</h2>

                        <div className="divisionTagsLinguagem">
                            <Tag NomeTag={"Angular"} />
                            <Tag NomeTag={"Angular"} />
                            <Tag NomeTag={"Angular"} />

                        </div>
                    </div>

                </section>

                <section className="infoVagaVisualizar">
                    <div className="card-vaga-info">
                    <InfoVaga />
                    </div>
                    
                </section>

            </main>
        </div>
    )
}