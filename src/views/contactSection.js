import { html } from "../lib.js";


const contactSectionTemplate = () => html`
<div class="w3-container w3-padding-64 w3-theme-l5" id="contact">
  <div class="contact-grid">

    

      <section id="contactInfo">
          <div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Contact Us On</span></div>
              <h3>Address</h3>
      
             <p><i class="fa fa-map-marker w3-text-teal w3-xlarge"></i> Sofia, Bulgaria</p>
             <p><i class="fa fa-phone w3-text-teal w3-xlarge"></i> +359 8986 652 64</p>
             <p><i class="fa fa-envelope-o w3-text-teal w3-xlarge"></i> routeset@it.com</p>
         
      </section>
     <section>
     <p class="youCanTrustUsParagraph">Routesetting is a specific art mastery.
          <div class="youCanTrustUsParagraph">
            Our techniques have been tested and developed with the love for the sport.
          </div>
          <div class="youCanTrustUsParagraph">
            You can trust our passion of creating.
           </div>
        
     </p>
    </section>
  </div>
</div>
` 

export function contactPage(ctx){
       
    ctx.render(contactSectionTemplate());

}