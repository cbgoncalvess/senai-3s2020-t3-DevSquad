import React from 'react';

import './style.css';

export default function AccessMenu() {

    const AbrirMenu = () => {

        let bar = document.getElementById('bar');
        let botao1 = document.getElementById("botao");
        let botao2 = document.getElementById("botaomaior");
        let botao3 = document.getElementById("botaolibras");
        let botao4 = document.getElementById("btn-gravar-audio");
        if (bar.classList == "none" || bar.classList == "none1") {
            bar.classList.remove("none");
            bar.classList.remove("none1");
            bar.classList.add("botaoflutuante1");
            botao1.classList.remove("access-icons1");
            botao2.classList.remove("access-icons1");
            botao3.classList.remove("access-icons1");
            botao4.classList.remove("access-icons1");
            botao1.classList.add("access-icons");
            botao2.classList.add("access-icons");
            botao3.classList.add("access-icons");
            botao4.classList.add("access-icons");
        }
        else {
            bar.classList.remove("botaoflutuante1");
            bar.classList.add("none1");
            botao1.classList.add("access-icons1");
            botao2.classList.add("access-icons1");
            botao3.classList.add("access-icons1");
            botao4.classList.add("access-icons1");
            botao1.classList.remove("access-icons");
            botao2.classList.remove("access-icons");
            botao3.classList.remove("access-icons");
            botao4.classList.remove("access-icons");
        }
    }

    var btnbody = document.getElementsByTagName("body");
    
    // Ao clicar do botão, ele pega o Id do body e parte para a condição. SE o body tiver a class "preto", ele remove, SE não tiver a class "preto" ele adiciona. Pego tudo o que é body.

    function Contraste() {
        if (btnbody[0].classList == 'preto' || btnbody[0].classList == 'maior preto' || btnbody[0].classList == 'preto maior') {
            btnbody[0].classList.remove("preto");
        }
        else {
            document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, pre, b, i, li, textarea, input, li, strong, small, bdi, fieldset, select, div, address, section').forEach(e => btnbody[0].classList.add("preto"));
        }
    }

    // Para aumentar a letra utilizei um processo parecido com o acima. Porém esse existe uma ordem específica para cada class que é adicionada ao body, então colocar no if 3 possibilidade para ativar e desativar a fonte para qualquer modalidade. Também mudei o simbolo do botão.

    function FonteMaior() {
        if (btnbody[0].classList == 'maior' || btnbody[0].classList == 'preto maior' || btnbody[0].classList == 'maior preto') {
            btnbody[0].classList.remove("maior");
        }
        else {
            document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, pre, b, i, li, textarea, input, li, strong, small, bdi, fieldset, select, div, address').forEach(e => btnbody[0].classList.add("maior"));
        }
    }

    function Libras () {
        let botao3 = document.getElementById("botaolibras");

        if (botao3.classList == "active"){
            botao3.classList.remove("active");
        }
        else{
            botao3.classList.add("active");
        }
    }

    return (<div>
        
        <textarea id="textarea" class="none" />
        <div vw class="enabled">
            <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        </div>
        <button id="btnbar" class="block" accesskey="a" onClick={event => {
                        event.preventDefault();
                        AbrirMenu();
                        }}>
            <div class="botaoflutuante fa fa-universal-access font1" title="Menu acessibilidade">
            </div>
        </button>
        <div id="bar" class="none">
            <div class="flex">
                <div id="botao" class="access-icons kit" accesskey="z" title="Alto contraste" onClick={event => {
                        event.preventDefault();
                        Contraste();
                        }}>
                    <div class="fa fa-adjust">
                    </div>
                </div>


                <div id="botaomaior" class="access-icons kit" accesskey="x" title="Aumentar fonte" onClick={event => {
                        event.preventDefault();
                        FonteMaior();
                        }}>
                    <div class="fa fa-font">
                    </div>
                </div>


                <div id="botaolibras" class="access-icons kit">
                    <div vw-access-button class="fa fa-american-sign-language-interpreting active" accesskey="c" title="Linguagem de libras Alt + l"onClick={event => {
                        event.preventDefault();
                        Libras();
                        }}>
                    </div>
                </div>

                <div id="btn-gravar-audio" class="access-icons kit" accesskey="v" title="Comando de voz">
                    <div class="fa fa-microphone">
                    </div>
                </div>
            </div>
        </div>
        <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script>
    </div>
    );
}