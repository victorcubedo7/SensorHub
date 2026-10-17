console.log("Random_data_charts cargado");

/* =========================================
   GENERACION DATOS
========================================= */

function generarDatos(numPuntos) {

    let datos = [];

    for(let i = 0; i < numPuntos; i++) {

        datos.push(
            Math.floor(40 + Math.random() * 20)
        );
    }

    return datos;
}

/* =========================================
   ETIQUETAS
========================================= */

function generarEtiquetas1h() {

    let etiquetas = [];

    for(let i = 0; i < 60; i++) {
        etiquetas.push(i + "m");
    }

    return etiquetas;
}

function generarEtiquetas12h() {

    let etiquetas = [];

    for(let i = 0; i < 12; i++) {
        etiquetas.push(i + "h");
    }

    return etiquetas;
}

function generarEtiquetas1d() {

    let etiquetas = [];

    for(let i = 0; i < 24; i++) {
        etiquetas.push(i + "h");
    }

    return etiquetas;
}

function generarEtiquetas1s() {

    return [

        "Lun",
      

        "Mar",
        

        "Mie",
     

        "Jue",
        

        "Vie",
       

        "Sab",
       

        "Dom",

    ];
}


/* =========================================
   CREACION GRAFICA
========================================= */

const ctx = document.getElementById("humidityChart");

const humidityChart = new Chart(ctx, {

    type: "line",

    data: {

        labels: generarEtiquetas1h(),

        datasets: [{
            label: "Humedad (%)",
            data: generarDatos(60),

            borderColor: "green",

            backgroundColor: "rgba(0,128,0,0.2)",

            tension: 0.3
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false
    }
});


/* =========================================
   ACTUALIZAR GRAFICA
========================================= */

function actualizarGrafica(etiquetas, numPuntos) {

    humidityChart.data.labels = etiquetas;

    humidityChart.data.datasets[0].data =
        generarDatos(numPuntos);

    humidityChart.update();
}


/* =========================================
   BOTON 1 HORA
========================================= */

document
.getElementById("btn1h")
.addEventListener("click", function() {

    actualizarGrafica(
        generarEtiquetas1h(),
        60
    );

});


/* =========================================
   BOTON 12 HORAS
========================================= */

document
.getElementById("btn12h")
.addEventListener("click", function() {

    actualizarGrafica(
        generarEtiquetas12h(),
        12
    );

});


/* =========================================
   BOTON 1 DIA
========================================= */

document
.getElementById("btn1d")
.addEventListener("click", function() {

    actualizarGrafica(
        generarEtiquetas1d(),
        24
    );

});


/* =========================================
   BOTON 1 SEMANA
========================================= */

document
.getElementById("btn1s")
.addEventListener("click", function() {

    actualizarGrafica(
        generarEtiquetas1s(),
        7
    );

});

