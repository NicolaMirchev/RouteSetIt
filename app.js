
import {page, render} from './src/lib.js';
import { contactPage } from './src/views/contactSection.js';
import { detailsPage } from './src/views/detailsPage.js';
import { mediaPage } from './src/views/mediaSection.js';
import { servicesPage } from './src/views/servicesSection.js';
import { teamPage } from './src/views/teamSection.js';

const root = document.querySelector('main');

page(decorateContext);
page('/', teamPage);
page('/RouteSettIt', teamPage);
page('/index.html', teamPage);
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

// const teamParticipants = document.querySelector('.w3-row');
// teamParticipants.childNodes.forEach(e => e.addEventListener('click', learnMore));



// function learnMore(event){

//     if(event.target.tagName =='A'){
//         console.log(event.target);
//         const parentSection = event.target.parentNode;
//         const infoSec = Array.from(parentSection.childNodes).find(n => n.className == 'Setter-more-info');
//         infoSec.style.display = 'block';
//         infoSec.children[0].style.display = 'block';
//         event.target.style.display = 'none';

//         infoSec.childNodes[0].addEventListener('click', (ev) => console.log(ev));
        
//     }

// }
