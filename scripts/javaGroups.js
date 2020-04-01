$(document).ready( function(){
   
gerenciaTeclaEnter();

    // $("#btn_back").click( function(){
    //     $(location).attr("href", "../main/");
    // });

    // $("#btn_save").click( function(){
    //     $(location).attr("href", "https://www.google.com"); //referencia dos btns de navegação.
    // });

    // $("#btn_next").click( function(){
    //     $(location).attr("href", "https://www.google.com");
    // });

 //======================Tratamento dos valores inseridos na tabela======================//
   

    $("#btn_calc").click( function(){
    
      console.log("I calculate success!");
     
      function Tear(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12) {
      
        this.t1 = parseInt(t1);
        this.t2 = parseFloat(t2);
        this.t3 = parseFloat(t3);
        this.t4 = parseFloat(t4);
        this.t5 = parseFloat(t5);
        this.t6 = parseFloat(t6);
        this.t7 = parseFloat(t7);
        this.t8 = parseFloat(t8);
        this.t9 = parseFloat(t9);
        this.t10 = parseFloat(t10);
        this.t11 = parseFloat(t11);
        this.t12 = parseFloat(t12);
        
      }
      
        //===================variaveis de captura======================//

                              //-------------------TURMA "A"--------------------//

                                       
      var rendimento = new Tear($("#rendA1").val(), $("#rendA2").val(), $("#rendA3").val(), $("#rendA4").val(), $("#rendA5").val(), $("#rendA6").val(),
       $("#rendA7").val(), $("#rendA8").val(), $("#rendA9").val(), $("#rendA10").val(), $("#rendA11").val(), $("#rendA12").val()
      );

      var paradas = new Tear($("#paraA1").val(), $("#paraA2").val(), $("#paraA3").val(), $("#paraA4").val(), $("#paraA5").val(), $("#paraA6").val(),
       $("#paraA7").val(), $("#paraA8").val(), $("#paraA9").val(), $("#paraA10").val(), $("#paraA11").val(), $("#paraA12").val()
      );

      var urdume = new Tear($("#urdA1").val(), $("#urdA2").val(), $("#urdA3").val(), $("#urdA4").val(), $("#urdA5").val(), $("#urdA6").val(),
       $("#urdA7").val(), $("#urdA8").val(), $("#urdA9").val(), $("#urdA10").val(), $("#urdA11").val(), $("#urdA12").val()
      );

      var trama = new Tear($("#tramaA1").val(), $("#tramaA2").val(), $("#tramaA3").val(), $("#tramaA4").val(), $("#tramaA5").val(), $("#tramaA6").val(),
       $("#tramaA7").val(), $("#tramaA8").val(), $("#tramaA9").val(), $("#tramaA10").val(), $("#tramaA11").val(), $("#tramaA12").val()
      );

      var bobina = new Tear($("#bobA1").val(), $("#bobA2").val(), $("#bobA3").val(), $("#bobA4").val(), $("#bobA5").val(), $("#bobA6").val(),
       $("#bobA7").val(), $("#bobA8").val(), $("#bobA9").val(), $("#bobA10").val(), $("#bobA11").val(), $("#bobA12").val()
      );

      var mao = new Tear($("#maoA1").val(), $("#maoA2").val(), $("#maoA3").val(), $("#maoA4").val(), $("#maoA5").val(), $("#maoA6").val(),
       $("#maoA7").val(), $("#maoA8").val(), $("#maoA9").val(), $("#maoA10").val(), $("#maoA11").val(), $("#maoA12").val()
      );

      var outros = new Tear($("#outroA1").val(), $("#outroA2").val(), $("#outroA3").val(), $("#outroA4").val(), $("#outroA5").val(), $("#outroA6").val(),
       $("#outroA7").val(), $("#outroA8").val(), $("#outroA9").val(), $("#outroA10").val(), $("#outroA11").val(), $("#outroA12").val()
      );

      var tentativas = new Tear($("#tentA1").val(), $("#tentA2").val(), $("#tentA3").val(), $("#tentA4").val(), $("#tentA5").val(), $("#tentA6").val(),
       $("#tentA7").val(), $("#tentA8").val(), $("#tentA9").val(), $("#tentA10").val(), $("#tentA11").val(), $("#tentA12").val()
      );

       

                            //-------------------TURMA "B"--------------------//

      var rendimento_b = new Tear($("#rendB1").val(), $("#rendB2").val(), $("#rendB3").val(), $("#rendB4").val(), $("#rendB5").val(), $("#rendB6").val(),
       $("#rendB7").val(), $("#rendB8").val(), $("#rendB9").val(), $("#rendB10").val(), $("#rendB11").val(), $("#rendB12").val()
      );
      var paradas_b = new Tear($("#paraB1").val(), $("#paraB2").val(), $("#paraB3").val(), $("#paraB4").val(), $("#paraB5").val(), $("#paraB6").val(),
       $("#paraB7").val(), $("#paraB8").val(), $("#paraB9").val(), $("#paraB10").val(), $("#paraB11").val(), $("#paraB12").val()
      );

      var urdume_b = new Tear($("#urdB1").val(), $("#urdB2").val(), $("#urdB3").val(), $("#urdB4").val(), $("#urdB5").val(), $("#urdB6").val(),
       $("#urdB7").val(), $("#urdB8").val(), $("#urdB9").val(), $("#urdB10").val(), $("#urdB11").val(), $("#urdB12").val()
      );

      var trama_b = new Tear($("#tramaB1").val(), $("#tramaB2").val(), $("#tramaB3").val(), $("#tramaB4").val(), $("#tramaB5").val(), $("#tramaB6").val(),
       $("#tramaB7").val(), $("#tramaB8").val(), $("#tramaB9").val(), $("#tramaB10").val(), $("#tramaB11").val(), $("#tramaB12").val()
      );

      var bobina_b = new Tear($("#bobB1").val(), $("#bobB2").val(), $("#bobB3").val(), $("#bobB4").val(), $("#bobB5").val(), $("#bobB6").val(),
       $("#bobB7").val(), $("#bobB8").val(), $("#bobB9").val(), $("#bobB10").val(), $("#bobB11").val(), $("#bobB12").val()
      );

      var mao_b = new Tear($("#maoB1").val(), $("#maoB2").val(), $("#maoB3").val(), $("#maoB4").val(), $("#maoB5").val(), $("#maoB6").val(),
       $("#maoB7").val(), $("#maoB8").val(), $("#maoB9").val(), $("#maoB10").val(), $("#maoB11").val(), $("#maoB12").val()
      );

      var outros_b = new Tear($("#outroB1").val(), $("#outroB2").val(), $("#outroB3").val(), $("#outroB4").val(), $("#outroB5").val(), $("#outroB6").val(),
       $("#outroB7").val(), $("#outroB8").val(), $("#outroB9").val(), $("#outroB10").val(), $("#outroB11").val(), $("#outroB12").val()
      );

      var tentativas_b = new Tear($("#tentB1").val(), $("#tentB2").val(), $("#tentB3").val(), $("#tentB4").val(), $("#tentB5").val(), $("#tentB6").val(),
       $("#tentB7").val(), $("#tentB8").val(), $("#tentB9").val(), $("#tentB10").val(), $("#tentB11").val(), $("#tentB12").val()
      );



                            //-------------------TURMA "C"--------------------//

      var rendimento_c = new Tear($("#rendC1").val(), $("#rendC2").val(), $("#rendC3").val(), $("#rendC4").val(), $("#rendC5").val(), $("#rendC6").val(),
       $("#rendC7").val(), $("#rendC8").val(), $("#rendC9").val(), $("#rendC10").val(), $("#rendC11").val(), $("#rendC12").val()
      );
      var paradas_c = new Tear($("#paraC1").val(), $("#paraC2").val(), $("#paraC3").val(), $("#paraC4").val(), $("#paraC5").val(), $("#paraC6").val(),
       $("#paraC7").val(), $("#paraC8").val(), $("#paraC9").val(), $("#paraC10").val(), $("#paraC11").val(), $("#paraC12").val()
      );

      var urdume_c = new Tear($("#urdC1").val(), $("#urdC2").val(), $("#urdC3").val(), $("#urdC4").val(), $("#urdC5").val(), $("#urdC6").val(),
       $("#urdC7").val(), $("#urdC8").val(), $("#urdC9").val(), $("#urdC10").val(), $("#urdC11").val(), $("#urdC12").val()
      );

      var trama_c = new Tear($("#tramaC1").val(), $("#tramaC2").val(), $("#tramaC3").val(), $("#tramaC4").val(), $("#tramaC5").val(), $("#tramaC6").val(),
       $("#tramaC7").val(), $("#tramaC8").val(), $("#tramaC9").val(), $("#tramaC10").val(), $("#tramaC11").val(), $("#tramaC12").val()
      );

      var bobina_c = new Tear($("#bobC1").val(), $("#bobC2").val(), $("#bobC3").val(), $("#bobC4").val(), $("#bobC5").val(), $("#bobC6").val(),
       $("#bobC7").val(), $("#bobC8").val(), $("#bobC9").val(), $("#bobC10").val(), $("#bobC11").val(), $("#bobC12").val()
      );

      var mao_c = new Tear($("#maoC1").val(), $("#maoC2").val(), $("#maoC3").val(), $("#maoC4").val(), $("#maoC5").val(), $("#maoC6").val(),
       $("#maoC7").val(), $("#maoC8").val(), $("#maoC9").val(), $("#maoC10").val(), $("#maoC11").val(), $("#maoC12").val()
      );

      var outros_c = new Tear($("#outroC1").val(), $("#outroC2").val(), $("#outroC3").val(), $("#outroC4").val(), $("#outroC5").val(), $("#outroC6").val(),
       $("#outroC7").val(), $("#outroC8").val(), $("#outroC9").val(), $("#outroC10").val(), $("#outroC11").val(), $("#outroC12").val()
      );

      var tentativas_c = new Tear($("#tentC1").val(), $("#tentC2").val(), $("#tentC3").val(), $("#tentC4").val(), $("#tentC5").val(), $("#tentC6").val(),
       $("#tentC7").val(), $("#tentC8").val(), $("#tentC9").val(), $("#tentC10").val(), $("#tentC11").val(), $("#tentC12").val()
      );

                   //========================chamada das variaveis=====================//

                          //-------------------TURMA "A"--------------------//
                          
      $("#result_A1").html(rendimento.t1 + rendimento.t2 + rendimento.t3 + rendimento.t4 + rendimento.t5 + rendimento.t6 +
        rendimento.t7 + rendimento.t8 + rendimento.t9 + rendimento.t10 + rendimento.t11 + rendimento.t12
      );

      $("#result_A2").html(paradas.t1 + paradas.t2 + paradas.t3 + paradas.t4 + paradas.t5 + paradas.t6 +
        paradas.t7 + paradas.t8 + paradas.t9 + paradas.t10 + paradas.t11 + paradas.t12
      );

      $("#result_A3").html(urdume.t1 + urdume.t2 + urdume.t3 + urdume.t4 + urdume.t5 + urdume.t6 +
        urdume.t7 + urdume.t8 + urdume.t9 + urdume.t10 + urdume.t11 + urdume.t12
      );

      $("#result_A4").html(trama.t1 + trama.t2 + trama.t3 + trama.t4 + trama.t5 + trama.t6 +
        trama.t7 + trama.t8 + trama.t9 + trama.t10 + trama.t11 + trama.t12
      );

      $("#result_A5").html(bobina.t1 + bobina.t2 + bobina.t3 + bobina.t4 + bobina.t5 + bobina.t6 +
        bobina.t7 + bobina.t8 + bobina.t9 + bobina.t10 + bobina.t11 + bobina.t12
      );

      $("#result_A6").html(mao.t1 + mao.t2 + mao.t3 + mao.t4 + mao.t5 + mao.t6 +
        mao.t7 + mao.t8 + mao.t9 + mao.t10 + mao.t11 + mao.t12
      );

      $("#result_A7").html(outros.t1 + outros.t2 + outros.t3 + outros.t4 + outros.t5 + outros.t6 +
        outros.t7 + outros.t8 + outros.t9 + outros.t10 + outros.t11 + outros.t12
      );

      $("#result_A8").html(tentativas.t1 + tentativas.t2 + tentativas.t3 + tentativas.t4 + tentativas.t5 + tentativas.t6 +
        tentativas.t7 + tentativas.t8 + tentativas.t9 + tentativas.t10 + tentativas.t11 + tentativas.t12
      );


                          //-------------------TURMA "B"--------------------//

      $("#result_B1").html(rendimento_b.t1 + rendimento_b.t2 + rendimento_b.t3 + rendimento_b.t4 + rendimento_b.t5 + rendimento_b.t6 +
        rendimento_b.t7 + rendimento_b.t8 + rendimento_b.t9 + rendimento_b.t10 + rendimento_b.t11 + rendimento_b.t12
      );

      $("#result_B2").html(paradas_b.t1 + paradas_b.t2 + paradas_b.t3 + paradas_b.t4 + paradas_b.t5 + paradas_b.t6 +
        paradas_b.t7 + paradas_b.t8 + paradas_b.t9 + paradas_b.t10 + paradas_b.t11 + paradas_b.t12
      );

      $("#result_B3").html(urdume_b.t1 + urdume_b.t2 + urdume_b.t3 + urdume_b.t4 + urdume_b.t5 + urdume_b.t6 +
        urdume_b.t7 + urdume_b.t8 + urdume_b.t9 + urdume_b.t10 + urdume_b.t11 + urdume_b.t12
      );

      $("#result_B4").html(trama_b.t1 + trama_b.t2 + trama_b.t3 + trama_b.t4 + trama_b.t5 + trama_b.t6 +
        trama_b.t7 + trama_b.t8 + trama_b.t9 + trama_b.t10 + trama_b.t11 + trama_b.t12
      );

      $("#result_B5").html(bobina_b.t1 + bobina_b.t2 + bobina_b.t3 + bobina_b.t4 + bobina_b.t5 + bobina_b.t6 +
        bobina_b.t7 + bobina_b.t8 + bobina_b.t9 + bobina_b.t10 + bobina_b.t11 + bobina_b.t12
      );

      $("#result_B6").html(mao_b.t1 + mao_b.t2 + mao_b.t3 + mao_b.t4 + mao_b.t5 + mao_b.t6 +
        mao_b.t7 + mao_b.t8 + mao_b.t9 + mao_b.t10 + mao_b.t11 + mao_b.t12
      );

      $("#result_B7").html(outros_b.t1 + outros_b.t2 + outros_b.t3 + outros_b.t4 + outros_b.t5 + outros_b.t6 +
        outros_b.t7 + outros_b.t8 + outros_b.t9 + outros_b.t10 + outros_b.t11 + outros_b.t12
      );

      $("#result_B8").html(tentativas_b.t1 + tentativas_b.t2 + tentativas_b.t3 + tentativas_b.t4 + tentativas_b.t5 + tentativas_b.t6 +
        tentativas_b.t7 + tentativas_b.t8 + tentativas_b.t9 + tentativas_b.t10 + tentativas_b.t11 + tentativas_b.t12
      );


                          //-------------------TUCMA "C"--------------------//

      $("#result_C1").html(rendimento_c.t1 + rendimento_c.t2 + rendimento_c.t3 + rendimento_c.t4 + rendimento_c.t5 + rendimento_c.t6 +
        rendimento_c.t7 + rendimento_c.t8 + rendimento_c.t9 + rendimento_c.t10 + rendimento_c.t11 + rendimento_c.t12
      );

      $("#result_C2").html(paradas_c.t1 + paradas_c.t2 + paradas_c.t3 + paradas_c.t4 + paradas_c.t5 + paradas_c.t6 +
        paradas_c.t7 + paradas_c.t8 + paradas_c.t9 + paradas_c.t10 + paradas_c.t11 + paradas_c.t12
      );

      $("#result_C3").html(urdume_c.t1 + urdume_c.t2 + urdume_c.t3 + urdume_c.t4 + urdume_c.t5 + urdume_c.t6 +
        urdume_c.t7 + urdume_c.t8 + urdume_c.t9 + urdume_c.t10 + urdume_c.t11 + urdume_c.t12
      );

      $("#result_C4").html(trama_c.t1 + trama_c.t2 + trama_c.t3 + trama_c.t4 + trama_c.t5 + trama_c.t6 +
        trama_c.t7 + trama_c.t8 + trama_c.t9 + trama_c.t10 + trama_c.t11 + trama_c.t12
      );

      $("#result_C5").html(bobina_c.t1 + bobina_c.t2 + bobina_c.t3 + bobina_c.t4 + bobina_c.t5 + bobina_c.t6 +
        bobina_c.t7 + bobina_c.t8 + bobina_c.t9 + bobina_c.t10 + bobina_c.t11 + bobina_c.t12
      );

      $("#result_C6").html(mao_c.t1 + mao_c.t2 + mao_c.t3 + mao_c.t4 + mao_c.t5 + mao_c.t6 +
        mao_c.t7 + mao_c.t8 + mao_c.t9 + mao_c.t10 + mao_c.t11 + mao_c.t12
      );

      $("#result_C7").html(outros_c.t1 + outros_c.t2 + outros_c.t3 + outros_c.t4 + outros_c.t5 + outros_c.t6 +
        outros_c.t7 + outros_c.t8 + outros_c.t9 + outros_c.t10 + outros_c.t11 + outros_c.t12
      );

      $("#result_C8").html(tentativas_c.t1 + tentativas_c.t2 + tentativas_c.t3 + tentativas_c.t4 + tentativas_c.t5 + tentativas_c.t6 +
        tentativas_c.t7 + tentativas_c.t8 + tentativas_c.t9 + tentativas_c.t10 + tentativas_c.t11 + tentativas_c.t12
      );
     
  
      var result_a = parseFloat($("#result_A1").html()) / 12;
       var result_b = parseFloat($("#result_B1").html() / 12);
        var result_c = parseFloat($("#result_C1").html() / 12);  //Limitar a quantidade de numeros depois da virgula//
     
         $("#result_A1").html(result_a.toFixed(1));
        $("#result_B1").html(result_b.toFixed(1));
     $("#result_C1").html(result_c.toFixed(1));
    
      
      //  var soma_paradas_A = parseFloat($("#result_A3").html()) + parseFloat($("#result_A4").html()) + parseFloat($("#result_A5").html()) + parseFloat($("#result_A6").html()) + parseFloat($("#result_A7").html());
      //  var soma_paradas_B = parseFloat($("#result_B3").html()) + parseFloat($("#result_B4").html()) + parseFloat($("#result_B5").html()) + parseFloat($("#result_B6").html()) + parseFloat($("#result_B7").html());
      //  var soma_paradas_C = parseFloat($("#result_C3").html()) + parseFloat($("#result_C4").html()) + parseFloat($("#result_C5").html()) + parseFloat($("#result_C6").html()) + parseFloat($("#result_C7").html());

      //  if (soma_paradas_A != $("#result_A2").html()){
      //      alert("A quantidade de paradas da Turma (A) está incorreta");
      //    }  
      //  if (soma_paradas_B != $("#result_B2").html()){
      //      alert("A quantidade de paradas da Turma (B) está incorreta");
      //    }  
      //  if (soma_paradas_C != $("#result_C2").html()){
      //      alert("A quantidade de paradas da Turma (C) está incorreta");
      //    }  
          
    });
  
    //=====PLUGIN=======//   
   function gerenciaTeclaEnter() {
      $(document).ready(function() {
          $('input').keypress(function(e) {
              var code = null;
              code = (e.keyCode ? e.keyCode : e.which);
              return (code === 13) ? false : true;
   
          });
   
          $('input[type=text]').keydown(function(e) {
              // Obter o próximo índice do elemento de entrada de texto
              var next_idx = $('input[type=text]').index(this) + 1;
   
              // Obter o número de elemento de entrada de texto em um documento html
              var tot_idx = $('body').find('input[type=text]').length;
   
              // Entra na tecla no código ASCII
              if (e.keyCode === 13) {
                  if (tot_idx === next_idx)
                      // Vá para o primeiro elemento de texto
                      $('input[type=text]:eq(0)').focus();
                  else
                      // Vá para o elemento de entrada de texto seguinte
                      $('input[type=text]:eq(' + next_idx + ')').focus();
              }
          });
      });
    }

  

});

