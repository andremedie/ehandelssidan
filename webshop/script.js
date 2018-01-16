$(document).ready(function(){
    $.getJSON('huvudkategorier.json', function(data){
        webshop = data; 
        LoopHead();
        $.getJSON('underkategorier.json', function(data){
            undercat = data;
            $.getJSON('produkt.json', function(data){
                products = data;
                LoopUnder();
            });

        });
    });





    /*$.getJSON('huvudkategorier.json', function(data){
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
    });*/

    
    function LoopHead() {
        
        for(i = 0; i < 3; i++) { 
            $("#webshop").append('<p><a href="#" class="hcat'+[i]+'">'+webshop[i].category+'</a></p>');
        }
        
    }
    
    function LoopUnder() {
        var html = '<h1>Choose your Clothing:</h1>';
        for(var i = 0; i < undercat.length; i++) {
            html += '<div class="col-md-3">';
            html += '<h3 onclick="visaProdukter('+undercat[i].id+')">'+undercat[i].name+'</h3><ul>';
            for(var j = 0; j < products.length; j++) {
                if(undercat[i].id == products[j].underKat) html += '<li onclick="visaProdukt('+products[j].id+')">'+products[j].prodName+'</li>';
            }
            html += '</ul></div>';
        }
        $('#subcategories').html(html);
/*
                        
                            
                            
                                
                                <li onclick="visaProdukt(x)">Produkt</li>
                                <li onclick="visaProdukt(x)">Produkt</li>
                                <li onclick="visaProdukt(x)">Produkt</li>
                            
                        
*/

        /*for(i = 0; i < 4; i++) {
            $("#undercat").append('<a href="#" id="' + undercat[i].id + '">' + undercat[i].name + '    - </a>')
            console.log(LoopUnder);
            
        }

        
        $("#undercat").on("click", "a", function(){ switch (Number(this.id)) {
            case 1:
            LoadWinter();
            break;
            case 2:
            LoadSpring();
            break;
            case 3:
            LoadSummer();
            break;
            case 4:
            LoadAutumn();
            break;
            console.log(this.id);

        }
        });*/
    }
    
    $.getJSON('produkt.json', function(data){
        
        
        products = data;
        LoadProducts();
        var json_str = JSON.stringify(webshop);
        sessionStorage.lists = json_str;
        console.log(products)
        
        function LoadProducts() {
            for(i = 0; i < 4; i++){
                /*var products = products;
                if (products < 4) { */
                    
                    $("#product").append('<div> <a href="#" id="text ' + [i] + '">' + products[i].prodName + '   </a></div>')

                    
                }
                for(i = 4; i < 8; i++){
                    /*var products = products;
                    if (products < 4) { */
                        
                        $("#product").append('<a href="#" id="text ' + [i] + '">' + products[i].prodName + '   </a>')
    
                        
                    }
            }
            

        });
        
    }); 
    
    
    function visaProdukter(nr) {
        $("#clothing").empty();
    if (nr==1) {
        LoadWinter();}

        if (nr==2) {
            
            LoadSpring();}

            if (nr==3) {
              
                LoadSummer();}
    
            
        if (nr==4) {
           
            LoadAutumn();}
        
    }
    
    function visaProdukt(nr) {
       var i;
       nr = nr - 1;
       $("#clothing").empty();
    switch (nr)
    {
    }
        
    $('<h1 class="card" style="align-middle width: 40rem;">' + products[nr].id + '</h1>')
        .append('<img class="card-img-top" src=' + products[nr].prodPic + ' alt="Card image cap"> </img>')
        .append('<div class="card-block">')
        .append('<h1 class="card-title">' + products[nr].prodName + '</h1>')
        .append('<p class="card-text">' + products[nr].prodDesc + '</p>')
        .append('<a href="#" class="btn btn-primary">' + products[nr].prodPrice + " SEK" + '</a>')
        .append('</div> </div>')
        .appendTo($("#clothing"));
    }

    function LoadWinter() {
        $("#clothing").empty();
        for(i = 0; i < 4; i++){
          
                $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
                    .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
                    .append('<div class="card-block">')
                    .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
                    .append('<p class="card-text">' + products[i].prodDesc + '</p>')
                    .append('<a href="#" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
                    .append('</div> </div>')
                .appendTo($("#clothing"));
              
        }
        
        
        
    }
    
    function LoadSpring() {
        $("#clothing").empty();
        for(i = 4; i < 8; i++){
            $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
            .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
            .append('<div class="card-block">')
            .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
            .append('<p class="card-text">' + products[i].prodDesc + '</p>')
            .append('<a href="#" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
            .append('</div> </div>')
        .appendTo($("#clothing"));
            
        }
        
        
        
    }
    
    function LoadSummer() {
        $("#clothing").empty();
        for(i = 8; i < 12; i++){
            $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
            .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
            .append('<div class="card-block">')
            .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
            .append('<p class="card-text">' + products[i].prodDesc + '</p>')
            .append('<a href="#" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
            .append('</div> </div>')
        .appendTo($("#clothing"));
            
        }
        
        
        
    }
    
    function LoadAutumn() {
        $("#clothing").empty();
        for(i = 12; i < 16; i++){
            $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
            .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
            .append('<div class="card-block">')
            .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
            .append('<p class="card-text">' + products[i].prodDesc + '</p>')
            .append('<a href="#" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
            .append('</div> </div>')
        .appendTo($("#clothing"));
            
        }
        
        
        
    }
    /* $('#undercat').click(function(){
        $(".text0").show();
        $(".text1").fadeTo( "slow" , 0.5 );
        $(".text2").fadeTo( "slow" , 0.5 );
        $(".text3").fadeTo( "slow" , 0.5 );
        
        console.log("test");
    }); */








/* var cartCount = document.getElementById("#cart");




buttonElement.onclick = function() {
    numberOfProducts ++
    
    cartCount.innerText = numberOfProducts;

}

    productCard.appendChild(buttonElement);

return productCard;



} */

