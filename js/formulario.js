/*Formulario.js*/

//$('#btn_enviar').on('submit',function(){
$('#btn_enviar').on('click',function(){

        var nome = $('#nome').val();
      	var email = $('#email').val();
        var assunto = $('#assunto').val();
	    	var mensagem = $('#mensagem').val();
            $.ajax({
              type: "POST",
              url: 'enviar_email.php' , 
              data: {nome: nome, email: email, assunto: assunto, mensagem: mensagem}, 
              success: function(data){
                    if(data =='enviou'){
                        alert('Email enviado com sucesso!');
			              $(form).reset();
                    }
                    else {
                        alert('Tente Novamente!');
                    }

                }

               });

});