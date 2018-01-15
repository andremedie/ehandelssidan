$(document).ready(function(){
    $.getJSON('huvudkategorier.json', function(data){
    webshop = data;
    LoopHead();
    var json_str = JSON.stringify(webshop);
    sessionStorage.lists = json_str;
    console.log(webshop)
    });

    $.getJSON('underkategorier.json', function(data){
    undercat = data;
    LoopUnder();
    var json_str = JSON.stringify(webshop);
    sessionStorage.lists = json_str;
    console.log(undercat)
    });

    
    function LoopHead() {
        
        for(i = 0; i < 3; i++) { 
            $("#webshop").append('<li><a href="#" class="hcat'+[i]+'">'+webshop[i].category+'</a></li>');
        }
        
    }
    
    function LoopUnder() {
        
        for(i = 0; i < 4; i++) {
            $("#undercat").append('<a href="#" class="text ' + [i] + ' "onclick="">' + undercat[i].name + '    - </a>')
            
        }
    }
}); 
    
    $.getJSON('produkt.json', function(data){
        products = data;
        LoadProducts();
        var json_str = JSON.stringify(webshop);
        sessionStorage.lists = json_str;
        console.log(products)
        
        function LoadProducts() {
            /* for(i = 0; i < 4; i++){
                //$("#product").append('<a href="#" class="product ' + [i] + '">' + products[i].prodName + ' </a>')
                $("#product").append('<div id="product ' + [i] + '">' + products[i].id + ' ')
                $("#product").append('<div id="product ' + [i] + '">' + products[i].prodName + ' ')
                $("#product").append('<div id="product ' + [i] + '">' + products[i].prodDesc + ' ')
                $("#product").append('<div id="product ' + [i] + '">' + products[i].prodPic + ' ')
                $("#product").append('<div id="product ' + [i] + '">' + products[i].prodPrice + ' ')
                console.log("hej"); 
            } */
        }
        
        function LoadWinter() {
            for(i = 0; i < 4; i++){
            $("#product").append('<div id="winter ' + [i] + '">' + products[1].id + ' </div>')
            $("#product").append('<h2 id="winter ' + [i] + '">' + products[1].prodName + ' </h2>')
            $("#product").append('<div id="winter ' + [i] + '">' + products[1].prodDesc + ' </div>')
            $("#product").append('<img id="winter src=' + products[1].prodPic + ' </img>')
            $("#product").append('<div id="winter ' + [i] + '">' + products[1].prodPrice + ' </div>')
            $("").hide();
            }
    
    

        }

        function LoadSpring() {
            for(i = 4; i < 8; i++){
            $("#product").append('<div id="spring ' + [i] + '">' + products[i].id + ' ')
            $("#product").append('<h2 id="spring ' + [i] + '">' + products[i].prodName + ' ')
            $("#product").append('<div id="spring ' + [i] + '">' + products[i].prodDesc + ' ')
            $("#product").append('<img id="spring ' + [i] + '">' + products[i].prodPic + ' ')
            $("#product").append('<div id="spring ' + [i] + '">' + products[i].prodPrice + ' ')

            }
    
    

        }

        function LoadSummer() {
            for(i = 8; i < 12; i++){
            $("#product").append('<div id="summer ' + [i] + '">' + products[i].id + ' ')
            $("#product").append('<h2 id="summer ' + [i] + '">' + products[i].prodName + ' ')
            $("#product").append('<div id="summer ' + [i] + '">' + products[i].prodDesc + ' ')
            $("#product").append('<img id="summer ' + [i] + '">' + products[i].prodPic + ' ')
            $("#product").append('<div id="summer ' + [i] + '">' + products[i].prodPrice + ' ')

            }
    
    

        }

        function LoadAutumn() {
            for(i = 12; i < 16; i++){
            $("#product").append('<div id="autumn ' + [i] + '">' + products[i].id + ' ')
            $("#product").append('<h2 id="autumn ' + [i] + '">' + products[i].prodName + ' ')
            $("#product").append('<div id="autumn ' + [i] + '">' + products[i].prodDesc + ' ')
            $("#product").append('<img id="autumn ' + [i] + '">' + products[i].prodPic + ' ')
            $("#product").append('<div id="autumn ' + [i] + '">' + products[i].prodPrice + ' ')

            }
    
    

        }

        $(".text.0").click(function(){
            $(".text.0").show();
            $(".text.1").hide();
            $(".text.2").hide();
            $(".text.3").hide();
            LoadWinter();

        });
});
        


        
        
        
   /* $('#undercat').click(function(){
        $(".text0").show();
        $(".text1").fadeTo( "slow" , 0.5 );
        $(".text2").fadeTo( "slow" , 0.5 );
        $(".text3").fadeTo( "slow" , 0.5 );
        
        console.log("test");
    }); */








/*var cartCount = document.getElementById("cart");




buttonElement.onclick = function() {
    numberOfProducts ++
    
    cartCount.innerText = numberOfProducts;

}

    productCard.appendChild(buttonElement);

return productCard;



} */