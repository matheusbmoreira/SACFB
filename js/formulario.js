/*Formulario.js*/

//$('#btn_enviar').on('submit',function(){
$(document).ready( function(){
  $('#btn_enviar').click(function(e){

        var nome = $('#nome').val();
      	var email = $('#email').val();
        var assunto = $('#assunto').val();
	    	var mensagem = $('#mensagem').val();
        //var urlData = '&nome=' + nome + '&email=' + email + '&assunto=' + assunto + '&mensagem=' + mensagem;
        var form = $("#formulario");


        e.preventDefault();

        $.ajax({
              type: "POST", 
              //data: {nome: nome, email: email, assunto: assunto, mensagem: mensagem},
              //data: urlData,
              data: form.serialize(),
              url: 'http://www.ingleza.com.br/sacfb/enviar_email.php',
    
             success: function(data){
                    if(data =='s'){
                        alert('Email enviado com sucesso!');
                    }
                    else {
                        alert('Ocorreu um erro, Tente Novamente!');
                    }
              } 

        })
        
  })

});