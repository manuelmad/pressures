/* SECCIÓN DATOS */

// CABECERA DE TABLAS RESPONSIVAS
let tamano_ventana = window.innerWidth;
console.log(`Tamaño de ventana: ${tamano_ventana}px.`);
if(tamano_ventana < 600) {
	let cabecera_1 = document.getElementById("cabecera1");
	cabecera_1.innerHTML = "Prof." + "<br>" + "(pies)";
	let cabecera1 = document.getElementById("cabecera1i");
	cabecera1.innerHTML = "Prof." + "<br>" + "(pies)";

	let cabecera_4 = document.getElementById("cabecera4");
	cabecera_4.innerHTML = "Pres. Form." + "<br>" + "(lpc.)";
	let cabecera4 = document.getElementById("cabecera4i");
	cabecera4.innerHTML = "Pres. Form." + "<br>" + "(lpc.)";

	let cabecera_5 = document.getElementById("cabecera5");
	cabecera_5.innerHTML = "Den. Eq. Form." + "<br>" + "(lpg.)";
	let cabecera5 = document.getElementById("cabecera5i");
	cabecera5.innerHTML = "Den. Eq. Form." + "<br>" + "(lpg.)";

	let cabecera_6 = document.getElementById("cabecera6");
	cabecera_6.innerHTML = "Pres. Frac." + "<br>" + "(lpc.)";
	let cabecera6 = document.getElementById("cabecera6i");
	cabecera6.innerHTML = "Pres. Frac." + "<br>" + "(lpc.)";

	let cabecera_7 = document.getElementById("cabecera7");
	cabecera_7.innerHTML = "Den. Eq. Frac." + "<br>" + "(lpg.)";
	let cabecera7 = document.getElementById("cabecera7i");
	cabecera7.innerHTML = "Den. Eq. Frac." + "<br>" + "(lpg.)";
}

// Accedo al botón para mostrar / ocular tabla manual y le asigno un evento
let data_input = document.getElementById("data_input");
data_input.addEventListener('change', chooseOption);

function chooseOption() {
	if(data_input.value === 'defect') {
		tabla_manual.style.display = "none";
		tabla_importada.style.display = "none";
	}
	else if(data_input.value === 'manual') {
		tabla_manual.style.display = "block";
		tabla_importada.style.display = "none";
	}
	else if(data_input.value === 'auto') {
		tabla_manual.style.display = "none";
		tabla_importada.style.display = "block";
	}
}

// Ejecuto la función chooseOption al cargar la ventana para que por defecto estén ocultos los métodos de ingreso de datos
window.addEventListener('load', chooseOption);


/* SECCIÓN MANUAL */

// Accedo al botón de agregar fila y le asigno el evento de activar la función
let agregar_fila = document.getElementById("agregar_fila");
agregar_fila.addEventListener("click", agregarFila);

// FUNCIÓN PARA AGREGAR FILAS A LA TABLA CON LOS ID'S CORRESPONDIENTES
function agregarFila() {
	//Creo una nueva fila
	let nueva_fila = document.createElement("tr");

	// Creo las columnas de esa fila (ignoro la columna del centro)
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	let nueva_columna4 = document.createElement("td");
	let nueva_columna5 = document.createElement("td");
	let nueva_columna6 = document.createElement("td");
	let nueva_columna7 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila.appendChild(nueva_columna1);
	nueva_fila.appendChild(nueva_columna2);
	nueva_fila.appendChild(nueva_columna3);
	nueva_fila.appendChild(nueva_columna4);
	nueva_fila.appendChild(nueva_columna5);
	nueva_fila.appendChild(nueva_columna6);
	nueva_fila.appendChild(nueva_columna7);

	// Creo 3 inputs
	let nuevo_input1 = document.createElement("input");
	let nuevo_input2 = document.createElement("input");
	let nuevo_input3 = document.createElement("input");
	
	// Creo 4 spans
	let nuevo_span1 = document.createElement("span");
	let nuevo_span2 = document.createElement("span");
	let nuevo_span3 = document.createElement("span");
	let nuevo_span4 = document.createElement("span");


	// Inserto los 3 inputs en las columnas (celdas) correspondientes
	nueva_columna1.appendChild(nuevo_input1);
	nueva_columna2.appendChild(nuevo_input2);
	nueva_columna3.appendChild(nuevo_input3);

	// Inserto los 4 spans en las columnas (celdas) correspondientes
	nueva_columna4.appendChild(nuevo_span1);
	nueva_columna5.appendChild(nuevo_span2);
	nueva_columna6.appendChild(nuevo_span3);
	nueva_columna7.appendChild(nuevo_span4);

	// Accedo al body de la tabla
	let cuerpo_tabla = document.getElementById("cuerpotabla");

	// Inserto la fila, sus columnas, inputs y spans en el body de la tabla
	cuerpo_tabla.appendChild(nueva_fila);
}

// Accedo al botón de eliminar fila y le asigno el evento de activar la función
let eliminar_fila = document.getElementById("eliminar_fila");
eliminar_fila.addEventListener("click", eliminarFila);


function eliminarFila()
{
	// Cuento las filas del cuerpo de la tabla
	let cuerpo_tabla = document.getElementById("cuerpotabla");
	let filas_cuerpotabla = cuerpo_tabla.getElementsByTagName("tr").length;

	if(filas_cuerpotabla > 1) // Para que el botón eliminar no funcione cuando solo queda la 1 fila original
	{
		let ultima_fila = cuerpo_tabla.lastElementChild;
		cuerpo_tabla.removeChild(ultima_fila);
	}
}

/* CORRELACIONES */
// PENNEBAKER
let gradiente_formacion;

function correlacionPennebaker(relacion) {
	gradiente_formacion = - 85.4637*(relacion**6) + 705.9768*(relacion**5) - 2422.7515*(relacion**4) + 4422.5204*(relacion**3) - 4531.28*(relacion**2) + 2473.0685*relacion - 561.6235;
}

// EATON - POISON
let poison_ratio;

function correlactionEatonPoison(prof) {
	poison_ratio = (Math.log(prof/18.25))/13.95;
}

// BEN - EATON
let grad_sobrecarga;
function correlationBenEaton(prof) {
	if(prof >= 0 && prof <=10000) {
		for(let i=0.825; i <= 0.9125; i=i+0.001) {
			let prof_i = (226197827.01*(i**5) - 1011899666.65*(i**4) + 1811383432.42*(i**3) - 1621558131.48*(i**2) + 725880849.54*i - 129984509.41).toFixed(0);
			console.log('prof iterada',prof_i);
			if(prof_i >= prof-50 && prof_i <= prof+50) {
				grad_sobrecarga = i;
				break;
			}
		}
	}
	else if(prof > 10000 && prof <=20000) {
		for(let j=0.9125; j <= 1; j=j+0.001) {
			let prof_i = (226197827.01*(j**5) - 1011899666.65*(j**4) + 1811383432.42*(j**3) - 1621558131.48*(j**2) + 725880849.54*j - 129984509.41).toFixed(0);
			console.log('prof iterada',prof_i);
			if(prof_i >= prof-50 && prof_i <= prof+50) {
				grad_sobrecarga = j;
				break;
			}
		}
	}
	if(!grad_sobrecarga) {
		const span = document.createElement('span');
		span.innerText = `No se halló un valor de gradiente de sobre carga para ${prof} pies.`;
		document.getElementById('error_msg').appendChild(span);
	}
}


// Array que llenaré con los datos de la tabla manual y me servirá para graficar
let array_filas = [];

// Accedo al body de la tabla oculta
let cuerpotabla_oculta = document.getElementById("cuerpotabla_oculta");

let boton_calculos = document.getElementById("calculos");
boton_calculos.addEventListener("click", calculosTabla);

function calculosTabla() {
	let cuerpotabla = document.getElementById("cuerpotabla");
	let filascuerpotabla = cuerpotabla.getElementsByTagName("tr").length;

	array_filas = []; // limpio el array antes de llenarlo
	cuerpotabla_oculta.innerHTML = ""; // Limpio el cuerpo de la tabla oculta antes de llenarlo
	
	for(let i = 0; i < filascuerpotabla; i++) {
		let fila_cuerpo_tabla = cuerpotabla.children[i];

		let celda1 = fila_cuerpo_tabla.firstElementChild;
		let prof = celda1.firstElementChild.value;

		let celda2 = celda1.nextElementSibling;
		let tn = celda2.firstElementChild.value;

		let celda3 = celda2.nextElementSibling;
		let to = celda3.firstElementChild.value;

		let celda4 = celda3.nextElementSibling;
		let rel = to / tn;
		correlacionPennebaker(rel);
		let grad = gradiente_formacion;
		let pres = prof*grad;
		celda4.firstElementChild.innerHTML = pres.toFixed(2);

		let celda5 = celda4.nextElementSibling;
		let den = pres/(0.052*prof);
		celda5.firstElementChild.innerHTML = den.toFixed(2);

		let celda6 = celda5.nextElementSibling;
		correlactionEatonPoison(prof);
		let poison = poison_ratio;
		correlationBenEaton(prof);
		let grad_sc = grad_sobrecarga;
		let pres_sc = grad_sc * prof;
		let pres_fr = pres + ((poison/(1 - poison))*(pres_sc - pres));
		celda6.firstElementChild.innerHTML = pres_fr.toFixed(2);

		let celda7 = celda6.nextElementSibling;
		let grad_fr = pres_fr / prof;
		let den_fr = pres_fr / (0.052*prof);
		celda7.firstElementChild.innerHTML = den_fr.toFixed(2);

		array_filas.push({
			profundidad: prof,
			tiempoNormal: tn,
			tiempoAnormal: to,
			relacionTiempos: rel,
			gradiente: grad,
			presion: pres,
			densidad: den,
			gradienteFractura: grad_fr,
			presionFractura: pres_fr,
			densidadFractura: den_fr
		});


		// Código para llenar la tabla oculta que servirá para exportar en excel

		//Creo una nueva fila
		let nueva_fila = document.createElement("tr");

		// Creo las columnas de esa fila (ignoro la columna del centro)
		let nueva_columna1 = document.createElement("td");
		let nueva_columna2 = document.createElement("td");
		let nueva_columna3 = document.createElement("td");
		let nueva_columna4 = document.createElement("td");
		let nueva_columna5 = document.createElement("td");
		let nueva_columna6 = document.createElement("td");
		let nueva_columna7 = document.createElement("td");

		// Inserto todas las columnas dentro de la fila que creé
		nueva_fila.appendChild(nueva_columna1);
		nueva_fila.appendChild(nueva_columna2);
		nueva_fila.appendChild(nueva_columna3);
		nueva_fila.appendChild(nueva_columna4);
		nueva_fila.appendChild(nueva_columna5);
		nueva_fila.appendChild(nueva_columna6);
		nueva_fila.appendChild(nueva_columna7);
		
		// Creo 7 spans y le introduzco valores
		let nuevo_span1 = document.createElement("span");
		nuevo_span1.innerHTML = prof;
		
		let nuevo_span2 = document.createElement("span");
		nuevo_span2.innerHTML = tn;

		let nuevo_span3 = document.createElement("span");
		nuevo_span3.innerHTML = to;

		let nuevo_span4 = document.createElement("span");
		nuevo_span4.innerHTML = pres.toFixed(2);

		let nuevo_span5 = document.createElement("span");
		nuevo_span5.innerHTML = den.toFixed(2);

		let nuevo_span6 = document.createElement("span");
		nuevo_span6.innerHTML = pres_fr.toFixed(1);
		
		let nuevo_span7 = document.createElement("span");
		nuevo_span7.innerHTML = den_fr.toFixed(2);

		// Inserto los 7 spans en las columnas (celdas)
		nueva_columna1.appendChild(nuevo_span1);
		nueva_columna2.appendChild(nuevo_span2);
		nueva_columna3.appendChild(nuevo_span3);
		nueva_columna4.appendChild(nuevo_span4);
		nueva_columna5.appendChild(nuevo_span5);
		nueva_columna6.appendChild(nuevo_span6);
		nueva_columna7.appendChild(nuevo_span7);

		// Inserto la fila, sus columnas y spans en el body de la tabla oculta
		cuerpotabla_oculta.appendChild(nueva_fila);
	}
}



/* GENERAR Y EXPORTAR ARCHIVO EXCEL DESDE TABLA HTML OCULTA */
let exportar_excel = document.getElementById("exportar_excel");
exportar_excel.addEventListener("click", exportarExcel);

let tabla_oculta = document.getElementById("tabla_oculta");

function exportarExcel() {
	let tableExport = new TableExport(tabla_oculta, {
		exportButtons: false,
		filename: "tabla-presiones-poro-fractura",
		sheetname: "presiones",
	});

	let datos = tableExport.getExportData();
	let preferenciasDocumento = datos.tabla_oculta.xlsx;
	tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
}


/* SECCIÓN AUTOMÁTICA */
/* IMPORTAR ARCHIVO EXCEL PARA CREAR TABLA EN HTML */

// GENERAR ARRAY EN JS A PARTIR DE ARCHIVO EXCEL
let result = [];
document.querySelector("#file").addEventListener("change", function () {
	// Obtener el archivo seleccionado
	let file = document.querySelector("#file").files[0];

	// Separar el nombre del archivo por punto (.) para obtener su tipo
	let type = file.name.split('.');

	// Mostrar un alert en caso de que el archivo no sea un excel y detener la función
	if (type[type.length - 1] !== 'xlsx' && type[type.length - 1] !== 'xls') {
		alert ('Seleccione solo el archivo de Excel para importar');
		return false;
	}

	const reader = new FileReader();
	reader.readAsBinaryString(file);
	reader.onload = (e) => {
		const data = e.target.result;
		const zzexcel = window.XLS.read(data, {
			type: 'binary'
 		});

		result = []; // limpio el array antes de agregarle los elementos provenientes del excel

		// Código para recorrer las hojas del excel e ir agregado sus contenidos en el array "result"
		for (let i = 0; i < zzexcel.SheetNames.length; i++) {
			const newData = window.XLS.utils.sheet_to_json(zzexcel.Sheets[zzexcel.SheetNames[i]]);
			result.push(...newData)
		}
		console.log('result', result);
	}
});


// Accedo al body de la tabla donde agregaré la filas
let cuerpotabla2 = document.getElementById("cuerpotabla2");

// Crear tabla con el array resultante anterior
function crearTabla() {

	array_filas = []; // limpio el array antes de llenarlo
	cuerpotabla2.innerHTML = ""; // limpio el cuerpo de la tabla antes de agregarle filas

	for(let i = 0; i < result.length; i++) {
		//Creo una nueva fila
		let nueva_fila = document.createElement("tr");

		// Creo las columnas de esa fila (ignoro la columna del centro)
		let nueva_columna1 = document.createElement("td");
		let nueva_columna2 = document.createElement("td");
		let nueva_columna3 = document.createElement("td");
		let nueva_columna4 = document.createElement("td");
		let nueva_columna5 = document.createElement("td");
		let nueva_columna6 = document.createElement("td");
		let nueva_columna7 = document.createElement("td");

		// Inserto todas las columnas dentro de la fila que creé
		nueva_fila.appendChild(nueva_columna1);
		nueva_fila.appendChild(nueva_columna2);
		nueva_fila.appendChild(nueva_columna3);
		nueva_fila.appendChild(nueva_columna4);
		nueva_fila.appendChild(nueva_columna5);
		nueva_fila.appendChild(nueva_columna6);
		nueva_fila.appendChild(nueva_columna7);

		// Calculo valores que estarán en la tabla
		//FORMACIÓN
		let rel = Number(result[i]['Tiempo Anormal']) / Number(result[i]['Tiempo Normal']);
		
		correlacionPennebaker(rel);
		let grad = gradiente_formacion;
		let pres = Number(result[i].Profundidad * grad);
		let den = grad / 0.052;
		
		// Creo 7 spans y le introduzco valores
		let nuevo_span1 = document.createElement("span");
		let prof = Number(result[i].Profundidad.toFixed(2));
		nuevo_span1.innerHTML = prof;
		
		let nuevo_span2 = document.createElement("span");
		tn = Number(result[i]['Tiempo Normal'].toFixed(2));
		nuevo_span2.innerHTML = tn;

		let nuevo_span3 = document.createElement("span");
		to = Number(result[i]['Tiempo Normal'].toFixed(2));
		nuevo_span3.innerHTML = to;

		let nuevo_span4 = document.createElement("span");
		nuevo_span4.innerHTML = pres.toFixed(0);

		let nuevo_span5 = document.createElement("span");
		nuevo_span5.innerHTML = den.toFixed(1);

		let nuevo_span6 = document.createElement("span");
		
		let nuevo_span7 = document.createElement("span");

		//FRACTURA
		correlactionEatonPoison(prof);
		let poison = Number(poison_ratio);
		console.log('ratio poison',poison);

		correlationBenEaton(prof);
		let grad_sc = Number(grad_sobrecarga);
		console.log(prof);
		console.log('grad sobrec',grad_sc);

		let pres_sc = Number(grad_sc * prof);
		console.log('pres cobrec',pres_sc);

		let pres_fr = Number(pres + ((poison/(1 - poison))*(pres_sc - pres)));
		console.log('pres frac',pres_fr);
		nuevo_span6.innerHTML = pres_fr.toFixed(0);

		let grad_fr = Number(pres_fr / prof);
		console.log('grad frac',grad_fr);

		let den_fr = Number(pres_fr / (0.052*prof));
		console.log('dens frac',den_fr);
		nuevo_span7.innerHTML = den_fr.toFixed(1);

		// Inserto los 7 spans en las columnas (celdas)
		nueva_columna1.appendChild(nuevo_span1);
		nueva_columna2.appendChild(nuevo_span2);
		nueva_columna3.appendChild(nuevo_span3);
		nueva_columna4.appendChild(nuevo_span4);
		nueva_columna5.appendChild(nuevo_span5);
		nueva_columna6.appendChild(nuevo_span6);
		nueva_columna7.appendChild(nuevo_span7);

		// Inserto la fila, sus columnas y spans en el body de la tabla
		cuerpotabla2.appendChild(nueva_fila);

		array_filas.push({
			profundidad: prof,
			tiempoNormal: tn,
			tiempoAnormal: to,
			relacionTiempos: rel,
			gradiente: grad,
			presion: pres,
			densidad: den,
			gradienteFractura: grad_fr,
			presionFractura: pres_fr,
			densidadFractura: den_fr
		});
	}
}

/* GENERAR Y EXPORTAR ARCHIVO EXCEL DESDE TABLA HTML SECCIÓN AUTOMÁTICA */
let exportar_excel_auto = document.getElementById("exportar_excel_auto");
exportar_excel_auto.addEventListener("click", exportarExcelAuto);

let table2 = document.getElementById("table2");

function exportarExcelAuto() {
	let tableExport = new TableExport(table2, {
		exportButtons: false,
		filename: "tabla-presiones-poro-fractura",
		sheetname: "presiones",
	});

	let datos = tableExport.getExportData();
	let preferenciasDocumento = datos.table2.xlsx;
	tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
}


/* SECCIÓN GRÁFICA */

let grafica = document.getElementById("grafica");
let papel = grafica.getContext("2d");

if(tamano_ventana < 600) {
	grafica.setAttribute("width", 280);
	grafica.setAttribute("height", 280);
}
else if(tamano_ventana >= 600 && tamano_ventana < 1024) {
	grafica.setAttribute("width", 550);
	grafica.setAttribute("height", 550);
}
else if(tamano_ventana >= 1024) {
	grafica.setAttribute("width", 720);
	grafica.setAttribute("height", 720);
}

// DIMENSIONES DEL CANVAS //
let ancho_canvas = grafica.width;
let alto_canvas = grafica.height;

// DIMENSIONES DEL ÁREA DE GRÁFICO //
let ancho_grafica = 0.7*ancho_canvas;
let centro = ancho_grafica / 2;
let alto_grafica = 0.7*alto_canvas;

// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS) //
let margen = (ancho_canvas-ancho_grafica)/2;
let medio_margen = margen / 2;

// EVENTO PARA QUE EL CANVAS INICIAL SE RENDERICE AL CARGAR LA PÁGINA
window.addEventListener('load', canvasInicial);

// FUNCIÓN PARA BORRAR TODO LO QUE HAYA EN EL CANVAS
function borrarCanvas() {
	papel.clearRect(0, 0, ancho_canvas, alto_canvas);
}

// FUNCIÓN PARA RENDERIZART EL CANVAS INICIAL, BORRAANDO PRIMERO TODO SU CONTENIDO
function canvasInicial() {
	borrarCanvas();

	// EJES DE COORDENADAS (ÁREA DE DIBUJO CUADRADA) //
	dibujarLineaPapel("black", margen, margen-5, margen, alto_grafica+margen+5); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLineaPapel("black", margen-5, margen, ancho_grafica+margen+5, margen); // LÍNEA HORIZONTAL SUPERIOR //

	// LEYENDA DE LAS LÍNEAS DE DENSIDAD //
	dibujarLineaPapel("green", 0.1*ancho_canvas, 0.95*alto_canvas, 0.19*ancho_canvas, 0.95*alto_canvas);
	papel.font = '1rem "Tahoma"';
	papel.fillStyle = "black";
	papel.textAlign = 'left'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	papel.fillText("Densidad de Poro", 0.2*ancho_canvas, 0.9553*alto_canvas);

	papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	dibujarLineaPapel("red", 0.53*ancho_canvas, 0.95*alto_canvas, 0.63*ancho_canvas, 0.95*alto_canvas);
	papel.textAlign = 'left'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	papel.fillText("Densidad de Fractura", 0.645*ancho_canvas, 0.9553*alto_canvas);


	// LEYENDA DEL EJE Y (ROTADA) //
	let x1 = 0.05*ancho_canvas; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
	let y1 = alto_canvas/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
	papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	papel.translate(x1,y1); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	papel.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
	papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		papel.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		papel.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	papel.fillText("Profundidad (pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	papel.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //

	// EJE X LEYENDA //
	let x2 = ancho_canvas/2; // COORDENADA X DONDE ESTARÁ EL TEXTO //
	let y2 = 0.05*alto_canvas; // COORDENADA Y DONDE ESTARÁ EL TEXTO //
	papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	papel.translate(x2,y2); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		papel.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		papel.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	papel.fillText("Densidad (lpg.)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	papel.restore();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS CONTINUAS (2 PUNTOS) //
function dibujarLineaPapel (color, xinicial, yinicial, xfinal, yfinal) {
	papel.beginPath();
	papel.strokeStyle = (color);
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS) //
function dibujarLineaTrans(xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
	papel.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	papel.closePath();
}


// FUNCIÓN PARA TRAZAR UNA CURVA CONECTANDO LOS PUNTOS DADOS //
function CurvaDensidades(color, xinicial, yinicial, xfinal, yfinal) {
	papel.beginPath();
	papel.strokeStyle = (color);
	papel.lineJoin = "round"; // Permite el trazo a mano alzada uniendo puntos //
	papel.moveTo(xinicial,yinicial);
	papel.lineTo(xfinal,yfinal);
	papel.stroke();
	papel.closePath();
}

// Acceso al botón de graficar curvas
let boton_graficar_curvas = document.getElementById("boton_graficar_curvas");
boton_graficar_curvas.addEventListener("click", graficarCurvas);

// FACTORES PARA LLEVAR LOS DATOS A ESCALA DEL CANVAS //
let max_densidad;
let max_prof;

let factorX;
let factorY;

let array_filas_creciente;

function graficarCurvas() {
	canvasInicial();

	array_filas_creciente = [];
	// Ordeno de menor a mayor el array que contiene los datos objetos, según su densidad
	array_filas_creciente = array_filas.sort((a, b) => a.densidadFractura - b.densidadFractura);
	console.log(array_filas_creciente);

	// Establezco la máxima densidad en los datos, que es la correspondiente al útlimo elemento del array ordenado
	max_densidad = array_filas_creciente[array_filas_creciente.length-1].densidadFractura;
	console.log(max_densidad);

	// Establezco la máxima profundidad en los datos, que es la correspondiente al útlimo elemento del array original (también del ordenado)
	max_prof = array_filas[array_filas.length - 1].profundidad;
	console.log(max_prof);

	factorX = ancho_grafica / max_densidad;
	factorY = alto_grafica / max_prof;

	// Grafico las curvas de densidad
	for(let i = 0; i < array_filas.length-1; i++) {
		CurvaDensidades("green", array_filas[i].densidad*factorX + margen, array_filas[i].profundidad*factorY + margen, array_filas[i+1].densidad*factorX + margen, array_filas[i+1].profundidad*factorY + margen);
		CurvaDensidades("red", array_filas[i].densidadFractura*factorX + margen, array_filas[i].profundidad*factorY + margen, array_filas[i+1].densidadFractura*factorX + margen, array_filas[i+1].profundidad*factorY + margen);
	}

	// LÍNEAS TRANSPARENTES DE REFERENCIA DENTRO DEL GRÁFICO //
	// Variable para la extensión de las líneas
	let extension = (Math.ceil(max_densidad) - max_densidad)*factorX;

	// Extender eje X
	dibujarLineaPapel("black", ancho_grafica + margen, margen, ancho_grafica+margen+5+extension, margen); 

	// EJE Y //
	for(a = 1000; a <= max_prof; a = a+1000) // Línea cada 1000 pies //
	{
		dibujarLineaTrans(margen, a*factorY + margen, ancho_grafica + margen + extension, a*factorY + margen);
	}

	// EJE X //
	for(a = 1; a <= Math.ceil(max_densidad); a = a+1) // Línea cada 1 lpg //
	{
		dibujarLineaTrans(a*factorX + margen, margen, a*factorX + margen, alto_grafica + margen);
	}

	// ESCALA DE LOS EJES DE COORDENADAS //

	// EJE Y - GUIONES //
	for(a = 500; a <= max_prof; a = a+500) // Guión cada 200 pies //
	{
		if(tamano_ventana < 600) {
			if(a % 1000 == 0) // Guión largo cada 1000 pies //
			{
				dibujarLineaPapel("black", margen-4, a*factorY + margen, margen+4, a*factorY + margen);
			}
			else // Guión corto cada 500 pies //
			{
				dibujarLineaPapel("black", margen-2, a*factorY + margen, margen+2, a*factorY + margen);
			}
		}
		else {
			if(a % 1000 == 0) // Guión largo cada 1000 pies //
			{
				dibujarLineaPapel("black", margen-6, a*factorY + margen, margen+6, a*factorY + margen);
			}
			else // Guión corto cada 200 pies //
			{
				dibujarLineaPapel("black", margen-4, a*factorY + margen, margen+4, a*factorY + margen);
			}
		}
	}

	// EJE Y - VALORES //
	if(tamano_ventana < 600){
		papel.font = '7px "Tahoma"';
		papel.fillStyle = "black";
	}
	else{
		papel.font = '12px "Tahoma"';
		papel.fillStyle = "black";
	}
	
	for(a = 1000; a <= max_prof; a = a+1000)
	{
		papel.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
		if(tamano_ventana < 600) {
			papel.translate(margen-5,a*factorY+3 + margen); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
		}
		else {
			papel.translate(margen-7,a*factorY+3 + margen);
		}
		papel.textAlign = 'right'; // ESTABLECER ALINEACIÓN DEL TEXTO //
		papel.fillText(a,0,0);
		papel.restore();
	}

	// EJE X - GUIONES //
	for(a = 0.5; a <= Math.ceil(max_densidad); a = a+0.5)
	{
		if(tamano_ventana < 600) {
			if(a % 2 == 0)
			{
				dibujarLineaPapel("black", a*factorX + margen, margen-4, a*factorX + margen, margen+4); // Guiones largos para valores pares //
			}
			else
			{
				dibujarLineaPapel("black", a*factorX + margen, margen-2, a*factorX + margen, margen+2); // Guiones cortos para los demás valores //
			}
		}
		else {
			if(a % 2 == 0) {
				dibujarLineaPapel("black", a*factorX + margen, margen-6, a*factorX + margen, margen+6); // Guiones largos para valores pares //
			}
			else {
				dibujarLineaPapel("black", a*factorX + margen, margen-4, a*factorX + margen, margen+4); // Guiones cortos para los demás valores //
			}
		}
	}

	// EJE X - VALORES //
	if(tamano_ventana < 600){
		papel.font = '8px "Tahoma"';
		papel.fillStyle = "black";
	}
	else{
		papel.font = '12px "Tahoma"';
		papel.fillStyle = "black";
	}

	for(a = 2; a <= Math.ceil(max_densidad); a = a+2)
	{
		papel.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
		papel.fillText(a, a*factorX + margen, 0.11*alto_canvas);
	}
	papel.fillText(0, margen-5, 0.11*alto_canvas); // Origen de coordenadas //
	papel.fillStyle = "purple"; // VALOR DE COLOR PÚRPURA //
	papel.textAlign = "center"; 
	papel.fillText(9, 9*factorX + margen, 0.11*alto_canvas); // Valor de 9 lpg (Presión Normal) //
	papel.fillStyle = "black"; // REGRESAR A COLOR NEGRO //
}

/* BOTÓN DE REINICIO */

const clean_button = document.getElementById("clean_fields_button");
clean_button.addEventListener('click', cleanAllFields);

function cleanAllFields() {
	location.reload();
}