import { galleryItems } from "./gallery-items.js";
import template from "../templates/template.hbs";
import "../css/common.css";
import "../css/styles.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imagesList = document.querySelector(".gallery");

function makeImgMarkup(obj) {
  return template(obj);
}

function appendImages(list) {
  return (list.innerHTML = makeImgMarkup(galleryItems));
}
appendImages(imagesList);

const lightbox = new SimpleLightbox(".gallery a");
