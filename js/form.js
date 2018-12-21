window.addEventListener('load', function(){

    let form_button = document.getElementById("form_btn");
    let form_box = document.getElementById('form');
    let success = document.getElementById('success');

    form_button.addEventListener('click', function(){

        let email_box = document.getElementById('mail');
        let name_box = document.getElementById('name');
        let last_name_box = document.getElementById('last_name');
        let topic_box = document.getElementById('topic');
        let message_box = document.getElementById('message');

        if(email_box.value == ""){

            email_box.style.border = "2px solid #dc3545";
            email_box.style.transition = "all .1s linear";

        }else{

            email_box.style.border = "2px solid #ffffff";
            email_box.style.transition = "all .1s linear";

        }

        if(name_box.value == ""){

            name_box.style.border = "2px solid #dc3545";
            name_box.style.transition = "all .1s linear";

        }else{

            name_box.style.border = "2px solid #ffffff";
            name_box.style.transition = "all .1s linear";

        }

        if(last_name_box.value == ""){

            last_name_box.style.border = "2px solid #dc3545";
            last_name_box.style.transition = "all .1s linear";

        }else{

            last_name_box.style.border = "2px solid #ffffff";
            last_name_box.style.transition = "all .1s linear";

        }

        if(topic_box.value == ""){

            topic_box.style.border = "2px solid #dc3545";
            topic_box.style.transition = "all .1s linear";

        }else{

            topic_box.style.border = "2px solid #ffffff";
            topic_box.style.transition = "all .1s linear";

        }

        if(message_box.value == ""){

            message_box.style.border = "2px solid #dc3545";
            message_box.style.transition = "all .1s linear";

        }else{

            message_box.style.border = "2px solid #ffffff";
            message_box.style.transition = "all .1s linear";

        }

        if(email_box.value !== "" && name_box.value !== "" && last_name_box.value !== "" && topic_box.value !== "" && message_box.value !== ""){

            $.ajax({

                type: "GET",
                data: {mail: email_box.value, name: name_box.value, last_name: last_name_box.value, topic: topic_box.value, message: message_box.value},
                url: 'php/mail.php',
                success: function(res){

                    form_box.style.opacity = "0";
                    form_box.style.visibility = "hidden";
                    form_box.style.traintion= "all .1s linear";

                    success.style.opacity = "1";
                    success.style.visibility = "visible";

                }

            });

        }

    });

});