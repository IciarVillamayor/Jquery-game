$(function() {
  $(".play").on("click", function() {
    $(".play").hide();
    $("h3").hide();
    
    //let arrayDeCards=["img/moa.gif", "img/gudsmilodon.gif", "img/candado.jpg", "img/candado.jpg", "img/candado.jpg", "img/candado.jpg", "img/candado.jpg", "img/candado.jpg"]

    let i;
    let niveles= [{
        "sorc": "img/moa.gif"
      }, {
        "sorc": "img/gudsmilodon.gif"
      }, {
        "sorc": "img/candado.jpg"
      }, {
        "sorc": "img/candado.jpg"
      }, {
        "sorc": "img/candado.jpg"
      }, {
        "sorc": "img/candado.jpg"
      }, {
        "sorc": "img/candado.jpg"
      }, {
        "sorc": "img/candado.jpg"
      }]
      let links= document.getElementsByTagName("a");
   for(i=0; niveles.length;i++){
       
    img= $("<img>").attr("src", niveles[i].sorc);
   
    $(links[i]).append(img);
   }

  });

    
  
});
