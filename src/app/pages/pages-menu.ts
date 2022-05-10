/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    /*const dashboardMenu: NbMenuItem[] = [
      {
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
        children: undefined,
      },
      {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
        children: undefined,
      },
    ];*/

    const menu: NbMenuItem[] = [
      {
        title: 'MENU',
        group: true,
      },
      {
        title: 'Configuración',
        icon: 'settings-2',
        children: [
          {
            title: 'Agregar Usuario',
            link: '/pages/setting/adduser',
          },
          {
            title: 'Consultar Usuario',
            link: '/pages/setting/getuser',
          },
          {
            title: 'Administración Tipo Terceros',
            link: '/pages/setting/thirdpartymanage',
          },
          {
            title:'Administracion de Tipos de Lista por Consulta',
            link: '/pages/setting/companytypelist',
          },
          {
            title:'Administrar Procuraduria',
            link: '/pages/setting/manageprocuracy',
          }
          ,
          {
            title:'Logo Empresa',
            link: '/pages/setting/companylogo',
          }

        ],
      },
      {
        title: 'Notificaciones',
        icon: 'bell',
        children: [
          {
            title: 'Configuración',
            link: '/pages/notifications/settings',
          },
          {
            title: 'Enviadas',
            link: '/pages/notifications/sent',
          },
          {
            title: 'Monitoreo',
            link: '/pages/notifications/monitoring',
          },
        ]
      },
      {
        title: 'Consultas',
        icon: 'search-outline',
        children: [
          {
            title: 'Individual',
            link: '/pages/queries/individual',
          },
          {
            title: 'Masiva',
            link: '/pages/queries/bulk',
          }        
        ]
      },
      {
        title: 'Listas Propias',
        icon: 'file-text-outline',
        children: [
          {
            title: 'Tipo',
            link: '/pages/own-lists/type',
          },
          {
            title: 'Cargar',
            link: '/pages/own-lists/load',
          },
          {
            title: 'Administrar',
            link: '/pages/own-lists/manage',
          }                
        ]
      },
      {
        title: 'Reportes',
        icon: 'pie-chart',
        children: [
          {
            title: 'Consulta Reporte Historico',
            link: '/pages/reports/historical-query',
          },
          {
            title: 'Consultar Log',
            link: '/pages/reports/get-log',
          },
          {
            title: 'Consultas y Coincidencias',
            link: '/pages/reports/queries-and-matches',
          },
          {
            title: 'Detallado de Coincidencias',
            link: '/pages/reports/matches-details',
          },
          {
            title: 'Ver Consultas Realizadas',
            link: '/pages/reports/queries-made',
          },
          {
            title: 'Certificación Actualizacion\nListas',
            link: '/pages/reports/lists-update-certification',
          }        
          
        ]
      },

      {
        title: 'Layout',
        icon: 'layout-outline',
        children: [
          {
            title: 'Stepper',
            link: '/pages/layout/stepper',
          },
          {
            title: 'List',
            link: '/pages/layout/list',
          },
          {
            title: 'Infinite List',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Accordion',
            link: '/pages/layout/accordion',
          },
          {
            title: 'Tabs',
            pathMatch: 'prefix',
            link: '/pages/layout/tabs',
          },
        ],
      },
      {
        title: 'Forms',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Form Inputs',
            link: '/pages/forms/inputs',
          },
          {
            title: 'Form Layouts',
            link: '/pages/forms/layouts',
          },
          {
            title: 'Buttons',
            link: '/pages/forms/buttons',
          },
          {
            title: 'Datepicker',
            link: '/pages/forms/datepicker',
          },
        ],
      },
      {
        title: 'UI Features',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
          {
            title: 'Grid',
            link: '/pages/ui-features/grid',
          },
          {
            title: 'Icons',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Typography',
            link: '/pages/ui-features/typography',
          },
          {
            title: 'Animated Searches',
            link: '/pages/ui-features/search-fields',
          },
        ],
      },
      {
        title: 'Modal & Overlays',
        icon: 'browser-outline',
        children: [
          {
            title: 'Dialog',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: 'Window',
            link: '/pages/modal-overlays/window',
          },
          {
            title: 'Popover',
            link: '/pages/modal-overlays/popover',
          },
          {
            title: 'Toastr',
            link: '/pages/modal-overlays/toastr',
          },
          {
            title: 'Tooltip',
            link: '/pages/modal-overlays/tooltip',
          },
        ],
      },
      {
        title: 'Extra Components',
        icon: 'message-circle-outline',
        children: [
          {
            title: 'Calendar',
            link: '/pages/extra-components/calendar',
          },
          {
            title: 'Progress Bar',
            link: '/pages/extra-components/progress-bar',
          },
          {
            title: 'Spinner',
            link: '/pages/extra-components/spinner',
          },
          {
            title: 'Alert',
            link: '/pages/extra-components/alert',
          },
          {
            title: 'Calendar Kit',
            link: '/pages/extra-components/calendar-kit',
          },
          {
            title: 'Chat',
            link: '/pages/extra-components/chat',
          },
        ],
      },
      {
        title: 'Maps',
        icon: 'map-outline',
        children: [
          {
            title: 'Google Maps',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Leaflet Maps',
            link: '/pages/maps/leaflet',
          },
          {
            title: 'Bubble Maps',
            link: '/pages/maps/bubble',
          },
          {
            title: 'Search Maps',
            link: '/pages/maps/searchmap',
          },
        ],
      },
      {
        title: 'Charts',
        icon: 'pie-chart-outline',
        children: [
          {
            title: 'Echarts',
            link: '/pages/charts/echarts',
          },
          {
            title: 'Charts.js',
            link: '/pages/charts/chartjs',
          },
          {
            title: 'D3',
            link: '/pages/charts/d3',
          },
        ],
      },
      {
        title: 'Editors',
        icon: 'text-outline',
        children: [
          {
            title: 'TinyMCE',
            link: '/pages/editors/tinymce',
          },
          {
            title: 'CKEditor',
            link: '/pages/editors/ckeditor',
          },
        ],
      },
      {
        title: 'Tables & Data',
        icon: 'grid-outline',
        children: [
          {
            title: 'Smart Table',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Tree Grid',
            link: '/pages/tables/tree-grid',
          },
        ],
      },
      {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
          {
            title: '404',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
        ],
      },
    ];

    return of([...menu]);
  }
}
