// const cargar = (document.querySelector("body").onload = function() {
//     const p1 = leerestudiantes();
// });

const load = document.querySelector("#contenido1");

// function leerlista(url){
//     const url = "/Tareas/retos/APIFetch/estudiantes.json"
//     const lista = fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             return data})
// }

// function leerestudiantes(){
//     //var contenido1=document.querySelector("#contenido1");
//     fetch("/Tareas/retos/APIFetch/estudiantes1.json")
//         .then(res => res.json())
//         .then(data => {
//             data.forEach(dato => {
//                 console.log(dato)
//                 const col = document.createElement("tr");
//                 col.innerHTML+=`<td>${dato.estudiantes.alumno}</td>`;
//                 load.appendChild(col)
//             });
            

            


//             // var cedula =
//             //     `<p>Cedula: ${data.estudiantes["0"].alumno.cedula}</p>`;
//             // var nombre =
//             //     `<h2 class='name'>Nombre: ${data.estudiantes["1"].alumno.nombre}</h2>`;
//             // var asignatura =
//             //     `<p>Asignatura: ${data.estudiantes["1"].alumno.asignaturas["2"]}</p>`;
//             // var programa =
//             // `<p>Programa: ${data.estudiantes["1"].alumno.programa}</p>`;
            
//             // var foto =
//             //     `<img src= ${data.estudiantes["1"].alumno.foto}alt='Foto' width='250px' class ='img-fluid rounded-circle'>`;
        
//             //contenido1.innerHTML = cedula + nombre + asignatura + programa + foto;
//         });
// }
// leerestudiantes();

function carga1(){
    console.log(fetch("estudiantes.json"));
    fetch("estudiantes.json")
        .then(res => res.json())
        // .then(estudiantes => {
        //     estudiantes.forEach(lista => {
        //         console.log(lista)
        //         const dato = document.createElement("tr");
        //         dato.innerHTML += `<td> ${lista.estudiantes.}</td>` ;
        //         load.appendChild(dato)
        //     });
        // })
        .then(data => {
            console.log(data)
            
            var cedula =`<p>Cedula: ${data.estudiantes["1"].alumno.cedula}</p>`;
            var nombre =`<h2 class='name'>Nombre: ${data.estudiantes["1"].alumno.nombre}</h2>`;
            var asignatura =`<p>Asignatura: ${data.estudiantes["1"].alumno.asignaturas["2"]}</p>`;
            var programa =`<p>Programa: ${data.estudiantes["1"].alumno.programa}</p>`;
            var foto =`<img src= ${data.estudiantes["1"].alumno.foto}alt='Foto' width='250px' class ='img-fluid rounded-circle'>`;
        
            contenido1.innerHTML = cedula + nombre + asignatura + programa + foto;
        });

}


carga1();
