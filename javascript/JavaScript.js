//Selecione o botão e o elemnto body
const themeToggleBtn=document.getElementById('theme-toggle');
const body=document.body;
//Adiciona um evento de clique ao botão para alternarentre os temas
themeToggleBtn.addEventListener('click',function(){
    //Alterna entre as classes 'light-theme' e 'dark-theme' no body
    body.classList.toggle('dark-theme');

    //Altera o texto do botão com base no tema atual
    if (body.classList.contains('dark-theme')){
        themeToggleBtn.textContent='Mudar para Tema Claro'
    } else {
        themeToggleBtn.textContent='Mudar para Tema Escuro'
    }

})