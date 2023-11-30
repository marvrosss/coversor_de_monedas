/* DOM */
const ingreseMonto = document.getElementById("input");
const seleccionar = document.getElementById("monedas");
const resultado = document.getElementById("resultado");
const buscar =document.getElementById("boton");
const apiMonedas = "https://mindicador.cl/api/";
let grafico = "";

async function getMonedas(){
    const res = await fetch(apiMonedas)
    const dataMonedas = await res.json()
    return dataMonedas;
}

async function resolver(){
    try {
        const divisa = await getMonedas();
        const dolar = Number(divisa.dolar.valor);
        const euro = Number(divisa.euro.valor);
        
        buscar.addEventListener("click",() => {
            if(seleccionar.value == "dolar"){
                let valorDolar = monto.value / dolar;
                resultado.innerHTML = `${valorDolar.toFixed(2)} USD`;
                renderDolar()

            } else if (seleccionar.value == "euro"){
                let valorEuro = monto.value / euro;
                resultado.innerHTML = `${valorEuro.toFixed(2)}EUR`
                renderEuro()
            } else 
                resultado.innerHTML = "Escoge una moneda"
                grafico.destroy()
            console.log(dolar,euro);

        })
    } catch (error) {
        alert("Ha ocurrido un error: "+error);
    }
}
resolver()