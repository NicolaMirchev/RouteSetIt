import { photos } from "../../templates/mediaPhotos.js";
import { html } from "../lib.js";


const mediaSectionTemplate = (photos) => html`
<div class="w3-row-padding w3-padding-64" id="media">

<div class="media-width">
<h2>Our Work</h2>
<p>Here we upload materials like video and photo of projects that we have accomplished. We also post in our social medias.</p>
<div class="iframe-container">
<iframe id="youtube-link" src="https://www.youtube.com/embed/mRD62UapYEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="contact-grid ">
 ${photos.map(p => html` <div> <img src="${p.photo}"> <p>${p.text}</p> </div>`) }
</div>
<br>



</div>


</div>
` 

export function mediaPage(ctx){
       


    ctx.render(mediaSectionTemplate(photos));

}