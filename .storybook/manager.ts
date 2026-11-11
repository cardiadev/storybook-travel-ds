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
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: #585c6d;
  text-align: center;
}
#${FOOTER_ID} a,
#${FOOTER_ID} a:visited {
  color: #10162f;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
#${FOOTER_ID} a:hover,
#${FOOTER_ID} a:focus-visible {
  color: #3a10e5;
  border-bottom-color: #3a10e5;
  outline: none;
}
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
    'Made by <a href="https://carlosdiaz.dev" target="_blank" rel="noopener noreferrer">Carlos Diaz</a>';
  sidebar.appendChild(footer);
}

new MutationObserver(mountFooter).observe(document.body, {
  childList: true,
  subtree: true,
});
mountFooter();
