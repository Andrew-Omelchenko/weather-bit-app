import { WeatherController } from "./controllers/controller";

window.onload = function() {
  let weatherController = new WeatherController(document, window);
  weatherController.start(window.location.href);
};
