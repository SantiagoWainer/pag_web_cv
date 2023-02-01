// Creando filtrado de busqueda

function busqueda(){
    let inputValue = document.getElementById("inputSearch").value;
    let palabra = inputValue.toLowerCase();
    if (palabra == 'language' || palabra == 'idioma' || palabra == 'idiomas' || palabra == 'languages' || palabra == 'estudios'|| palabra == 'estudio'|| palabra == 'studies'|| palabra == 'degree') {
        location.href = "\html\studies.html";
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
}

document.getElementById('botonBusqueda').addEventListener('click', busqueda);
    