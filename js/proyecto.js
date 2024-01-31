
let empleados = [{
    tipodoc: "CC",
    documento: 1000129971,
    nombres: "Santiago",
    apellidos: "Henao Otalora",
    genero: "Masculino",
    fechanacimiento: "06/01/2003",
    area: 1,
    cargo: 1,
    salario: 1300000,
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
    let listas1 =document.getElementById("listadocumento");                     ///ESTAS DOS LINEAS DE CODIGO BORRAN LA INFOMACION AL HACER 
    listas1.innerHTML = "";                                                     ///CLICK EN LOS BOTONES
    
}
function cerrarbuscardocumento(){
    document.getElementById("busquedadocumento").style.display = "none";
}

function mostrarbuscarnombre(){
    document.getElementById("busquedanombre").style.display = "block";
    let listas1 =document.getElementById("listadocumento");                     ///ESTAS DOS LINEAS DE CODIGO BORRAN LA INFOMACION AL HACER 
    listas1.innerHTML = "";                                                     ///CLICK EN LOS BOTONES
}
function cerrarbuscarnombre(){
    document.getElementById("busquedanombre").style.display = "none";
}

function mostrarbuscarcorreo(){
    document.getElementById("busquedacorreo").style.display = "block";         
    let listas1 =document.getElementById("listadocumento");                     ///ESTAS DOS LINEAS DE CODIGO BORRAN LA INFOMACION AL HACER 
    listas1.innerHTML = "";                                                    ///CLICK EN LOS BOTONES
}
function cerrarbuscarcorreo(){
    document.getElementById("busquedacorreo").style.display = "none";
}

function mostrarbuscarcontacto(){
    document.getElementById("busquedacontacto").style.display = "block";
    let listas1 =document.getElementById("listadocumento");                     ///ESTAS DOS LINEAS DE CODIGO BORRAN LA INFOMACION AL HACER 
    listas1.innerHTML = "";                                                    ///CLICK EN LOS BOTONES
}
function cerrarbuscarcontacto(){
    document.getElementById("busquedacontacto").style.display = "none";
}

function MostrarModificar(){
    document.getElementById("formularioparamodificar").style.display = "block";                                               
}
function cerrarModificar(){
    document.getElementById("formularioparamodificar").style.display = "none";
}

function MostrarGuardarCambios(){
    document.getElementById("GuardarCambios").style.display = "block";                                               
}
function cerrarMGuardarCambios(){
    document.getElementById("GuardarCambios").style.display = "none";
}

function MostrarGuardarCambios1(){
    document.getElementById("GuardarCambios1").style.display = "block";                                               
}
function cerrarMGuardarCambios1(){
    document.getElementById("GuardarCambios1").style.display = "none";
}

function MostrarModificar1(){
    document.getElementById("formularioparamodificar1").style.display = "block";                                               
}
function cerrarModificar1(){
    document.getElementById("formularioparamodificar1").style.display = "none";
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
function experimento3(){
    let formulario = document.getElementById("formularioparamodificar");
    let SeccionIzquierda1 = document.getElementById("SeccionIzquierda1");
    let SeccionDerecha1 = document.getElementById("SeccionDerecha1");
    let GuardarCambios = document.getElementById("GuardarCambios");

    formulario.style.display="flex";
    formulario.style.justifyContent="space-around";
    formulario.style.flexDirection="row";
    formulario.style.height="85%";

    SeccionIzquierda1.style.display="flex";
    SeccionIzquierda1.style.flexDirection="column";
    SeccionIzquierda1.style.justifyContent="space-evenly";

    SeccionDerecha1.style.display="flex";
    SeccionDerecha1.style.flexDirection="column";
    SeccionDerecha1.style.justifyContent="space-evenly";

    GuardarCambios.style.display="flex";
    GuardarCambios.style.alignItems="center";
    GuardarCambios.style.justifyContent="center";
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
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero} con un salario de ${existe.salario} y se encuentra ${existe.estado}: informacion de contacto correo ${existe.correo} y contacto ${existe.contacto}`);
    }
    else{
        listas1.innerHTML += ("El numero de documetno no se encuentra para ningun empleado");
    }
}

function consxnom() {
    let nombre= document.getElementById("nombres").value;
    nombre=nombre.toUpperCase();
    let existe = empleados.find(x=> x.nombres.toUpperCase() === nombre );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    
    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} con tipo de documento ${existe.tipodoc} y numero de documento ${existe.documento} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero} con un salario de ${existe.salario} y se encuentra ${existe.estado}: informacion de contacto correo ${existe.correo} y contacto ${existe.contacto}`);
    }
    else{
        listas1.innerHTML += ("Ese nombre de empleado no se encuentra registrado");
    }
}

function consxcorreo() {
    let correo= document.getElementById("correo").value;
    correo=correo.toUpperCase();
    let existe = empleados.find(x=> x.correo.toUpperCase() === correo );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    
    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} con tipo de documento ${existe.tipodoc} y numero de documento ${existe.documento} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero} con un salario de ${existe.salario} y se encuentra ${existe.estado}: informacion de contacto ${existe.contacto}`);

    }
    else{
        listas1.innerHTML += ("Ese correo del empleado no se encuentra registrado para ningun empleado");
    }
}

function consxcontacto() {
    let contacto= document.getElementById("contacto").value;
    let numero1 = Number(contacto);
    let existe = empleados.find(x=> x.contacto === numero1 );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";

    if (existe){
        listas1.innerHTML += (`La persona existe es ${existe.nombres} ${existe.apellidos} con tipo de documento ${existe.tipodoc} y numero de documento ${existe.documento} ubicada en el area ${existe.area} en el cargo ${existe.cargo} con genero ${existe.genero} con un salario de ${existe.salario} y se encuentra ${existe.estado}: informacion de contacto correo ${existe.correo}`);
    }
    else{
        listas1.innerHTML += ("Ese numero de contacto no se encuentra registrado para ningun empleado");
    }
}

//EN ESTA PARTE DEL CODIGO LO QUE HACEMOS ES UNA FUNCION LA CUAL VA A BUSCAR EL NUMERO DE DOCUMENTO LUEGO DE ESO VA A ESCRIBIR EN PANTALLA LA INFORMACION QUE SE ENCONTRO

function ConsultaDocumentoModificar() {
    let documento = document.getElementById("buscardocumento1").value;
    let numero = Number(documento);
    let existe = empleados.find(x=> x.documento === numero );

    let DigitarNombre =document.getElementById("modificar-nombres");
    let DigitarApellido =document.getElementById("modificar-apellidos");
    let DigitarGenero =document.getElementById("modificar-genero");
    let DigitarNacimiento =document.getElementById("modificar-nacimiento");
    let DigitarArea =document.getElementById("modificar-area");
    let DigitarCargo =document.getElementById("modificar-cargo");
    let DigitarSalario =document.getElementById("modificar-salario");
    let DigitarCorreo =document.getElementById("modificar-correo");
    let DigitarContacto =document.getElementById("modificar-contacto");
    let DigitarEstado =document.getElementById("modificar-estado");

    DigitarNombre.innerHTML = "";
    DigitarApellido.innerHTML = "";
    DigitarGenero.innerHTML = "";
    DigitarNacimiento.innerHTML = "";
    DigitarArea.innerHTML = "";
    DigitarCargo.innerHTML = "";
    DigitarSalario.innerHTML = "";
    DigitarCorreo.innerHTML = "";
    DigitarContacto.innerHTML = "";
    DigitarEstado.innerHTML = "";

    if (existe){
        DigitarNombre.innerHTML += (`${existe.nombres}`);
        DigitarApellido.innerHTML += (`${existe.apellidos}`);
        DigitarGenero.innerHTML += (`${existe.genero}`);
        DigitarNacimiento.innerHTML += (`${existe.fechanacimiento}`);
        DigitarArea.innerHTML += (`AREA: ${existe.area}`);
        DigitarCargo.innerHTML += (`CARGO: ${existe.cargo}`);
        DigitarSalario.innerHTML += (`SALARIO: ${existe.salario}`);
        DigitarCorreo.innerHTML += (`${existe.correo}`);
        DigitarContacto.innerHTML += (`${existe.contacto}`);
        DigitarEstado.innerHTML += (`${existe.estado}`);


    }
    else{
        listas1.innerHTML += ("El numero de documetno no se encuentra para ningun empleado");
    }
}




function modificar(){
    // Obtener el número de documento del empleado a modificar
    let documento = document.getElementById("buscardocumento1").value;
    let numero = Number(documento);

    // Encontrar el empleado en el arreglo
    let empleado = empleados.find(x=> x.documento === numero );

    if (empleado) {

      // Obtener los valores del formulario
        let nombresmodificar = document.getElementById('nombresmodificar').value;
        let apellidosmodificar = document.getElementById('apellidosmodificar').value;
        let generomodificar = document.getElementById('generomodificar').value;
        let nacimientomodificar = document.getElementById('nacimientomodificar').value;
        let areamodificar = document.getElementById('areamodificar').value;
        let cargomodificar = document.getElementById('cargomodificar').value;
        let salariomodificar = document.getElementById('salariomodificar').value;
        let correomodificar = document.getElementById('correomodificar').value;
        let contactomodificar = document.getElementById('contactomodificar').value;
        let estadoestadomodificar = document.getElementById('estadomodificar').value;

      // Actualizar la información del empleado
        empleado.nombres = nombresmodificar;
        empleado.apellidos = apellidosmodificar;
        empleado.genero = generomodificar;
        empleado.fechanacimiento = nacimientomodificar;
        empleado.area = areamodificar;
        empleado.cargo = cargomodificar;
        empleado.salario = salariomodificar;
        empleado.correo = correomodificar;
        empleado.contacto = contactomodificar;
        empleado.estado = estadoestadomodificar;

      // Mostrar la información del empleado modificado en la consola
        console.log(empleado);
    } else {
        alert("El número de documento no se encuentra en ningún empleado.");
    }
}


//SECCION DE AREA EN ESTA PARTE SE BUSCA POR CODIGO EN EL OBJETO DE AREA
function ConsultarCodigoArea() {
    let documento = document.getElementById("BuscarCodigoArea").value;
    let numero = Number(documento);
    let existe = area.find(x=> x.codigo === numero );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    if (existe){
        listas1.innerHTML += (`El area existe, tiene como codigo ${existe.codigo} con la siguiente descripcion ${existe.descripcion} y se encuentra en estado ${existe.estado} `);
    }
    else{
        listas1.innerHTML += ("El codgio de area no existe");
    }
}

//ACA VAMOS A AGREGAR EL AREA
function AgregarArea() {
    let CodigoArea=  document.getElementById("CodigoArea").value;
    let descripcionArea= document.getElementById("DescripcionArea").value;
    let estadoArea= document.getElementById("EstadoArea").value;
    
    nuevaArea={
        codigo: 1,
        descripcion: "jefe supremo",
        estado: "ACTIVO",
    };

    nuevaArea.descripcion= descripcionArea;
    nuevaArea.codigo=CodigoArea;
    nuevaArea.codigo = parseInt(nuevaArea.codigo);
    nuevaArea.estado= estadoArea;

    area.push(nuevaArea);

    alert("Informacion guardada de manera exitosa")
    
}

function ModificarArea(){
    // Obtener el número de area a modificar
    let codigo = document.getElementById("BuscarCodigoArea1").value;
    let numero = Number(codigo);

    // Encontrar el area en el arreglo
    let areas = area.find(x=> x.codigo === numero );

    if (areas) {

      // Obtener los valores del formulario
        let descripcionModificar = document.getElementById('Descripcionmodificar').value;
        let EstadoModificar = document.getElementById('Estadomodificar').value;
        

      // Actualizar la información del area
        areas.descripcion = descripcionModificar;
        areas.estado = EstadoModificar;


      // Mostrar la información del area modificado en la consola
        alert ("Informacion modificada")
    }
}



//  EN ESTA SECCION SE BUSCA EL CODIGO DE AREA Y MUESTRA LA INFORMACION
function ConsultaCodigoModificar() {
    let codigo = document.getElementById("BuscarCodigoArea1").value;
    let numero = Number(codigo);
    let existe = area.find(x=> x.codigo === numero );

    let DigitarDescripcion =document.getElementById("modificar-descripcion");
    let DigitarEstado =document.getElementById("modificar-estado");
    

    DigitarDescripcion.innerHTML = "";
    DigitarEstado.innerHTML = "";

    if (existe){
        DigitarDescripcion.innerHTML += (`${existe.descripcion}`);
        DigitarEstado.innerHTML += (`${existe.estado}`);
    }
    else{
        listas1.innerHTML += ("El codigo no se encuentra para ninguna area");
    }
}



//SECCION DE CARGO EN ESTA PARTE SE BUSCA POR CODIGO EN EL OBJETO DE  CARGO
function ConsultarCodigoCargo() {
    let documento = document.getElementById("BuscarCodigoCargo").value;
    let numero = Number(documento);
    let existe = cargo.find(x=> x.codigo === numero );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    if (existe){
        listas1.innerHTML += (`El cargo existe, tiene como codigo ${existe.codigo} con la siguiente descripcion ${existe.descripcion} y se encuentra en estado ${existe.estado} `);
    }
    else{
        listas1.innerHTML += ("El codigo de cargo no existe");
    }
}

//ACA VAMOS A AGREGAR EL AREA
function AgregarCargo() {
    let CodigoCargo=  document.getElementById("CodigoCargo").value;
    let descripcionCargo= document.getElementById("DescripcionCargo").value;
    let estadoCargo= document.getElementById("EstadoCargo").value;
    
    nuevoCargo={
        codigo: 1,
        descripcion: "jefe supremo",
        estado: "ACTIVO",
    };

    nuevoCargo.descripcion= descripcionCargo;
    nuevoCargo.codigo=CodigoCargo;
    nuevoCargo.codigo = parseInt(nuevoCargo.codigo);
    nuevoCargo.estado= estadoCargo;

    cargo.push(nuevoCargo);

    alert("Informacion guardada de manera exitosa")
    
}

function ModificarCargo(){
    // Obtener el número de area a modificar
    let codigo = document.getElementById("BuscarCodigoCargo1").value;
    let numero = Number(codigo);

    // Encontrar el area en el arreglo
    let cargos = cargo.find(x=> x.codigo === numero );

    if (cargos) {

      // Obtener los valores del formulario
        let descripcionModificar = document.getElementById('Descripcionmodificar').value;
        let EstadoModificar = document.getElementById('Estadomodificar').value;
        

      // Actualizar la información del area
        cargos.descripcion = descripcionModificar;
        cargos.estado = EstadoModificar;


      // Mostrar la información del area modificado en la consola
        alert ("Informacion modificada")
    }
}



//  EN ESTA SECCION SE BUSCA EL CODIGO DE AREA Y MUESTRA LA INFORMACION
function ConsultaCodigoModificarCargo() {
    let codigo = document.getElementById("BuscarCodigoCargo1").value;
    let numero = Number(codigo);
    let existe = cargo.find(x=> x.codigo === numero );

    let DigitarDescripcion =document.getElementById("modificar-descripcion");
    let DigitarEstado =document.getElementById("modificar-estado");
    

    DigitarDescripcion.innerHTML = "";
    DigitarEstado.innerHTML = "";

    if (existe){
        DigitarDescripcion.innerHTML += (`${existe.descripcion}`);
        DigitarEstado.innerHTML += (`${existe.estado}`);
    }
    else{
        listas1.innerHTML += ("El codigo no se encuentra para ninguna area");
    }
}


//ESTO SOLO CONSULTA POR NUMERO DE DOCUMENTO Y COLOCA EL NOMBRE DE LA PERSONA PARA SABER DE QUIEN HABLAMOS.
function ConsultarDocumentoEmpleado() {
    let documento = document.getElementById("buscardocumento1").value;
    let numero = Number(documento);
    let existe = empleados.find(x=> x.documento === numero );

    let listas1 =document.getElementById("EmpleadoNomina");
    listas1.innerHTML = "";

    if (existe){
        listas1.innerHTML += (`${existe.nombres} ${existe.apellidos}`);
    }
    else{
        listas1.innerHTML += ("El numero de documetno no se encuentra para ningun empleado");
    }
}

//esta funcion consulta por numero de documento y coloca el nombre de la persona
function ConsultarDocumentoEmpleadoNomina() {
    let documento = document.getElementById("BuscarModificarNomina").value;
    let numero = Number(documento);
    let existe = empleados.find(x=> x.documento === numero );

    let listas1 =document.getElementById("EmpleadoNomina1");
    listas1.innerHTML = "";

    if (existe){
        listas1.innerHTML += (`${existe.nombres} ${existe.apellidos}`);
    }
    else{
        listas1.innerHTML += ("El numero de documetno no se encuentra para ningun empleado");
    }
}


//esta funcion agrega los valores de los inputs y realiza el calculo de la nomina de la persona
function AgregarNominaEmpleado(){
    let documento = document.getElementById("buscardocumento1").value;
    let numero = Number(documento);
    let existe = empleados.find(x=> x.documento === numero );


    if (existe){
        let Numerodiaslaborados1 = document.getElementById("DiasLaborados").value;
        let Numerodiaslaborados = Number(Numerodiaslaborados1);

        let NumeroHorasEXNocturnas1 = document.getElementById("HorasExtrasNocturnas").value;
        let NumeroHorasEXNocturnas = Number(NumeroHorasEXNocturnas1);


        let NumeroHorasEXFestivas1 = document.getElementById("HorasExtrasFestivas").value;
        let NumeroHorasEXFestivas = Number(NumeroHorasEXFestivas1);


        let Salarioreal = existe.salario;


        let Valordia = Salarioreal/30;
        let Valorhora = Valordia/8;

        let Sueldomensual = (Salarioreal*Numerodiaslaborados)/30;
        let Horasextdomfest =  Valorhora * NumeroHorasEXFestivas * 2;
        let Horasextnocturnas =  Valorhora * NumeroHorasEXNocturnas * 1.5;

        if (Sueldomensual<2600000){
            let Auxtransporte=162000;
            let Totmensual= Sueldomensual+Horasextdomfest+Horasextnocturnas+Auxtransporte;

            let Salud = Totmensual * 0.04;
            let Pensión = Totmensual * 0.04;

            let Devengado = Totmensual - Salud - Pensión;
            console.log("El salario devengado del empleado con documento "+documento+" es: "+Devengado);
            alert("Datos de nomina agregados al empleado");

        }
        else{
            let Auxtransporte=0;
            let Totmensual= Sueldomensual+Horasextdomfest+Horasextnocturnas+Auxtransporte;

            let Salud = Totmensual * 0.04;
            let Pensión = Totmensual * 0.04;

            let Devengado = Totmensual - Salud - Pensión;
            console.log("El salario devengado del empleado con documento "+documento+" es: "+Devengado);
            alert("Datos de nomina agregados al empleado");
        }

    } 
    else {
        alert("No se encontró ningún empleado con el número de documento "+documento);
    }
}

//CON ESTA FUNCION CONSULTAMOS POR NUMERO DE DOCUMENTO Y NOS DA LA INFOMRACION DE LA NOMINA DE ESA PERSONA
function ConsultarConNombres() {
    let documento = document.getElementById("buscardocumento").value;
    let numero = Number(documento);
    let existen = empleados.find(x=> x.documento === numero );
    let listas1 =document.getElementById("listadocumento");
    listas1.innerHTML = "";
    
    if (existen){
        let Numerodiaslaborados1 = document.getElementById("DiasLaborados").value;
        let Numerodiaslaborados = Number(Numerodiaslaborados1);

        let NumeroHorasEXNocturnas1 = document.getElementById("HorasExtrasNocturnas").value;
        let NumeroHorasEXNocturnas = Number(NumeroHorasEXNocturnas1);


        let NumeroHorasEXFestivas1 = document.getElementById("HorasExtrasFestivas").value;
        let NumeroHorasEXFestivas = Number(NumeroHorasEXFestivas1);


        let Salarioreal = existen.salario;


        let Valordia = Salarioreal/30;
        let Valorhora = Valordia/8;

        let Sueldomensual = (Salarioreal*Numerodiaslaborados)/30;
        let Horasextdomfest =  Valorhora * NumeroHorasEXFestivas * 2;
        let Horasextnocturnas =  Valorhora * NumeroHorasEXNocturnas * 1.5;

        if (Sueldomensual<2600000){
            let Auxtransporte=162000;
            let Totmensual= Sueldomensual+Horasextdomfest+Horasextnocturnas+Auxtransporte;

            let Salud = Totmensual * 0.04;
            let Pensión = Totmensual * 0.04;

            let Devengado = Totmensual - Salud - Pensión;
            console.log("El salario devengado del empleado con documento "+documento+" es: "+Devengado);
            listas1.innerHTML += (`${existen.nombres} ${existen.apellidos} con un salario de ${existen.salario}, Devengado total: ${Devengado}, Pension ${Pensión} y salud ${Salud}, trabajando ${Numerodiaslaborados} dias, realizo ${NumeroHorasEXNocturnas} horas extras nocturnas y ${NumeroHorasEXFestivas} horas extras festivas`);


        }
        else{
            let Auxtransporte=0;
            let Totmensual= Sueldomensual+Horasextdomfest+Horasextnocturnas+Auxtransporte;

            let Salud = Totmensual * 0.04;
            let Pensión = Totmensual * 0.04;

            let Devengado = Totmensual - Salud - Pensión;

            console.log("El salario devengado del empleado con documento "+documento+" es: "+Devengado);
            listas1.innerHTML += (`${existen.nombres} ${existen.apellidos} con un salario de ${existen.salario}, Devengado total: ${Devengado}, Pension ${Pensión} y salud ${Salud}, trabajando ${Numerodiaslaborados} dias, realizo ${NumeroHorasEXNocturnas} horas extras nocturnas y ${NumeroHorasEXFestivas} horas extras festivas`);

        }

    }
    else{
        listas1.innerHTML += ("El numero de documetno no se encuentra para ningun empleado");
    }
}

