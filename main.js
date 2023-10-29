function calcular(valor) {
    let resultado=document.getElementById("r").value*document.getElementById("angulo").value*Math.PI/180;
    document.getElementById("resultado").innerText="="+resultado.toFixed(2);
}
let angulo=document.getElementById("angulo").value+"deg";


