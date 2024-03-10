import { createRouter, createWebHistory } from "vue-router";
import dashboardAdmin from '../pages/master/dashboardAdmin'
import gestionMedico from '../pages/master/gestionMedico';
import agregarMedico from '../pages/master/agregarMedico';
import gestionCita from '@/pages/master/gestionCita'
import gestionPaciente from '@/pages/master/gestionPaciente'
import agregarPaciente from '@/pages/master/agregarPaciente'
import homePage from '@/pages/master/homePage'
import homeMedico from '@/pages/medico/homeMedico'
import loginPrincipal from '@/pages/loginPrincipal'
import agendaMedica from '@/pages/medico/agendaMedica'
import homePageMedico from '@/pages/medico/homePageMedico'

const routes = [
  {
    name: 'dashboardAdmin',
    path: '/',
    component: dashboardAdmin,
    children: [
      {
        path: 'gestionMedico',
        name: 'gestionMedico',
        component: gestionMedico,
      },
      {
        path: 'agregarMedico',
        name: 'agregarMedico',
        component: agregarMedico,
      },
      {
        name: 'gestionCita',
        path: 'gestionCita',
        component: gestionCita
      },
      {
        name: 'gestionPaciente',
        path: 'gestionPaciente',
        component: gestionPaciente
      },
      {
        name: 'agregarPaciente',
        path: 'agregarPaciente',
        component: agregarPaciente
      },
      {
        name: 'homePage',
        path: '/',
        component: homePage
      },
      {
        name: 'homeMedico',
        path: 'homeMedico',
        component: homeMedico
      },
      {
        name: 'loginPrincipal',
        path: 'loginPrincipal',
        component: loginPrincipal
      },
      {
        name: 'agendaMedica',
        path: 'agendaMedica',
        component: agendaMedica
      },{
        name: 'homePageMedico',
        path: 'homeMedico',
        component: homePageMedico
      }
    ]
  }
];



function createAppRouter() {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}

export default createAppRouter();




