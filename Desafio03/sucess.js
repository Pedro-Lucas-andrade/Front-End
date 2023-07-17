/*Thanks for subscribing!

  A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.

  Dismiss message*/

  function sucesso(){
    let email = (document.getElementById('email').value);

    let lista = document.getElementsByClassName('list').value;
    lista.style.display = 'none';

    if (email.length == 0){
      alert('Email inválido!!')
    }
  }