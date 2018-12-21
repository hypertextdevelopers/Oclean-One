window.addEventListener('load', function(){

    let order_btn = document.getElementById("order");
    let android = document.getElementById("android");
    let ios = document.getElementById("ios");

    order_btn.addEventListener('click', function(){

        window.location.href = "https://sklep.oclean.pl/";

    });

    android.addEventListener('click', function(){

        window.location.href = "https://play.google.com/store/apps/details?id=com.yunding.noopsychebrushforeign";

    });

    ios.addEventListener('click', function(){

        window.location.href = "https://itunes.apple.com/app/id1253819110";

    });

});