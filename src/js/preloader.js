import { target, spinner } from './spinner.js';

spinner.spin(target)
window.addEventListener("load", function(event) {
   spinner.stop();
  });