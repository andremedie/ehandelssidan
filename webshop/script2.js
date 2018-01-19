$(document).ready(function(){
    $.getJSON('kunder.json', function(data){
        customer = data; 
        LoopCustom();
    });
            $.getJSON('produkt.json', function(data){
                    
                products = data;
});
});
function LoopCustom() {
    
    for(i = 0; i < 3; i++) { 
        $("#custom").append('<p>'+ "login/email: " +customer[i].email +'</p>');
        $("#custom").append('<p>' + "password: " +customer[i].password +'</p>');
    }
    
}
$("#custom").hide();

$("#customer").click(function(){
   $("#custom").show();

});


    //var cart = JSON.parse(localStorage.getItem("cart"));
    var products = "";
    var cartList = [];
    var totalProductsInCart = 0;
    var totalPrice = 0;
    
    
//$(document).ready(function(){
        //loadCart();
        if(localStorage.cartList) cartList = JSON.parse(localStorage.cartList);
        
        addCart = function(val) {
            
            
            cartList.push(val);
            
            localStorage.cartList = JSON.stringify(cartList);
            $("#cart").html("")
            $("#cart").append(cartList.length)
            totalProductsInCart++;
            LoadCart();
        
        
        console.log(addCart);
        
        
        for(var i = 0; i < cartList.length; i++) {
            for(var h = 0; h < products.length; h++){
                
                if(cartList[i] == products[h].id) {
                    $('<h1 class="card" style="align-middle width: 25rem;">' + products[h].id + '</h1>')
                    
                    .append('<h1 class="card-title">' + products[h].prodName + '</h1>')
                    
                    .append('<a href="#">' + products[h].prodPrice + " SEK" + '</a>')
                    .append('</div>')
                    .appendTo($("#prodList"));
                    
                    
                    totalPrice += products[h].prodPrice
                    
                    
                    
                }
            }    
       }
    } 
                    function LoadCart() {
                        
                        for(var h = 0; h < products.length; h++) {
                            for (i = 0; i < cartList.length; i++) {
                                totalProductsInCart++;
                            }
                            if(cartList[i] == products[h].id){ 
                        
                        $('<h1 class="card" style="align-middle width: 25rem;">' + products[h].id + '</h1>')
                        .append('<div class="card-block">')
                        .append('<h1 class="card-title">' + products[h].prodName + '</h1>')
                        .append('</div>')
                        .appendTo($("#prodList"));
                    }
                }
                }
        
        //$("#clickProduct").empty();
        
        $("#clickProduct").append("<p>Antal produkter i varukorgen: " + totalProductsInCart + "</p>");
        $("#clickProduct").append("<p>Totalt pris på varukorgen: " + totalPrice + " kr</p>");
        

    //totalPrice += products[j].prodPrice * cart[i].amount;
    
    //break;
    
    /*totalPrice += 55;
        $(".totPrice").append("<h5>Totalt: " + totalPrice + " kr (Inkl. frakt)</h5>");

        */

