import { Items } from "./object/Project.js";

document.addEventListener("DOMContentLoaded", () => {
    const itemGrid = document.getElementById("itemGrid");

    Items.forEach(item => {

        const template = document.getElementById("itemTemplate");
        const clone = template.content.cloneNode(true);

        console.log(`object/${item.path}`);

        clone.querySelector(".WhiteText").textContent = item.name;
        clone.querySelector(".WhiteText").nextElementSibling.textContent = item.description;
        clone.querySelector(".WhiteText").nextElementSibling.nextElementSibling.textContent = `Total Amount : ${item.path.length}`;

        itemGrid.appendChild(clone);
    });
});
