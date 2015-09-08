/*Formulario.js*/

//$('#btn_enviar').on('submit',function(){
$('#btn_enviar').on('click',function(){

        var nome = $('#nome').val();
      	var email = $('#email').val();
        var assunto = $('#assunto').val();
	    	var mensagem = $('#mensagem').val();

        //var serializedData = $('#formulario').serialize();

        });

        var urlData = '&nome=' + (this).nome + '&email=' + (this).email + '&assunto=' + (this).assunto + '&mensagem=' + (this).mensagem;

        $.ajax({
              type: "POST", 
              //data: {nome: nome, email: email, assunto: assunto, mensagem: mensagem},
              data: urlData,
              async: true,
              url: 'http://www.ingleza.com.br/sacfb/enviar_email.php',
              success: function(result){
                alert(result);
              }
             /* success: function(data){
                    if(data =='enviou'){
                        alert('Email enviado com sucesso!');
                    $(form).reset();
                    }
                    else {
                        alert('Ocorreu um erro, Tente Novamente!');
                    }*/

});