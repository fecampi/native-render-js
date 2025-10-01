import { App, Page, StackLayout, Text, Button, Slider } from "native-render-core";

// Cria um layout principal
const mainLayout = new StackLayout();
mainLayout.orientation = "vertical";
mainLayout.style.alignItems = "center";
mainLayout.style.justifyContent = "center";
mainLayout.style.height = "100vh";
mainLayout.style.gap = "32px";

// Texto de boas-vindas
const helloText = new Text("Bem-vindo ao Native Render JS!");
helloText.style.fontSize = "2rem";
helloText.style.color = "#fff";
mainLayout.add(helloText);

// Botão simples
const button = new Button("Clique aqui");
button.style.backgroundColor = "#007bff";
button.style.color = "#fff";
button.style.padding = "1em 2em";
button.style.borderRadius = "1em";
button.on("tap", () => {
  helloText.text = "Botão clicado!";
});
mainLayout.add(button);

// Slider simples
const slider = new Slider();
slider.minValue = 0;
slider.maxValue = 100;
slider.value = 50;
slider.style.width = "300px";
slider.style.margin = "16px 0";
mainLayout.add(slider);

// Texto que mostra o valor do slider
const sliderValue = new Text(`Valor do slider: ${slider.value}`);
sliderValue.style.color = "#fff";
slider.on("valueChange", (val) => {
  sliderValue.text = `Valor do slider: ${val}`;
});
mainLayout.add(sliderValue);

// Cria uma página e adiciona o layout principal
const page = new Page();
page.setContent(mainLayout);

// Inicializa o app corretamente
App.start(page);
