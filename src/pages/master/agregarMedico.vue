<template>
<!-- SIDEBAR -->
<section id="sidebar">
		<a href="#" class="brand">
			<img src="../../assets/images/a1.png" alt="">
			<span class="text">AdminHub</span>
		</a>
		<ul class="side-menu top">
			<li>
				<a href="../index.html">
					<i class='bx bxs-dashboard' ></i>
					
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-user-pin'></i>
					<span class="text">Usuarios</span>
				</a>
			</li>
			<li>
				<a href="../../HTML/navegacion/gestionPacientes.html">
					<i class='bx bxs-group' ></i>
					<span class="text">Pacientes</span>
				</a>
			</li>
			<li class="active">
				<a href="../../HTML/navegacion/gestionMedicos.html">
					<i class='bx bxs-first-aid' ></i>
					<span class="text">Medicos</span>
				</a>
			</li>
			<li>
				<a href="../../HTML/navegacion/gestionCitas.html">
					<i class='bx bxs-calendar-event' ></i>
					<span class="text">Citas</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	<!-- SIDEBAR -->



	<!-- CONTENT -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu' ></i>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search...">
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden>
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">
				<img src="../../assets/images/adm.png">
			</a>
		</nav>
		<!-- NAVBAR -->

		<!-- MAIN -->
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Bienvenido Admin</h1>
				</div>
			</div>
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
<style></style>