window.addEventListener('load', function(){

    if(window.innerWidth <= 1199){

        document.getElementById("top").style.backgroundColor = "#f9e3e8";
        let burger = document.getElementById("burger");
        let box = document.getElementById("bottom");
        let flag = false;

        burger.addEventListener('click', function(){

            if(flag == false){
                
                box.style.top = "90px";
                document.getElementById("top").style.backgroundColor = "#f3b8c6";
                flag = true;

            }else{

                box.style.top = "-150px";
                document.getElementById("top").style.backgroundColor = "#f9e3e8";
                flag = false;
            }

            console.log(flag);

        });

    }else{

        document.getElementById("top").style.backgroundColor = "transparent";
        let nav = document.getElementById("nav");

        window.addEventListener('scroll', function(){

            if(window.pageYOffset >= 1){

                nav.style.width = "100%";
                nav.style.height = "120px";
                nav.style.backgroundColor = "#ec1d27";
                document.getElementById('logo').style.marginLeft = "100px";
                document.getElementById('navigation').style.marginRight = "100px";
    
            }else{
    
                nav.style.width = "80%";
                nav.style.height = "90px";
                nav.style.backgroundColor = "transparent";
                document.getElementById('logo').style.marginLeft = "0px";
                document.getElementById('navigation').style.marginRight = "0px";
    
            }

        });

    }

});

window.addEventListener('resize', function(){

    if(window.innerWidth <= 1199){

        document.getElementById("top").style.backgroundColor = "#f9e3e8";
        let burger = document.getElementById("burger");
        let box = document.getElementById("bottom");
        let flag = false;
        box.style.top = "-150px";

        burger.addEventListener('click', function(){

            if(flag == false){
                
                box.style.top = "90px";
                document.getElementById("top").style.backgroundColor = "#f3b8c6";
                flag = true;

            }else{

                box.style.top = "-150px";
                document.getElementById("top").style.backgroundColor = "#f9e3e8";
                flag = false;
            }

            console.log(flag);

        });

        let nav = document.getElementById("nav");

        window.addEventListener('scroll', function(){

            if(window.pageYOffset >= 1){

                nav.style.width = "80";
                nav.style.height = "90px";
                nav.style.backgroundColor = "transparent";
                document.getElementById('logo').style.marginLeft = "0px";
                document.getElementById('navigation').style.marginRight = "0px";
    
            }else{
    
                nav.style.width = "80";
                nav.style.height = "90px";
                nav.style.backgroundColor = "transparent";
                document.getElementById('logo').style.marginLeft = "0px";
                document.getElementById('navigation').style.marginRight = "0px";
    
            }

        });

    }else{

        document.getElementById("top").style.backgroundColor = "transparent";
        let nav = document.getElementById("nav");

        window.addEventListener('scroll', function(){

            if(window.pageYOffset >= 1){

                nav.style.width = "100%";
                nav.style.height = "120px";
                nav.style.backgroundColor = "#ec1d27";
                document.getElementById('logo').style.marginLeft = "100px";
                document.getElementById('navigation').style.marginRight = "100px";
    
            }else{
    
                nav.style.width = "80%";
                nav.style.height = "90px";
                nav.style.backgroundColor = "transparent";
                document.getElementById('logo').style.marginLeft = "0px";
                document.getElementById('navigation').style.marginRight = "0px";
    
            }

        });

    }

});
