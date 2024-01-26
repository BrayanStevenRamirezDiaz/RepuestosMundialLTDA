let empleados = [{
    tipodoc: "CC",
    documento: 1000129971,
    nombres: "Santiago",
    apellidos: "Henao Otalora",
    genero: "Masculino",
    fechanacimiento: "06/01/2003",
    area: 1,
    cargo: 1,
    salario: 10000000,
    correo: "sanhenao061@gmail.com",
    contacto: 3167982313,
    estado: "ACTIVO",
    }, 
    {
        tipodoc: "CC",
        documento: 1193549423,
        nombres: "Brayan Steven",
        apellidos: "Ramirez Diaz",
        genero: "Masculino",
        fechanacimiento: "17/07/2002",
        area: 2,
        cargo: 1,
        salario: 1000000,
        correo: "brayanstevenramirezdiaz@gmail.com",
        contacto: 3204551232,
        estado: "ACTIVO",
}];

let area = [{
    codigo: 1,
    descripcion: "jefe supremo",
    estado: "ACTIVO",
    },
    {
    codigo: 2,
    descripcion: "asistente de jefe supremo",
    estado: "ACTIVO",
}];

let cargo = [{
    codigo: 11,
    descripcion: "desarrollador",
    estado: "ACTIVO",
    },
    {
    codigo: 22,
    descripcion: "asistente de desarrollador",
    estado: "ACTIVO",
}];








function mostrarventanagrande(){
    document.getElementById("ventana").style.display = "block";
}

function cerrarventanagrande(){
    document.getElementById("ventana").style.display = "none";
}


function mostrarventanagrande1(){
    document.getElementById("ventana1").style.display = "block";
}
function cerrarventanagrande1(){
    document.getElementById("ventana1").style.display = "none";
}

function mostrarventanagrande2(){
    document.getElementById("ventana2").style.display = "block";
}
function cerrarventanagrande2(){
    document.getElementById("ventana2").style.display = "none";
}

function mostrarboton1(){
    document.getElementById("boton1").style.display = "block";
}
function cerrarboton1(){
    document.getElementById("boton1").style.display = "none";
}

function mostrarboton2(){
    document.getElementById("boton2").style.display = "block";
}
function cerrarboton2(){
    document.getElementById("boton2").style.display = "none";
}

function mostrarboton3(){
    document.getElementById("boton3").style.display = "block";
}
function cerrarboton3(){
    document.getElementById("boton3").style.display = "none";
}

function mostrarbuscardocumento(){
    document.getElementById("busquedadocumento").style.display = "block";
}

function cerrarbuscardocumento(){
    document.getElementById("busquedadocumento").style.display = "none";
}

function mostrarbuscarnombre(){
    document.getElementById("busquedanombre").style.display = "block";
}

function cerrarbuscarnombre(){
    document.getElementById("busquedanombre").style.display = "none";
}

function mostrarbuscarcorreo(){
    document.getElementById("busquedacorreo").style.display = "block";
}

function cerrarbuscarcorreo(){
    document.getElementById("busquedacorreo").style.display = "none";
}

function mostrarbuscarcontacto(){
    document.getElementById("busquedacontacto").style.display = "block";
}

function cerrarbuscarcontacto(){
    document.getElementById("busquedacontacto").style.display = "none";
}

function experimento(){
    let elemento = document.getElementById("mover");
    let elemento1 = document.getElementById("mover1");
    elemento.style.flexDirection="row";
    elemento.style.justifyContent="space-around";
    elemento.style.alignItems="center";
    elemento1.style.marginTop="40px";
}

function experimento1(){
    let elemento1 = document.getElementById("mover1");
    elemento1.style.marginTop="0px";
}
function experimento2(){
    let elemento2 = document.getElementById("busquedadocumento");
    let elemento3 = document.getElementById("busquedanombre");
    let elemento4 = document.getElementById("busquedacorreo");
    let elemento5 = document.getElementById("busquedacontacto");

    elemento2.style.display="flex";
    elemento2.style.justifyContent="center";
    elemento2.style.alignItems="center";
    elemento3.style.display="flex";
    elemento3.style.justifyContent="center";
    elemento3.style.alignItems="center";
    elemento4.style.display="flex";
    elemento4.style.justifyContent="center";
    elemento4.style.alignItems="center";
    elemento5.style.display="flex";
    elemento5.style.justifyContent="center";
    elemento5.style.alignItems="center";
}

function agregar() {
    let tipodoc1=  document.getElementById("tipodoc").value;
    let documento1= document.getElementById("documento").value;
    let nombre1= document.getElementById("nombres").value;
    let apellido1= document.getElementById("apellidos").value;
    let genero1= document.getElementById("genero").value;
    let nacimiento1= document.getElementById("nacimiento").value;
    let area1= document.getElementById("area").value;
    let cargo1= document.getElementById("cargo").value;
    let salario1= document.getElementById("salario").value;
    let correo1= document.getElementById("correo").value;
    let contacto1= document.getElementById("contacto").value;
    let activo1= document.getElementById("estado").value;

    nuevoempleado={
        tipodoc: "CC",
        documento: 1193549423,
        nombres: "Brayan Steven",
        apellidos: "Ramirez Diaz",
        genero: "Masculino",
        fechanacimiento: "17/07/2002",
        area: 2,
        cargo: 1,
        salario: 1000000,
        correo: "brayanstevenramirezdiaz@gmail.com",
        contacto: 3204551232,
        estado: "ACTIVO",
    };

    nuevoempleado.tipodoc= tipodoc1;
    nuevoempleado.documento=documento1;
    nuevoempleado.documento = parseInt(nuevoempleado.documento);
    nuevoempleado.nombres = nombre1;
    nuevoempleado.apellidos =apellido1;
    nuevoempleado.genero= genero1;
    nuevoempleado.fechanacimiento= nacimiento1;
    nuevoempleado.area= area1;
    nuevoempleado.area = parseInt(nuevoempleado.area);
    nuevoempleado.cargo= cargo1;
    nuevoempleado.cargo = parseInt(nuevoempleado.cargo);
    nuevoempleado.salario= salario1;
    nuevoempleado.salario = parseInt(nuevoempleado.salario);
    nuevoempleado.correo= correo1;
    nuevoempleado.contacto= contacto1;
    nuevoempleado.contacto = parseInt(nuevoempleado.contacto);    
    nuevoempleado.estado=activo1;

    empleados.push(nuevoempleado);

    alert("Informacion guardada de manera exitosa")
    
}

function consxdocu() {
    let documento = document.getElementById("buscardocumento").value;
    let numero = Number(documento);
    let existe = empleados.find(x=> x.documento === numero );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero}`);
    }
    else{
        listas1.innerHTML += ("La persona no existe");
    }
}

function consxnom() {
    let nombre= document.getElementById("nombres").value;
    nombre=nombre.toUpperCase();
    let existe = empleados.find(x=> x.nombres.toUpperCase() === nombre );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    
    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero}`);
    }
    else{
        listas1.innerHTML += ("La persona no existe");
    }
}

function consxcorreo() {
    let correo= document.getElementById("correo").value;
    correo=correo.toUpperCase();
    let existe = empleados.find(x=> x.correo.toUpperCase() === correo );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    
    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero}`);
    }
    else{
        listas1.innerHTML += ("La persona no existe");
    }
}

function consxcontacto() {
    let contacto= document.getElementById("contacto").value;
    let numero1 = Number(contacto);
    let existe = empleados.find(x=> x.contacto === numero1 );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";

    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero}`);
    }
    else{
        listas1.innerHTML += ("La persona no existe");
    }
}

