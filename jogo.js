altura = window.innerHeight;
largura = window.innerWidth;

var vidas = 3;
var tempo = 10;

function capturarTamTela(){
	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(altura, largura);
}

function atualizarTempo(){
	tempo--;
	document.getElementById('cronometro').innerHTML = tempo;

	if (tempo<=0){
		clearInterval(cronometro);
		clearInterval(criaMosquito);
		window.location.href = 'vitoria.html';
	}
}

function carregarMosquito(){

	if (document.getElementById('mosquito')){
		document.getElementById('mosquito').remove();
		vidas--;
		if (vidas<=0) {
			window.location.href = "fim_de_jogo.html";
		} else {
			document.getElementById(`v${3-vidas}`).src="imagens/coracao_vazio.png";	
		}
	}

	var mosquito = document.createElement('img');
	mosquito.src='imagens/mosquito.png';
	mosquito.className='mosquito';
	mosquito.id = 'mosquito';

	posicaoX = Math.floor(Math.random()*largura-50);
	posicaoY = Math.floor(Math.random()*altura-50);

	posicaoX = posicaoX-50<0 ? 0:posicaoX;
	posicaoY = posicaoY-50<0 ? 0:posicaoY;

	mosquito.style.left=`${posicaoX}px`;
	mosquito.style.top=`${posicaoY}px`;
	mosquito.style.position='absolute';
	document.body.appendChild(mosquito);

	mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`;

	mosquito.onclick = function(){
		this.remove();
	};
}

function tamanhoAleatorio(){
	var tamanho = Math.floor(Math.random()*3);

	switch (tamanho){
		case 0:
			return 'mosquito_tam1';
		case 1:
			return 'mosquito_tam2';
		case 2:
			return 'mosquito_tam3';
	}
}

function ladoAleatorio(){
	var lado = Math.floor(Math.random()*2);

	switch (lado){
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';
	}
}