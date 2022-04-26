import { html } from "../lib.js";
import {members} from '../../templates/members.js';







const teamSectionTemplate = (members) => html`
    <div class="backGround " id="team">
         <div class="w3-container w3-padding-64 w3-center centeredContent symertry job-descripion"  >
             <br>
          <h2>OUR TEAM</h2>
       
    
    <div id="teamJobDescription">
         <p>We are experienced climbers from Bulgaria who develop the ability and art of routesetting. We all do our job with love and satisfaction which is the most important ingredient for great results. Our team is best balanced with young and motivated climbers who have a lot of experience in the field and more experienced professionalists who know which is the best in every situation. So meet our climbing dedicated team and do not hesitate to <a href="/contact">contact us</a>.
    </div>

    <article class="team-table">
        ${members.map((member) => html`
        <section class="container">
         <img src=${member.img} alt="${member.name}" class="setterImg">
         <div class="middle"> 
                <a href="/details/${member.id}" class="setter-details">Details</a>                      
         </div>
         <div class="polaroid-effect-container"><div>${member.name}</div>
            <div>Harderst route: ${member.harderstRoute} <br>  Hardest boulder: ${member.hardestBoulder}</div></div> 
        </section>
          `)}
    </article>

<div class="w3-row"><br>
` 

export function teamPage(ctx){

    ctx.render(teamSectionTemplate(members));

}