//Validar formulario

const inputs = document.querySelectorAll('form .campo input');

//Agregar Listener a los inputs

inputs.forEach(input =>{
    input.addEventListener('blur', validarInput);
});

inputs.forEach(input =>{
    input.addEventListener('input', validarInput);
});

function validarInput(e){
    const estado = ['valido', 'no-valido'];

    let clase;
    

    if(e.target.value.length === 0){
        clase = estado[1];
        console.log(clase);
    }else{
        clase = estado[0];
    }
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //Inyectar contenido html en el error   

    if(clase === 'no-valido'){
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            const errorDiv = document.createElement('DIV');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');

            //Insertando el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
        
    }else{
        //Limpiar mensaje de error

        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

//Mostrar y ocultar passwords

const mostrarPassowrdBtn = document.querySelector('form .campo span');
mostrarPassowrdBtn.addEventListener('click', e=>{
    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')){
        //Mostrar el texto
        e.target.classList.remove('mostrar');
        //Cambiar el texto
        e.target.textContent = 'Ocultar';

        //Cambiamos al type password
        passwordInput.type = 'text';
    }else{
        //Mostrar el password
        e.target.classList.add('mostrar');

        //Cambiar el texto
        e.target.textContent = 'Mostrar';

        //Cambiamos al type password
        passwordInput.type = 'password';


    }
});