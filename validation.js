
        let list = []
        let name = document.getElementById('name');
        let mail = document.getElementById('mail');
        let pass = document.getElementById('pass');

        let gender   = document.getElementsByName('gender');
        let country  = document.getElementById('country')
        
        let errors = document.getElementById('errors')



        function validate(){
            list = []
            if(pass.value.length < 8){
                list.push("password must be at least 8 character");
            }
            if(name.value.length == "" || mail.value.length == "" || pass.value.length == ""){
                list.push("All fields Required")
            }

            if ( ( gender[0].checked == false ) && ( gender[1].checked == false ) )
            {
                list.push( "Please choose your Gender: Male or Female" );
            }

            if ( country.value == country.options[0].value)
            {
                list.push( "Please choose your country" );
            }
            
            console.log(list);
            errors.innerText = list
            errors.style.color = 'red'
        } 

        btn.addEventListener('click' , validate);
        //validate()

