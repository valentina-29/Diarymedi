<template>
    <div class="head-titleHome">
    <div class="leftHome">
        <h1>Bienvenido Dr. Juan Sierra</h1>
        <p>Especilaista en medicina general</p>
    </div>
</div>
</template>

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
    --lightCard: rgb(207,238,245);
	--blue: #3C91E6;
	--light-blue: #CFE8FF;
	--grey: rgb(130, 209, 230);
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
	--light: #000000;
	--lightCard: #000000;
	--grey: rgb(46,46,46);
	--dark: #FBFBFB;
}

body {
	background: var(--grey);
	overflow-x: hidden;
}
.head-titleHome  .leftHome h1 {
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 10px;
	color: var(--dark);
}
.head-titleHome .leftHome p {
	
	font-weight: 600;
	margin-bottom: 10px;
	color: var(--dark);
}
.head-titleHome {
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-gap: 16px;
	flex-wrap: wrap;
	background-color: var(--lightCard);
	background-size: cover;
	background-position: center;
	border-radius: 20px;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 24px;
	margin-top: 36px;
	padding: 34px;
}
</style>