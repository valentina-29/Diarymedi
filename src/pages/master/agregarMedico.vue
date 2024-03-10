<template>
	<section id="content">
		<main>
			<div class="table-data">
				<div class="contenedorFormularioRegistrarMedicos">   
					<form action="" class="formulario" id="formulario">
						<div class="registroMedicos">
							<div class="inputBox" id="inputIdentificacion">
								<span class="labels" id="labelId">Identificacion</span>
								<input type="text" placeholder="Identificación" required id="identificacion" name="identificacion" maxlength="10" oninput="validarNumero()">
							</div>        
							<div class="inputBox" id="inputNombres">
								<span class="labels">Nombres</span>
								<input type="text" placeholder="Nombres" required id="nombres" name="nombres" maxlength="30" oninput="validarLetras()">
							</div>
							<div class="inputBox" id="inputApellidos">
								<span class="labels">Apellidos</span>
								<input type="text" placeholder="Apellidos" required id="apellidos" name="apellidos" maxlength="30" oninput="validarLetras()">
							</div>
							<div class="inputBox" id="inputCorreo">
								<span class="labels">Correo</span>
								<input type="email" placeholder="Correo Electronico" required id="correo" name="correo" maxlength="35">
							</div>  
							<div class="inputBox" id="inputTelefono">
								<span class="labels" id="labelId">Teléfono</span>
								<input type="text" placeholder="Teléfono" required id="telefono" name="telefono" maxlength="10" oninput="validarNumero()">
							</div> 
							<div class="inputGenero">
								<div class="opcionGenero">Genero</div>
								<select class="listaGeneros" id="listaGeneros" name="listaGeneros">
									<option value="" disabled selected>Seleccione una opcion</option>
									<option value="femenino">Femenino</option>
									<option value="masculino">Masculino</option>
									<option value="otroGenero">Otro</option>
								</select>
							</div>
							<div class="inputCargo">
								<div class="cargoMedicos">Cargo Medicos</div>
								<select name="" id="cargosMedicos" class="cargosMedicos">
									<option value="" disabled selected>Seleccione una opción</option>
									<option value="femenino">Medicina Familiar</option>
									<option value="masculino">Medicina Interna</option>
									<option value="otroGenero">Pediatría</option>
									<option value="otroGenero">Ginecología y Obstetricia</option>
									<option value="otroGenero">Urología</option>
									<option value="otroGenero">Oftalmología</option>
									<option value="otroGenero">Ortopedia y Traumatología</option>
									<option value="otroGenero">Otorrinolaringología</option>
									<option value="otroGenero">Dermatología</option>
									<option value="otroGenero">Atención Odontológica básica</option>
									<option value="otroGenero">Cirugía General</option>
									<option value="otroGenero">Optometría</option>
									<option value="otroGenero">Psicología</option>
									<option value="otroGenero">Nutrición y Dietética</option>
								</select>
							</div>
							<!--**************BOTÓN FORMULARIO**************-->
							<div class="botonMedicos">
								<input type="submit" value="Registrar Medicos" onclick="validarFormularios()">
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
		<!-- MAIN -->
	</section>
</template>
<script></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}

:root {
	--poppins: 'Poppins', sans-serif;
	--lato: 'Lato', sans-serif;

	--light: #F9F9F9;
	--blue: #3C91E6;
	--light-blue: #CFE8FF;
	--grey: #eee;
	--dark-grey: #AAAAAA;
	--dark: #342E37;
	--red: #DB504A;
	--yellow: #FFCE26;
	--light-yellow: #FFF2C6;
	--orange: #FD7238;
	--light-orange: #FFE0D3;
}

html {
	overflow-x: hidden;
}

body.dark {
	--light: #0C0C1E;
	--grey: #060714;
	--dark: #FBFBFB;
}

body {
	background: var(--grey);
	overflow-x: hidden;
}


#sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: var(--light);
	z-index: 2000;
	font-family: var(--lato);
	transition: .3s ease;
	overflow-x: hidden;
	scrollbar-width: none;
}

#sidebar img{
	width: 30px;
	height: 30px;

}
#sidebar::--webkit-scrollbar {
	display: none;
}
#sidebar.hide {
	width: 60px;
}
#sidebar .brand {
	font-size: 24px;
	font-weight: 700;
	height: 56px;
	display: flex;
	align-items: center;
	color: var(--blue);
	position: sticky;
	top: 0;
	left: 0;
	background: var(--light);
	z-index: 500;
	padding-bottom: 20px;
	box-sizing: content-box;
}
#sidebar .brand .bx {
	min-width: 60px;
	display: flex;
	justify-content: center;
}
#sidebar .side-menu {
	width: 100%;
	margin-top: 48px;
}
#sidebar .side-menu li {
	height: 48px;
	background: transparent;
	margin-left: 6px;
	border-radius: 48px 0 0 48px;
	padding: 4px;
}
#sidebar .side-menu li.active {
	background: var(--grey);
	position: relative;
}
#sidebar .side-menu li.active::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: -40px;
	right: 0;
	box-shadow: 20px 20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li.active::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	bottom: -40px;
	right: 0;
	box-shadow: 20px -20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li a {
	width: 100%;
	height: 100%;
	background: var(--light);
	display: flex;
	align-items: center;
	border-radius: 48px;
	font-size: 16px;
	color: var(--dark);
	white-space: nowrap;
	overflow-x: hidden;
}
#sidebar .side-menu.top li.active a {
	color: var(--blue);
}
#sidebar.hide .side-menu li a {
	width: calc(48px - (4px * 2));
	transition: width .3s ease;
}
#sidebar .side-menu li a.logout {
	color: var(--red);
}
#sidebar .side-menu.top li a:hover {
	color: var(--blue);
}
#sidebar .side-menu li a .bx {
	min-width: calc(60px  - ((4px + 6px) * 2));
	display: flex;
	justify-content: center;
}

#content {
	position: relative;
	width: calc(100% - 280px);
	left: 280px;
	transition: .3s ease;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px);
	left: 60px;
}

#content nav {
	height: 56px;
	background: var(--light);
	padding: 0 24px;
	display: flex;
	align-items: center;
	grid-gap: 24px;
	font-family: var(--lato);
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1000;
}
#content nav::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	bottom: -40px;
	left: 0;
	border-radius: 50%;
	box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
	color: var(--dark);
}
#content nav .bx.bx-menu {
	cursor: pointer;
	color: var(--dark);
}

#content nav form {
	max-width: 400px;
	width: 100%;
	margin-right: auto;
}
#content nav form .form-input {
	display: flex;
	align-items: center;
	height: 36px;
}
#content nav form .form-input input {
	flex-grow: 1;
	padding: 0 16px;
	height: 100%;
	border: none;
	background: var(--grey);
	border-radius: 36px 0 0 36px;
	outline: none;
	width: 100%;
	color: var(--dark);
}
#content nav form .form-input button {
	width: 36px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--blue);
	color: var(--light);
	font-size: 18px;
	border: none;
	outline: none;
	border-radius: 0 36px 36px 0;
	cursor: pointer;
}
#content nav .notification {
	font-size: 20px;
	position: relative;
}
#content nav .notification .num {
	position: absolute;
	top: -6px;
	right: -6px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--light);
	background: var(--red);
	color: var(--light);
	font-weight: 700;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#content nav .profile img {
	width: 36px;
	height: 36px;
	object-fit: cover;
	border-radius: 50%;
}
#content nav .switch-mode {
	display: block;
	min-width: 50px;
	height: 25px;
	border-radius: 25px;
	background: var(--grey);
	cursor: pointer;
	position: relative;
}
#content nav .switch-mode::before {
	content: '';
	position: absolute;
	top: 2px;
	left: 2px;
	bottom: 2px;
	width: calc(25px - 4px);
	background: var(--blue);
	border-radius: 50%;
	transition: all .3s ease;
}
#content nav #switch-mode:checked + .switch-mode::before {
	left: calc(100% - (25px - 4px) - 2px);
}

#content main {
	width: 100%;
	padding: 36px 24px;
	font-family: var(--poppins);
	max-height: calc(100vh - 56px);
	overflow-y: auto;
}
#content main .head-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-gap: 16px;
	flex-wrap: wrap;
}
#content main .head-title .left h1 {
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 10px;
	color: var(--dark);
}
#content main .head-title .left .breadcrumb {
	display: flex;
	align-items: center;
	grid-gap: 16px;
}
#content main .head-title .left .breadcrumb li {
	color: var(--dark);
}
#content main .head-title .left .breadcrumb li a {
	color: var(--dark-grey);
	pointer-events: none;
}
#content main .head-title .left .breadcrumb li a.active {
	color: var(--blue);
	pointer-events: unset;
}

#content main .box-info {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 24px;
	margin-top: 36px;
}
#content main .box-info li {
	padding: 24px;
	background: var(--light);
	border-radius: 20px;
	display: flex;
	align-items: center;
	grid-gap: 24px;
}
#content main .box-info li .bx {
	width: 80px;
	height: 80px;
	border-radius: 10px;
	font-size: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#content main .box-info li:nth-child(1) .bx {
	background: var(--light-blue);
	color: var(--blue);
}
#content main .box-info li:nth-child(2) .bx {
	background: var(--light-yellow);
	color: var(--yellow);
}
#content main .box-info li:nth-child(3) .bx {
	background: var(--light-orange);
	color: var(--orange);
}
#content main .box-info li .text h3 {
	font-size: 24px;
	font-weight: 600;
	color: var(--dark);
}
#content main .box-info li .text p {
	color: var(--dark);	
}





#content main .table-data {
	display: flex;
	flex-wrap: wrap;
	grid-gap: 24px;
	margin-top: 24px;
	width: 100%;
	color: var(--dark);
}
#content main .table-data > div {
	border-radius: 20px;
	background: var(--light);
	padding: 24px;
	overflow-x: auto;
}

/*-------------------------------RESPONSIVE-------------------------------*/

@media screen and (max-width: 768px) {
	#sidebar {
		width: 200px;
	}

	#content {
		width: calc(100% - 60px);
		left: 200px;
	}

	#content nav .nav-link {
		display: none;
	}
}

@media screen and (max-width: 576px) {
	#content nav form .form-input input {
		display: none;
	}

	#content nav form .form-input button {
		width: auto;
		height: auto;
		background: transparent;
		border-radius: none;
		color: var(--dark);
	}

	#content nav form.show .form-input input {
		display: block;
		width: 100%;
	}
	#content nav form.show .form-input button {
		width: 36px;
		height: 100%;
		border-radius: 0 36px 36px 0;
		color: var(--light);
		background: var(--red);
	}

	#content nav form.show ~ .notification,
	#content nav form.show ~ .profile {
		display: none;
	}

	#content main .box-info {
		grid-template-columns: 1fr;
	}

	#content main .table-data .contenedorFormularioRegistrarMedicos {
		min-width: 420px;
	}
	
}

/*---------------------------FORMULARIO DE REGISTRO-------------------------------------*/
.contenedorFormularioRegistrarMedicos {
    width: 700%; 
    margin: 0 auto; 
}

.registroMedicos{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.registroMedicos span{
    display: block;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
}
.registroMedicos .inputBox{
    position: relative;
}
.registroMedicos .inputBox input{
    width: 100%;
    background: white;
    border: 2px solid black;
    border-radius: 10px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
}
.registroMedicos .inputBox input:focus{
    outline: none;
    border: 2px solid blue;
}
.registroMedicos .listaGeneros{
    width: 100%;
    background: white;
    border: 2px solid black;
    border-radius: 10px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
}


.registroMedicos .cargosMedicos{
    width: 100%;
    background: white;
    border: 2px solid black;
    border-radius: 10px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
}

.registroMedicos .inputTipoMedicos .tiposMedicos{
    display: block;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
}
.registroMedicos .inputGenero .opcionGenero{
    display: block;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
}

.registroMedicos .inputCargo .cargoMedicos{
    display: block;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
}

.registroMedicos .botonMedicos{
    display: grid;
    flex-direction: column;
    align-items: start;
    grid-column: span 2;
    margin-left: auto;
    margin-right: auto;
}
.registroMedicos .botonMedicos input{
    padding: 0 20px 0 20px;
    line-height: 45px;
    background: blue;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.registroMedicos .botonMedicos input:hover{
    background: blue;
    color: white;
}
.contenedorFormularioRegistrarMedicos .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}
</style>