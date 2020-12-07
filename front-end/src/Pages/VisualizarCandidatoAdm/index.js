import React, { useEffect, useState } from "react";
import imgDelete from '../../assets/delete.webp'
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Tag from '../../Components/Tag/Index';
// style
import "./style.css";

export default function VisualizarCandidatoAdm() {
    const [NomeCompleto, SetNomeCompleto] = useState('');
    const [Rg, SetRg] = useState('');
    const [CPF, SetCPF] = useState('');
    const [Telefone, SetTelefone] = useState('');
    const [Linkedin, SetLinkedin] = useState('');
    const [Curso, SetCurso] = useState('');
    const [Area, SetArea] = useState('');
    const[CaminhoImagem,setCaminho]=useState('');
    const[Vagas,setVagas]=useState([]);

  let history = useHistory();

  useEffect(() => {
      BuscarCandidatoPorId();
      listarVagasInscritas();
  }, []);
 
  const BuscarCandidatoPorId = () => {
    fetch('http://localhost:5000/api/Administrador/BuscarCandidatoPorIdAdm/'+localStorage.getItem("CandidatoSelecionado"), {
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => response.json()).then(dados => {
        SetRg(dados.rg);
        SetCPF(dados.cpf);
        SetTelefone(dados.telefone);
        SetLinkedin(dados.linkLinkedinCandidato);
        SetNomeCompleto(dados.nomeCompleto);
        SetArea(dados.nomeArea);
        SetCurso(dados.nomeCurso);
        setCaminho(dados.caminhoImagem)
    }).catch(err => console.error(err));
}


const listarVagasInscritas = () => {
    fetch('http://localhost:5000/api/Administrador/ListarVagasInscritasAdm/'+localStorage.getItem("CandidatoSelecionado"), {
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(response => response.json())
        .then(dados => {
            setVagas(dados);
        })
        .catch(err => console.error(err));
}

const DeletarInscricao = (id) => {
  fetch('http://localhost:5000/api/Administrador/DeletarInscricao/' + id, {
      method: 'DELETE',
      headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
      }
  }).then(response => response.json())
  .then(dados => {
   alert(dados);
   listarVagasInscritas();
  })
  .catch(err => console.error(err));
}

  return (
    <div className="VisualizarVagaAdm">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="MeioVizualizarAdm">
        <div className="EsquerdoAdm">
          <div>
            {
            Vagas.map((item) => {
              return (
                <div key={item.idEmpresa} className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={
                        "http://localhost:5000/imgPerfil/" + item.caminhoImagem
                      }
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>{item.tituloVaga}</h2>
                      <p>{item.nomeArea}</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      alt="Delete"
                      onClick={() =>DeletarInscricao(item.idInscricao)}
                    />
                    
                    <div className="DeletePerfil">
                        <button
                      className="btVerPerfil"
                      onClick={e=>{
                        e.preventDefault();
                        localStorage.setItem("idVagaSelecionadaAdm",item.idVaga);
                        history.push("VizualizarVagaAdmin");
                    }}
                    >
                      <h4>Ver vaga</h4>
                    </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="hrAdm"></hr>
        <div className="DireitoAdm">
            <div className="BoxEmpresa">
                <div className="ImagemEmpresaAdm">
                    <img src={"http://localhost:5000/imgPerfil/"+CaminhoImagem}/>
                  <h5>{NomeCompleto}</h5>
                </div>
                <div className="DadosDaEmpresa">
                  <Tag NomeTag={"Rg:"+Rg}/>
                  <Tag NomeTag={"CPF:"+CPF}/>
                  <Tag NomeTag={"Linkedin:"+Linkedin}/>
                  <Tag NomeTag={"Telefone:"+Telefone}/>
                  <Tag NomeTag={"Curso do candidato:"+Curso}/>
                  <Tag NomeTag={"Area:"+Area}/>
                  
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
