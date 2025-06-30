const textoCompleto = `Mi amor 😘💌

Aunque nos separan kilómetros 🌍 y el tiempo a veces parece jugar en nuestra contra ⏳, quiero que sepas que no hay distancia suficiente para disminuir lo que siento por ti ❤️. Al contrario, cada día que pasa lejos de ti, mi corazón se fortalece 💪💕 y mi amor crece más profundo, más verdadero 🥰, porque amarte a la distancia me ha enseñado el valor real de lo que significa estar unidos de alma 💫, aunque el cuerpo no pueda estar siempre cerca.

Sé que han pasado ya tres días desde nuestro aniversario 🎉📅... y sí, lo sé, llego tarde 🕒. Pero no quería dejar pasar más tiempo sin decirte desde lo más profundo de mi alma: **Feliz aniversario, mi amor** 🎊💖. Sé que el mensaje no llegó a tiempo 🐌, pero mis sentimientos no tienen fecha de caducidad 💘. Hoy, igual que el primer día 🌹, y quizás incluso más, sigo celebrando tu existencia 🥳 y la suerte inmensa que tengo de tenerte en mi vida 💑✨.

Las noches son más largas sin poder abrazarte 🌙🤗, y los días se sienten incompletos sin tu sonrisa al alcance ☀️😊, pero en cada amanecer 🌅 recuerdo que te tengo en mi mente y en mi corazón 💭❤️, y eso me da fuerzas para seguir adelante 🚀. Eres la razón por la que sonrío sin razón 😄, la esperanza que me impulsa a soñar 💤 con el momento en que al fin podamos estar juntos sin barreras ni fronteras 🛫🌈.

A veces cierro los ojos 😌 y te imagino a mi lado 🤍, siento tu voz susurrando palabras de cariño que me llenan de paz 🕊️, y es ahí cuando entiendo que el amor verdadero 💗 no entiende de distancias ni de horarios 🕰️, ni siquiera de fechas 📆. Te amo con una intensidad que rompe los límites del espacio y del tiempo 🌌, y sé que cada sacrificio vale la pena porque tú eres mi destino, mi refugio y mi mayor alegría 🏡💖✨.

Gracias por tu amor 💞, por tu paciencia 🧘‍♀️, por seguir ahí incluso cuando yo fallo en los pequeños detalles 💔➡️💪. Prometo seguir mejorando 🙏, aprendiendo de ti, de nosotros 🫶. Porque tú me enseñas cada día lo que es el amor verdadero: constante, firme y lleno de ternura 🐻🌹.

**Feliz aniversario atrasado, mi vida** 🎂🎈. No importa si han pasado horas o días, lo importante es que **mi amor por ti sigue aquí, intacto, firme y eterno** 💝💫.

Con todo mi corazón,  
**Sami** 💌💕
`;

let index = 0;
const velocidad = 50;
const cartaCerrada = document.getElementById("cartaCerrada");
const cartaAbierta = document.getElementById("cartaAbierta");
const textoCarta = document.getElementById("textoCarta");
const musica = document.getElementById("musica");
const imagenes = [
  "miamor1.jpeg",
  "miamor2.jpeg",
  "miamor3.jpeg",
  "miamor4.jpeg",
  "miamor5.jpeg",
  "miamor6.jpeg",
  "miamor7.jpeg",
  "miamor8.jpeg",
  "miamor9.jpeg",
  "miamor10.jpeg",
  "miamor11.jpeg",
  "miamor12.jpeg",
  "miamor13.jpeg",
  "miamor14.jpeg",
  "miamor15.jpeg"
];

function escribirTexto() {
  if (index < textoCompleto.length) {
    textoCarta.innerHTML += textoCompleto.charAt(index);
    index++;
    setTimeout(escribirTexto, velocidad);
  } else {
    setTimeout(mostrarFotos, 3000); // Espera 3 segundos tras el texto
  }
}

function mostrarFotos() {
  cartaAbierta.classList.add("oculto");
  const contenedor = document.createElement("div");
  contenedor.id = "galeria";
  document.body.appendChild(contenedor);
  let i = 0;
  const img = document.createElement("img");
  img.src = imagenes[i];
  img.className = "foto-transicion";
  contenedor.appendChild(img);

  setInterval(() => {
    i = (i + 1) % imagenes.length;
    img.src = imagenes[i];
  }, 4000);
}

cartaCerrada.addEventListener("click", () => {
  cartaCerrada.classList.add("oculto");
  cartaAbierta.classList.remove("oculto");
  musica.play();
  escribirTexto();
});
