import { services } from "../../templates/servicesData.js";
import { html } from "../lib.js";


const servicesSectionTemplate = (services) => html`
<div class="w3-row-padding w3-center w3-padding-64 backGround" id="services">
    <h2>Services</h2>
    <p>Here you can learn more about the diversity of the work and choose what fit's best to your idea</p><br>
    <div id="services-grid">
        ${services.map(s => html`
        <div>
                <div class="services-title">${s.title}</div>
                <div class="services-description">${s.description}</div>
             </div>
             <div class="services-img"><img src="${s.img}"></div>
    
             <div class="services-img">${s.img2}</div>
             <div>
        `) }
    </div>               
</div>


` 

export function servicesPage(ctx){

    
       
    ctx.render(servicesSectionTemplate(services));

}