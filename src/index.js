import "./styles/main.scss";
import "iconify-icon";

import logoSvg from "./assets/logo.svg";

// Select the current image.
const logo = document.querySelector(".logo-svg");

// Create a new dom parser to turn the SVG string into an element.
const parser = new DOMParser();

// Fetch the file from the server.
fetch(logoSvg)
    .then((response) => response.text())
    .then((text) => {
        // Turn the raw text into a document with the svg element in it.
        const parsed = parser.parseFromString(text, "text/html");

        // Select the <svg> element from that document.
        const svg = parsed.querySelector("svg");

        console.log("svg", svg);

        // If both the image and svg are found, replace the image with the svg.
        if (logo !== null && svg !== null) {
            logo.replaceWith(svg);
        }
    });

