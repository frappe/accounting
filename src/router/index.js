import Vue from 'vue';
import Router from 'vue-router';
import coreRoutes from 'frappejs/ui/routes';

import SetupWizard from '../pages/SetupWizard';
import Report from 'frappejs/ui/pages/Report';
import reportViewConfig from '../../reports/view';
import POS from '../pages/PointOfSale/POS'
Vue.use(Router);

const routes = [].concat(coreRoutes, [
  {
    path: '/setup-wizard',
    name: 'SetupWizard',
    components: {
      setup: SetupWizard
    }
  },
  {
    path: '/report/:reportName',
    name: 'Report',
    component: Report,
    props: (route) => {
      const { reportName } = route.params;
      return {
        reportName,
        reportConfig: reportViewConfig[reportName] || null
      };
    }
  },
  {
    path: '/pos/',
    name: 'POS',
    component: POS,
    props: true
  },
]);

export default new Router({ routes });
