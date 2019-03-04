$(function() {
  nivelUno();

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

    function nivelUno() {
      $("#gameover").hide();
      $("#youWon").hide();

      //PARA QUE CUANDO PULSES LA TECLA EL PAJARO SUBA
      function keyCode(event) {
        key = event.keyCode;
        let move = 0;

        if (key == 38) {
          move--;
          $("#moa").animate({
            top: move + "px"
          });
        }
        choqueRoca();
        choqueBandera();
      }

      //PARA QUE CUANDO SUELTES LA TECLA EL PAJARO BAJE

      function keyCodeDown(event) {
        let move = 0;
        key = event.keyCode;
        if (key == 38) {
          move += 200;
          $("#moa").animate({
            top: move + "px"
          });
        }

        for (i = 0; i < $(".roca").length; i++) {
          if (collision($("#jugador"), $(".roca").eq(i))) {
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
          if (collision($("#jugador"), $(".roca").eq(i))) {
            break;
          }
        }
      }

      //COLLISION CON BANDERA
      function choqueBandera() {
        for (i = 0; i < $(".obstacle").length; i++) {
          if (collision($("#jugador"), $(".obstacle").eq(i))) {
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
        $("#moa").hide();
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
        $("#moa").hide();
        $(".floor").hide();
        
        $("body").css("backgroundColor", "#eee");
    }
//PARA OBTENER LA TARJETA DEL ANIMAL
    $("#card").on("click", function(){
      $(this).hide();
      $("h3").hide();
      $("#youWon").append("<div class='moacard'></div>");
      $(".moacard").append("<img class='cardimg'>");
      $(".cardimg").attr("src", "img/moa.gif");
      $(".moacard").append("<p></p>");
      $(".moacard").append("<a class='nextlevel' href='../lvl2.html'>continuar");
      $("p").html("El moa fue un ave no voladora que habitaba en Nueva Zelanda. Su tamaño variaba desde el de un gallo hasta llegar a medir 3 metros de altura. Se extinguió en el año 1400 debido a la caza intensiva de la población de la zona.")

    })
});

/* ======= CODIGO DESECHADO ======== */

/* PAJARO MOVIENDO LAS PATITAS*/

/*let moa = [];
  let i = 0;
  function playerstart() {
    

    moa[0] = new Image();
    moa[0].src = "moa1_aversi.png";
    moa[1] = new Image();
    moa[1].src = "moa2_aversi.png";
    document.getElementById("jugador").src = moa[i].src;
    i++;
    if (i == moa.length) {
      i = 0;
    }
    setTimeout(function() {
      playerstart();
    }, 140);

    
  };

  setInterval(playerstart(), 1000);*/



/*GENERACIÓN DE ROCAS ALEATORIAMENTE*/



//      FUNCION DEL NIVEL 1

/*function youWin() {
    $("#youWon").show()
    $("#floor").hide()
    $("#moa").hide()
    $(".floor").hide()
    $("body").css("backgroundColor","#eee")
  }*/

/*function aVerSiAsi(){
      if(choqueRoca()){
          gameOver();
          console.log("hola");
      }
      else{
          youWin();
          console.log("adios");
      }
  }*/

/*function collision($div1, $div2) {
   
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2; 
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)   return false ;
    
    }*/

/*function collision (element1, element2) {
        var Element1 = {};
        var Element2 = {};
    
        Element1.top = $(element1).offset().top;
        Element1.left = $(element1).offset().left;
        Element1.right = Number($(element1).offset().left) + Number($(element1).width());
        Element1.bottom = Number($(element1).offset().top) + Number($(element1).height());
    
        Element2.top = $(element2).offset().top;
        Element2.left = $(element2).offset().left;
        Element2.right = Number($(element2).offset().left) + Number($(element2).width());
        Element2.bottom = Number($(element2).offset().top) + Number($(element2).height());
    
        if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {
            alert("holas");
        }
    }*/

/*function collision($div1, $div2) {
        let x1 = $div1.offset().left;
        let y1 = $div1.offset().top;
        let x2 = $div2.offset().left;
        let y2 = $div2.offset().top;
        if ((y1 + $div1.outerHeight(true)) < y2 ||
            y1 > (y2 + $div2.outerHeight(true)) ||
            (x1 + $div1.outerWidth(true)) < x2  ||
            x1 > (x2 + $div2.outerWidth(true)))
            return false;
        return true;
    }
    
    function getPositions(box) {
        console.log("eejcutado");
        var $box = $(box);
        var pos = $box.position();
        var width = $box.width();
        var height = $box.height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
        
      }
              
      function comparePositions(p1, p2) {
        var x1 = p1[0] < p2[0] ? p1 : p2;
        var x2 = p1[0] < p2[0] ? p2 : p1;
        return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
        
      }
      
      function checkCollisions(){
        var box = $("#bandera");
        var pos = getPositions(box);
      
        var pos2 = getPositions(this);
        var horizontalMatch = comparePositions(pos[0], pos2[0]);
        var verticalMatch = comparePositions(pos[1], pos2[1]);            
        var match = horizontalMatch && verticalMatch;
        if (match) { alert("HEYY"); }

       
      }

        /*if($(".collider").collision("#rock1")){
    alert("yup");
    console.log("hola");
    
};*/
/*let final= $("#floor").css("","");
  if(final=="100px"){
      $(".floor").finish();
  }*/

//MOVIMIENTO DE SUELO
