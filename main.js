const form = document.getElementById('form-valida');
var numeroA = document.getElementById('numero-a');
var numeroB = document.getElementById('numero-b');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const mensagemSucesso = `Sim, o valor do número A: ${numeroA.value} é maior que o número B: ${numeroB.value}`;
    const mensagemErro= `Não, o Valor do número B: ${numeroB.value} é maior que o número A: ${numeroA.value}`;
    const mensagemIgual= `Não, o valor do número A: ${numeroA.value} é igual que o número B: ${numeroB.value}`;

    if(numeroA.value>numeroB.value){
        //alert(mensagemSucesso);
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display= 'block';

        numeroA.value='';
        numeroB.value='';
    } else if(numeroA.value==numeroB.value){
        //alert(mensagemErro);
        const containerMensagemIgual = document.querySelector('.equal-message');
        containerMensagemIgual.innerHTML = mensagemIgual;
        containerMensagemIgual.style.display = 'block';

        numeroA.value='';
        numeroB.value='';
    } else {
        //alert(mensagemErro);
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        numeroA.value='';
        numeroB.value='';
    }
    

    
});
