import {Slide, SlideNav} from "./slide.js";

const slide = new SlideNav('.slide', '.wrapper');
slide.init()
slide.addArrow('.prev', '.next')

slide.addControl('.custom-controls');