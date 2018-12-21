window.addEventListener('load', function(){

    let burger = document.getElementById("burger");
    let box = document.getElementById("bottom");
    let flag = false;

    burger.addEventListener('click', function(){

        if(flag == false){
            
            box.style.top = "90px";
            flag = true;

        }else{

            box.style.top = "-60px";
            flag = false;
        }

        console.log(flag);

    });

});