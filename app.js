
import {page, render} from './src/lib.js';
import { contactPage } from './src/views/contactSection.js';
import { detailsPage } from './src/views/detailsPage.js';
import { mediaPage } from './src/views/mediaSection.js';
import { servicesPage } from './src/views/servicesSection.js';
import { teamPage } from './src/views/teamSection.js';

const root = document.querySelector('main');

page(decorateContext);
page('/', teamPage);
page('/team', teamPage);
page('/media', mediaPage);
page('/services', servicesPage);
page('/contact', contactPage);
page('/details/:id', detailsPage);


page.start();



function decorateContext(ctx, next){
  ctx.render = (content) => render(content, root);

  next();
}

