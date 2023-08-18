import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import "./data/translation.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
