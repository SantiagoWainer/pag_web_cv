// Creando filtrado de busqueda

function busqueda(){
    // Tomo el valor
    let inputValue = document.getElementById("inputSearch").value;

    // La paso a minuscula
    let palabra = inputValue.toLowerCase();

    // Genero la condición


     
    if (palabra == 'language' || palabra == 'idioma' || palabra == 'idiomas' || palabra == 'languages' || palabra == 'estudios'|| palabra == 'estudio'|| palabra == 'studies'|| palabra == 'degree') {
        window.location.href = 'html\studies.html';
    }
    if (palabra == 'curriculum' || palabra == 'cv') {
        location.href = "\html\myself.html";
    }
    if (palabra == 'career' || palabra == 'conocimiento' || palabra == 'knowledge' || palabra == 'carrera' || palabra == 'cursos'|| palabra == 'curso'|| palabra == 'courses') {
        location.href = "\html\courses.html";
    } 
    if (palabra == 'contacto' || palabra == 'contact') {
        location.href = "\html\contact.html";
    }
    
    // while (palabra == 'language' || palabra == 'idioma' || palabra == 'idiomas' || palabra == 'languages' || palabra == 'estudios'|| palabra == 'estudio'|| palabra == 'studies'|| palabra == 'degree') {
    //     window.location.href = 'https://santiwainer.wixsite.com/travellingdotcom';
    // }   
}

document.getElementById('botonBusqueda').addEventListener('click', busqueda);
    