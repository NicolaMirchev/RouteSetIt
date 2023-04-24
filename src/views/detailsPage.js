import { html } from "../lib.js";
import { members } from "../../templates/members.js";

const detailsSectionTemplate = (member) => html`
  <div class="backGround " id="team">
    <div class="w3-container w3-padding-64 w3-center centeredContent symertry">
      <h2 class="names">${member.name}</h2>
      <div class="setter-settingExperience">
        <div>${member.details}</div>
        <div><img src="${member.img2}" alt="${member.name}" /></div>
      </div>
      <br />

      <div class="setter-settingExperience">
        <div><img src="${member.img3}" alt="${member.name}" /></div>
        <div>${member.details2}</div>
      </div>
    </div>
  </div>
`;

export function detailsPage(ctx) {
  const member = members.filter((member) => member.id == ctx.params["id"]);

  ctx.render(detailsSectionTemplate(member[0]));
}
