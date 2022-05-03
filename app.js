
import {page, render} from './src/lib.js';
import { contactPage } from './src/views/contactSection.js';
import { detailsPage } from './src/views/detailsPage.js';
import { mediaPage } from './src/views/mediaSection.js';
import { servicesPage } from './src/views/servicesSection.js';
import { teamPage } from './src/views/teamSection.js';

const root = document.querySelector('main');

page(decorateContext);
page('/', teamPage);
page('https://routesetit.com/index.html', teamPage);
page('https://routesetit.com/media', mediaPage);
page('https://routesetit.com/services', servicesPage);
page('https://routesetit.com/contact', contactPage);
page('https://routesetit.com/details/:id', detailsPage);


page.start();



function decorateContext(ctx, next){
  ctx.render = (content) => render(content, root);

  next();
}

