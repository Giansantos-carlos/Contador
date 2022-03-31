
const message = 'Um segundo e meio se passaram desde que a página foi carregada'
setTimeout(console.log, 1500, message)





const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')
const counterContanier = document.querySelector('.counter-container')
const incremetCounter = () => {
  const incremetedCounter = Number(counterContanier.textContent) + 1
  counterContanier.textContent = incremetedCounter
}
const stopCounter = () => {
  clearInterval(timer)
  counterContanier.textContent = 0
}
let timer = null

buttonInitCounter.addEventListener('click', () => {
    timer = setInterval(incremetCounter, 1000) 
})

buttonStopCounter.addEventListener('click', () => {
  stopCounter()
})

























/* 
  04
  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

/* 
  05
  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06
  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07
  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.
  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.
  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).
  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.
  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/