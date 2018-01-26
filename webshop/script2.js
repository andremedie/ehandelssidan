$(document).ready(function(){
    $.getJSON('kunder.json', function(data){
        customer = data; 
        LoopCustom();
    });
            $.getJSON('produkt.json', function(data){
                    
                products = data;
                fillCart();
                $("#buyBtn").hide();
    });
   
    
    /* Lösenord / inlogg */
    function LoopCustom() {
        
        for(i = 0; i < 4; i++) { 
            $("#custom").append('<h2>'+ "login/email: " +customer[i].email +'</h2>');
            $("#custom").append('<p>' + "password: " +customer[i].password +'</p>');
        }
        
    }
    $("#custom").hide();
    
   
$("#customer").click(function(){
    $("#custom").show();
    });
    /* Början av kundvagn */ 
    
    var products = ""
    var cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    var totalProductsInCart = "";
    var totalPrice = 0;
         
    addCart = function(val) {
        
        
        cartList.push(val);
        
        localStorage.setItem("cartList", JSON.stringify(cartList));
        
        $("#cart").html("")
            $("#cart").append(cartList.length)
        totalProductsInCart++;
        
       
        
        
       
        
    }
        function fillCart() {
        for(var j = 0; j < products.length; j++) {
            for (var h = 0; h < cartList.length; h++) {
                if(cartList[h] == products[j].id) {
                    
                    $('<h3 class="card" style="align-middle width: 5rem;"></h3>')
                    
                    .append('<h2 class="card-title">' + products[j].prodName + '</h2>')
                    
                    .append('<img class="card-img-top" src=' + products[j].miniPic + ' alt="Card image cap"> </img>')

                    .append('<h3 href="#">' + products[j].prodPrice + " SEK" + ' </h3>')
                    
                    .append('</div>')
                    
                    .appendTo($("#prodList"));
                 
                    totalPrice += products[j].prodPrice;
                    
                }
            }
        
        }
        
        $("#clickProduct").append("<p>Total Price in the Cart: " + totalPrice + " SEK + 55 SEK Shipping Fee <button onclick='deleteCart()'>X</button></p>");
        $("#cart").html("")
        $("#cart").append(cartList.length)
        totalProductsInCart++;
    }
    
    
        
    
    
    function LoadCart() {
        var cart = JSON.parse(sessionStorage.getItem("cart"));
        
    }
    
    $("#clickProduct").append("<p>Number of Products in the Cart: " + cartList.length + "</p>");
   
    
});

function deleteCart() {

    localStorage.clear();
    location.reload();
    $("#prodList").empty();
    
}

function buyCart() {
    alert("Thank you! Have a nice day, your package will be delived in 2 days");
    location.reload();
    localStorage.clear();
    $("#prodList").empty();
}

        

