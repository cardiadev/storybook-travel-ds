import { addons } from "storybook/manager-api";
import yourTheme from "./YourTheme";

addons.setConfig({ theme: yourTheme });

/**
 * Sidebar footer: "Made by Carlos Diaz" with a link to carlosdiaz.dev.
 * Storybook has no public API for a sidebar footer, so it is attached to the
 * sidebar region and re-attached if the manager re-renders it.
 */
const FOOTER_ID = "ds-sidebar-footer";

const STYLE = `
#${FOOTER_ID} {
  flex: 0 0 auto;
  padding: 14px 20px;
  border-top: 1px solid #e4e7ec;
  background: #fff;
  font: 13px/1.4 "Open Sans", sans-serif;
  color: #585c6d;
  text-align: center;
}
#${FOOTER_ID} a {
  color: #3a10e5;
  font-weight: 600;
  text-decoration: none;
}
#${FOOTER_ID} a:hover { text-decoration: underline; }
`;

function mountFooter() {
  const sidebar = document.getElementById("storybook-sidebar-region");
  if (!sidebar || document.getElementById(FOOTER_ID)) return;

  if (!document.getElementById(`${FOOTER_ID}-style`)) {
    const style = document.createElement("style");
    style.id = `${FOOTER_ID}-style`;
    style.textContent = STYLE;
    document.head.appendChild(style);
  }

  const footer = document.createElement("div");
  footer.id = FOOTER_ID;
  footer.innerHTML =
    'Made by ' +
    '<a href="https://carlosdiaz.dev" target="_blank" rel="noopener noreferrer">Carlos Diaz</a>' +
    '<br /><a href="https://carlosdiaz.dev" target="_blank" rel="noopener noreferrer" style="font-weight:400">carlosdiaz.dev</a>';
  sidebar.appendChild(footer);
}

new MutationObserver(mountFooter).observe(document.body, {
  childList: true,
  subtree: true,
});
mountFooter();
