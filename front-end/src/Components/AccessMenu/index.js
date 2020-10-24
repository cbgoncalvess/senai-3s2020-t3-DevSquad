import React from 'react';

import './style.css';

export default function AccessMenu() {
    return (<div>
        <textarea id="textarea" class="none" />
            <div vw class="enabled">
                <div vw-plugin-wrapper>
                    <div class="vw-plugin-top-wrapper"></div>
                    </div>
                </div>
          <button id="btnbar" class="block" accesskey="a">
                <div class="botaoflutuante fa fa-universal-access font1" title="Menu acessibilidade">
                </div>
          </button>
          <div id="bar" class="none">
            <div class="flex">


        <button id="botao" class="access-icons kit" accesskey="z" title="Alto contraste">
            <div class="fa fa-adjust">
            </div>
        </button>


        <button id="botaomaior" class="access-icons kit" accesskey="x" title="Aumentar fonte">
            <div class="fa fa-font">
            </div>
        </button>


        <button id="botaolibras" class="access-icons kit">
            <div vw-access-button class="fa fa-american-sign-language-interpreting active" accesskey="c" title="Linguagem de libras Alt + l">
            </div>
        </button>

        <button id="btn-gravar-audio" class="access-icons kit" accesskey="v" title="Comando de voz">
            <div class="fa fa-microphone">
            </div>
        </button>
			</div>
        </div>



    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>new window.VLibras.Widget('https://vlibras.gov.br/app');</script>
    </div>
    );
}