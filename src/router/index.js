import { createRouter, createWebHistory } from "vue-router";
import dashboardAdmin from '../pages/master/dashboardAdmin'
import gestionMedico from '../pages/master/gestionMedico';
import agregarMedico from '../pages/master/agregarMedico';
import gestionCita from '@/pages/master/gestionCita'
import gestionPaciente from '@/pages/master/gestionPaciente'
import agregarPaciente from '@/pages/master/agregarPaciente'
import homePage from '@/pages/master/homePage'

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




