import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCKsvoFBmZArYziPwpgM5IGBtTpWKnmKbQ",
    authDomain: "crud-firebase-61e7c.firebaseapp.com",
    projectId: "crud-firebase-61e7c",
    storageBucket: "crud-firebase-61e7c.appspot.com",
    messagingSenderId: "844951353507",
    appId: "1:844951353507:web:6c6e69411d025339986716"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**/

let divNotificacao = document.getElementById('divNotificacao')
let spanNotificacao = document.getElementById('spanNotificacao')
let imgIcon = document.getElementById('imgIcon')

document.getElementById('btnCadastrar').addEventListener('click', function(){
    let inputNomeDeUsuarioCadastro = document.getElementById('inputNomeDeUsuarioCadastro').value

    let inputEmailCadastro = document.getElementById('inputEmailCadastro').value

    let inputSenhaCadastro = document.getElementById('inputSenhaCadastro').value

    let inputConfirmarSenhaCadastro = document.getElementById('inputConfirmarSenhaCadastro').value

    createUserWithEmailAndPassword(auth, inputEmailCadastro, inputSenhaCadastro)
    .then((userCredential) => {
    const user = userCredential.user;
        imgIcon.src = "..\\img\\iconAlertaSucesso.png"
        spanNotificacao.innerHTML = "Cadastro realizado com sucesso."

        divNotificacao.style.backgroundColor = 'lime'
        divNotificacao.style.display = 'flex'

        setTimeout(() => {
            divNotificacao.style.display = 'none'
        }, 3000)

    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        imgIcon.src = "..\\img\\iconAlertaErro.png"
        spanNotificacao.innerHTML = "Erro ao cadastrar. Verifique os campos e tente novamente."

        divNotificacao.style.backgroundColor = 'tomato'
        divNotificacao.style.display = 'flex'

        setTimeout(() => {
            divNotificacao.style.display = 'none'
        }, 3000)

    });
})