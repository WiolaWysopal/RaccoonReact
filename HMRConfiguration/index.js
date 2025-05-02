import { header } from "./header.js";
import { content } from "./content.js";
import { footer } from "./footer.js";
import "./style.css";

const myApp = document.getElementById("app");
myApp.appendChild(header());
myApp.appendChild(content());
myApp.appendChild(footer());
