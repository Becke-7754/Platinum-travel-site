import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientPage from "./modules/ClientPage";

// React belonging codes

import React from "react";
import ReactDOM from "react-dom";

function MyReactComponent() {
  return (
    <div>
      <h1>Энэ бол React component</h1>
      <p> React бол гайхалтай</p>
    </div>
  );
}

ReactDOM.render(
  <MyReactComponent />,
  document.querySelector("my-react-example")
);

new ClientPage();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 90);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal" */ "./modules/modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("Файлыг дуудхад алдаа гарлаа"));
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
