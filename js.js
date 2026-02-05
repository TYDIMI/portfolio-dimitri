// 1. Criamos uma variavel 'contador'para controlar
// qual imagem deve aparecer
let contador = 1;

// 2. A função 'setInterval' de 5000 milissegundos (5 segundos)
// Ele vai executar a 'proxImg' repetidamente a cada 5000 milissegundos
//(5 segundos)
setInterval(function() {
    proxImg();
}, 5000);

// 3. Está é a função responsável por trocar as nossas imagens
function proxImg() {
    // Toda vez que função roda, somamos +1 ao contador para ir a próxima imagem
    contador++;
    // Lógica de repetição
    // Como agora usamos 4 imagens, reiniciamos para 1 e o carrossel voltará
    // para o início (loop)
    if (contador > 4) {
        contador = 1;
    }

    // manipulação do HTML (DOM)
    // Aqui o JavaScript procura no HTML, pelo elemento que tem o id "radio"
    // + o número do contador.
    // o '.checked = true' marca aqueles inputs de radio automaticamente
    // Quando o radio é marcado, o CSS que configuramos irá mudar a imagem
    // automaticamente.
   document.getElementById("radio" + contador) =true;