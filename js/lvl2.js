$(function() {
  nivelDos();

  //CREACIÓN ALEATORIA DE ROCAS
    function rocas() {
        let i;
        $(".floor").append("<img id='rock2' class='roca'>");
        $("#rock2").attr("src", "img/rock2.png");
        //PIEDRA 3
        $(".floor").append("<img id='rock3' class='roca'>");
        $("#rock3").attr("src", "img/rock3.png");
        // PIEDRA 4
        $(".floor").append("<img id='rock4' class='roca'>");
        $("#rock4").attr("src", "img/rock4.png");
      
        for (i = 0; i <= 4; i++) {
          let leftDeRocas = Math.floor(Math.random() * 10018) + 500;
          $("#rock" + i).css("left", leftDeRocas);
        }
      }
      rocas();
      

function nivelDos() {

    $("#gameover").hide();
    $("#youWon").hide();

  //PARA QUE CUANDO PULSES LA TECLA EL TIGRE SUBA
    function keyCode(event) {
      key = event.keyCode;
      let move = 0;

      if (key == 38) {
        move --;
        $("#smilo").animate({
          top: move + "px"
        });
      }
      choqueRoca();
      choqueBandera();
    }

    //PARA QUE CUANDO SUELTES LA TECLA EL TIGRE BAJE
    function keyCodeDown(event) {
      let move = 0;
      key = event.keyCode;
      if (key == 38) {
        move += 273;
        $("#smilo").animate({
          top: move + "px"
        });
      }

      for (i = 0; i < $(".roca").length; i++) {
        if (collision($("#jugador2"), $(".roca").eq(i))) {
          break;
        }
      }
    }

    $("body").keydown(keyCode);
    $("body").keyup(keyCodeDown);

    choqueRoca();
    choqueBandera();

    //CUANDO LE DAS AL REINTENTAR TE DEVUELVE AL NIVEL
    $("#restart").on("click", function() {
      location.reload();
    });

    //COLLISION CON ROCA

    function choqueRoca() {
      for (i = 0; i < $(".roca").length; i++) {
        if (collision($("#jugador2"), $(".roca").eq(i))) {
          break;
        }
      }
    }

    //COLLISION CON BANDERA
    function choqueBandera() {
      for (i = 0; i < $(".obstacle").length; i++) {
        if (collision($("#jugador2"), $(".obstacle").eq(i))) {
          break;
        }
      }
    }

    //COLLISION DETECTION

    //EL COLLISION DETECTION SOLO FUNCIONA SI EL 
    //PAJARO SALTA MIENTRAS TOCA EL DIV DE LA ROCA
    //NO HE PODIDO CAMBIARLO

    function collision($div1, $div2) {
      var x1 = $div1.offset().left; //punto izquierda del parametro 1
      var y1 = $div1.offset().top; //punto arriba
      var h1 = $div1.outerHeight(true); //altura
      var w1 = $div1.outerWidth(true); //anchura
      var b1 = y1 + h1; //punto abajo
      var r1 = x1 + w1; //punto derecha

      var x2 = $div2.offset().left; //punto izquierda del parametro 2
      var y2 = $div2.offset().top; //punto arriba
      var h2 = $div2.outerHeight(true); //altura
      var w2 = $div2.outerWidth(true); //anchura
      var b2 = y2 + h2; //punto abajo
      var r2 = x2 + w2; //punto derecha

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      else {
        gameOver();
      }
    }

    //LO QUE SUCEDE CUANDO TOCA UNA ROCA.

    function gameOver() {
      $("#gameover").show();
      $("#floor").hide();
      $("#smilo").hide();
      $(".floor").hide();
      $("body").css("backgroundColor", "black");
    }

    //MOVIMIENTO DE SUELO
    function moverSuelo() {
      $(".floor").animate({ marginLeft: "-90000px" }, 150000, "linear");
    }
    moverSuelo();
    
  }

  //NO HE PODIDO HACER UN COLLISION DISTINTO PARA LA BANDERA
  //ASÍ QUE HE METIDO ESTE INTERVAL PARA QUE VEAS COMO SERÍA
  setInterval(winning, 18000);
   
  //CUANDO LLEGAS AL FINAL

  function winning(){
      $("#youWon").show();
      $("#floor").hide();
      $("#smilo").hide();
      $(".floor").hide();
      
      $("body").css("backgroundColor", "#eee");
  }
  
  //PARA OBTENER LA TARJETA DEL ANIMAL
  $("#card").on("click", function(){
    $(this).hide();
    $("h3").hide();
    $("#youWon").append("<div class='smilocard'></div>");
    $(".smilocard").append("<img class='cardimg'>");
    $(".cardimg").attr("src", "img/gudsmilodon.gif");
    $(".smilocard").append("<p></p>");
    $(".smilocard").append("<a class='nextlevel' href='../inicio.html'>continuar");
    $("p").html("El smilodon fue uno de los animales prehistóricos más conocidos debido a sus enormes caninos. Vivió en América del Norte durante el período Pleistoceno, pero toda su población murió hace 10.000 años, hacia el final de la última Edad de Hielo")

  })
});