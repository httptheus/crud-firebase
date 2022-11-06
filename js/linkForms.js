document.getElementById('linkCad').addEventListener('click', function(){
    document.getElementById('formLogin').style.display = 'none'

    document.getElementById('formCadastro').style.display = 'flex'

    document.body.style.backgroundColor = 'fuchsia'
})

document.getElementById('linkLog').addEventListener('click', function(){
    document.getElementById('formLogin').style.display = 'flex'

    document.getElementById('formCadastro').style.display = 'none'

    document.body.style.backgroundColor = 'turquoise'
})