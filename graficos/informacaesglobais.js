const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacaesglobais() {
 const res = await fetch(url)
 const dados = await res.json()
 console.log(dados)   
 console.log(dados)
 paragrafo.classlist.add('graficos-conterner-texto')  
paragrafo.inneHTML = `Diacordo com pesquisas realizadas ${dados.toral-de-pessoas-no-mundo} de pessoasusam redes sociais e no colegio CCM Vinicios de Morais X alunos paraticiparam `        
    
 
}
 vizualizarinformacaesglobais()
