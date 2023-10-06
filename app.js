const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards() {
      if (filterElement.value !== '') {
            for (let card of cards) {
                  let title =  card.querySelector('h2')
                  title = title.textContent.toLowerCase()

                  let filterText = filterElement.value.toLowerCase()

                  if (!title.includes(filterText)) {
                        card.style.display = "none"
                  }
                  else {
                        card.style.display = "block"
                  }
            }
      } else {
            for (let card of cards) {
                  card.style.display = "block"
            }
      }
}

/* 
"CONST" é uma variável de valor fixo

"FOR"(para) Determina que uma ação deve ser executada a partir de uma 
condição inicial até que seja encontrada outra que interrompa o laço. 

"LET" permite que você declare vairáveis limitando seu escopo no bloco, instrução, 
ou em uma expressão na qual ela é usada.

"! exclamação" para representar o operador lógico NÃO (negação ou valor contrário)

"IF" é uma estrutura condicional que executa a afirmação, dentro do bloco,
se determinada condição verdadeira.

"ELSE" é uma estrutura que é executada caso a afirmação seja falsa.
*/