const senhaInput = document.getElementById("senha");
const btn = document.getElementById("btn");
const mensagem = document.getElementById("forca");
const mensagem2 = document.getElementById("igualdade");
btn.addEventListener("click", () => {
 const senha = senhaInput.value;
 const forca = verificarSenha(senha);
 mostrarMensagem(forca);
 mostrarMensagem2();

});

function verificarSenha(senha){
    
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temCaractEspecial =/[^A-Za-z0-9]/.test(senha);

    let forca = 0;

    if(senha.length >= 8) forca++;
    if(temMaiuscula) forca++;
    if(temMinuscula) forca++;
    if(temNumero) forca++;
    if(temCaractEspecial) forca++;

    return forca;

}
    
function mostrarMensagem2(){
    const senhainput2 = document.getElementById("senha2");
    const senha2 = senhainput2.value;
    const senha = senhaInput.value;
    if(senha !== senha2){
        mensagem.textContent = "As senhas não coincidem!";
        mensagem.style.color = "red"; 
    }

}



function mostrarMensagem(forca){
    
    if(forca === 5){
        mensagem.textContent = "Senha muito forte!";
        mensagem.style.color = "green";
    }
    else if(forca >= 3){
        mensagem.textContent = "Senha razoavel!";
        mensagem.style.color = "orange";
    }else{
        mensagem.textContent = "Senha muito fraca!";
        mensagem.style.color = "red"; 
    }

}