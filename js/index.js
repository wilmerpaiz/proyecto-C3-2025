var nombre = 'Pablo'  //Ya no se utiliza la palabra var para crear variables
let edad = 38; //Es la forma actual de crear varaibles
const PI = 3.14; //El valor inicial de una constante no puede ser modificado

let imc = 0;
function validarFormularioImc(){
    let error = false;
    let inputPeso = document.getElementById('txtPeso');
    let inputEstatura = document.getElementById('txtEstatura');

    if (inputPeso.value == ""){
        error = true;
        inputPeso.classList.add('input-error');
    }else{
        inputPeso.classList.remove('input-error');
    }
    
    if (inputEstatura.value == ""){
        error = true;
        inputEstatura.classList.add('input-error');
    }else{
        inputEstatura.classList.remove('input-error');
    }

    if (error== true){
        Swal.fire({
            'title': 'No se puede realizar el cálculo',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    }else{
        calcularImc();
    }
}

function calcularImc(){
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso/Math.pow(estatura, 2);
    document.getElementById("txtImc").value = imc.toFixed(2);

    let clasificacion = clasificarImc();

    document.getElementById("txtClasificacion").value=clasificacion;
}

document.getElementById("btnCalcularImc").addEventListener('click', validarFormularioImc);


function clasificarImc(){
    let clasificacionImc = '';
    if(imc < 18.5){
        clasificacionImc = 'Bajo de peso'}
    else{
        if(imc >= 18.5 && imc < 24.9){
            clasificacionImc = 'Normal';}
        else{
            if(imc >= 24.9 && imc < 29.9){
                clasificacionImc = 'Sobrepeso';}
            else{
                clasificacionImc = 'Obesidad'
        }
    }
}
return clasificacionImc;
}




function calcularArea(){
    let opcion = document.getElementById("sltFigura").value;
    let area = 0;

    //valores de prueba
    let lado = document.getElementById("txtLado").value;
    let base = document.getElementById("txtBase").value;
    let altura = document.getElementById("txtAltura").value;
    let radio = document.getElementById("txtRadio").value;
    
    switch(opcion){
        case "1":
            area = lado * lado;
        break;
        
        case "2":
            area = base * altura;
        break;
        
        case "3":
            area = Math.PI * Math.pow(radio,2);
        break;
}
document.getElementById("txtArea").value = area;
}

document.getElementById("btnCalcularArea").addEventListener('click', calcularArea);