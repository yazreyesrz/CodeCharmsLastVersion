const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "code-charms.showPanel",
    () => {
      const panel = vscode.window.createWebviewPanel(
        "codeCharms",
        "Code Charms",
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
          localResourceRoots: [
            vscode.Uri.joinPath(context.extensionUri, "media"),
          ],
        }
      );

      // Referencias a imágenes existentes
      const koalaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "koala.png")
      );
      const medusaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "medusa.png")
      );
      const bubbleUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "burbujas.png")
      );
      const cloudUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "nube.png")
      );
      const fondoAzulUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "fondoAzul.png")
      );
      const fondoKoalaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "fondoKoala.jpg")
      );
      const morsaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "morsa.png")
      );
      const copoNieveUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "copoNieve.png")
      );
      const tortugaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "tortuga.png")
      );
      const marUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "mar.jpeg")
      );
      const montanasUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "montanas.jpeg")
      );
      const buzoUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "buzo.png")
      );
      const pezPayasoUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "pezPayaso.png")
      );
      const pezAzulUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "pezAzul.png")
      );
      // Nuevas referencias para animaciones agregadas
      const pajaroUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "pajaro.png")
      );
      const fondoPajaroUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "cieloPajaro.jpg")
      );
      const serpienteUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "serpiente.png")
      );
      const fondoSerpienteUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "fondoSerpiente.jpg")
      );
      const gotaUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "media", "gota.jpg")
      );

      panel.webview.html = getWebviewContent(
        koalaUri,
        medusaUri,
        bubbleUri,
        cloudUri,
        fondoAzulUri,
        fondoKoalaUri,
        morsaUri,
        copoNieveUri,
        tortugaUri,
        marUri,
        montanasUri,
        buzoUri,
        pezPayasoUri,
        pezAzulUri,
        pajaroUri,
        fondoPajaroUri,
        serpienteUri,
        fondoSerpienteUri,
        gotaUri
      );
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent(
  koalaUri,
  medusaUri,
  bubbleUri,
  cloudUri,
  fondoAzulUri,
  fondoKoalaUri,
  morsaUri,
  copoNieveUri,
  tortugaUri,
  marUri,
  montanasUri,
  buzoUri,
  pezPayasoUri,
  pezAzulUri,
  pajaroUri,
  fondoPajaroUri,
  serpienteUri,
  fondoSerpienteUri,
  gotaUri
) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
    body {
      margin: 0; padding: 0; overflow: hidden;
      background: transparent !important;
    }
    .container {
      position: fixed; bottom: 20px; right: 20px;
      width: 300px; height: 300px; border-radius: 15px;
      overflow: hidden; background: rgba(30,30,30,0.15);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255,255,255,0.15);
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      animation: slideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .selector {
      position: absolute; top: 10px; right: 10px;
      display: flex; gap: 8px; z-index: 9999; flex-wrap: wrap;
    }
    button {
      background: linear-gradient(145deg, rgba(60,60,60,0.95), rgba(40,40,40,0.95));
      color: white; border: none; padding: 5px 12px;
      border-radius: 20px; cursor: pointer; font-family: system-ui;
      font-weight: 600; font-size: 0.8em; transition: all 0.2s;
    }
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .animation-container {
      position: relative; width: 100%; height: 100%; overflow: hidden;
    }
    .oceano {
      position: absolute; width: 100%; height: 100%;
      background: url('${fondoAzulUri}') center/cover;
      opacity: 0.8; z-index: 0;
      filter: hue-rotate(10deg) blur(1px);
    }
    .fondo-koala {
      position: absolute; width: 100%; height: 100%;
      background: url('${fondoKoalaUri}') center/cover;
      opacity: 0.9; z-index: 0;
      filter: brightness(0.8) contrast(1.1);
    }
    .fondo-mar {
      position: absolute; width: 100%; height: 100%;
      background: url('${marUri}') center/cover;
      opacity: 0.9; z-index: 0;
    }
    .fondo-nieve {
      position: absolute; width: 100%; height: 100%;
      background: url('${montanasUri}') center/cover;
      opacity: 0.9; z-index: 0;
    }
    .morsa {
      position: absolute; width: 120px; bottom: 10%;
      left: 50%; transform: translateX(-50%);
      z-index: 2;
    }
    .snowflake {
      position: absolute; top: -50px; width: 20px !important;
      animation: caerNieve 4s linear forwards; z-index: 3;
    }
    @keyframes caerNieve {
      0%   { transform: translateY(0);   opacity:1; }
      100% { transform: translateY(350px); opacity:0; }
    }

    /* Globo de diálogo */
    .speech-bubble {
      position: absolute;
      /* Ubicación del globo en la pantalla (ajústalo a tu preferencia) */
      bottom: 50%;
      left: 50%;
      transform: translateX(-50%);

      /* Estilos del globo */
      background: #000;
      color: #fff;
      padding: 8px 14px;
      border-radius: 12px;
      font-family: 'Comic Neue', cursive;
      font-size: 0.9em;
      z-index: 999;
      opacity: 0;
      animation: fadeInOut 5s forwards;
      display: inline-block; /* importante para el pseudo-elemento */
    }

    /* Triángulo (colita) que apunta hacia abajo */
    .speech-bubble::after {
      content: "";
      position: absolute;
      /* Para que el pico quede debajo del globo */
      top: 100%;        /* se ubica justo debajo del globo */
      left: 50%;        /* centrado horizontalmente */
      transform: translateX(-50%);
      
      /* Triángulo */
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #000; /* color igual al fondo del globo */
    }

    @keyframes fadeInOut {
      0%   { opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { opacity: 0; }
    }

    /* Animaciones Koala, Medusa, etc. */
    .jellyfish {
      position: absolute; animation: float 9s infinite ease-in-out;
      opacity: 0.85; z-index: 2;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    }
    .bubble-img {
      position: absolute; animation: bubble 7s infinite linear;
      opacity: 0.6; z-index: 3;
    }
    .zzz {
      position: absolute; color: white;
      font-family: 'Comic Neue', cursive; font-size: 24px;
      font-weight: bold; animation: zzz 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
      opacity: 0; pointer-events: none;
      filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));
      z-index: 999; text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    }
    .cloud {
      position: absolute; animation: cloudMove 30s infinite linear;
      opacity: 0.6; width:80px; z-index:0;
    }
    .koala-container {
      position: absolute; bottom:30px; left:20%;
      z-index:2; transform: scale(1.2);
    }
    @keyframes slideIn {
      0% { transform: translateY(100%); opacity:0; }
      100%{ transform: translateY(0);   opacity:1; }
    }
    @keyframes float {
      0%,100% { transform: translateY(0) rotate(-5deg); }
      50% { transform: translateY(-25px) rotate(5deg); }
    }
    @keyframes bubble {
      0% { opacity:0; transform: translateY(0); }
      30%{ opacity:0.9; }
      100%{ opacity:0; transform: translateY(-200px); }
    }
    @keyframes zzz {
      0% { opacity:0; transform: translate(-15px,0) scale(0.8); }
      50%{ opacity:0.8; transform: translate(0,-40px) scale(1.2); }
      100%{ opacity:0; transform: translate(15px,-80px) scale(0.8); }
    }
    @keyframes cloudMove {
      0% { left:-100px; }
      100%{ left:100%; }
    }

    /* Nuevos estilos para animaciones agregadas */
    .bird {  
        position: absolute;  
        width: 60px;  
        animation: fly 6s infinite linear;  
        z-index: 2;  
    }

    .serpiente {  
        position: absolute;  
        bottom: 0;  
        left: -100%;  
        animation: serpienteMove 40s linear infinite;  
        z-index: 2;  
    }

    .serpiente-img {  
        width: 100px;  
        height: auto;  
    }

    .rain-drop {
        position: absolute;
        top: -10px;
        width: 2px;
        height: 15px;
        background: rgba(255, 255, 255, 0.7);
        opacity: 0.8;
        animation: rain 3s linear infinite;
    }

    .fondo-pajaro {  
        position: absolute;  
        width: 100%;  
        height: 100%;  
        background: url('${fondoPajaroUri}') center/cover;  
        opacity: 0.9;  
        z-index: 0;  
        filter: brightness(0.8) contrast(1.1);  
    }

    .fondo-serpiente {  
        position: absolute;  
        width: 100%;  
        height: 100%;  
        background: url('${fondoSerpienteUri}') center/cover;  
        opacity: 0.7;  
        z-index: 0;  
        filter: brightness(0.6) contrast(1.1);  
    }

    @keyframes fly {  
        0% { left: -10%; top: 40%; transform: rotate(0deg); }  
        50% { top: 20%; transform: rotate(15deg); }  
        100% { left: 110%; top: 50%; transform: rotate(-15deg); }  
    }

    @keyframes serpienteMove {  
        0% { left: -200px; transform: scaleX(1); }  
        50% { left: 100%; transform: scaleX(1); }  
        51% { transform: scaleX(-1); }  
        100% { left: -200px; transform: scaleX(-1); }  
    }

    @keyframes rain {
        0% { top: -10px; opacity: 0.8; }
        100% { top: 100%; opacity: 0.2; }
    }

    .selector {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 9999;
    }

    .selector select {
      background: rgba(40, 40, 40, 0.9);
      color: white;
      padding: 6px 12px;
      border-radius: 10px;
      border: none;
      font-family: system-ui;
      font-size: 0.85em;
      font-weight: 600;
      cursor: pointer;
      outline: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="selector">
      <select id="sceneSelector">
        <option value="koala">Koala</option>
        <option value="medusa">Medusa</option>
        <option value="morsa">Morsa</option>
        <option value="tortuga">Tortuga</option>
        <option value="pajaro">Pájaro</option>
        <option value="serpiente">Serpiente</option>
      </select>
    </div>
    <div id="animContainer" class="animation-container"></div>
  </div>

  <script>
  (function() {
    // === OBJETO IMÁGENES ===
    const images = {
      koala: "${koalaUri}",
      medusa: "${medusaUri}",
      bubble: "${bubbleUri}",
      cloud: "${cloudUri}",
      fondoAzul: "${fondoAzulUri}",
      fondoKoala: "${fondoKoalaUri}",
      morsa: "${morsaUri}",
      copoNieve: "${copoNieveUri}",
      tortuga: "${tortugaUri}",
      mar: "${marUri}",
      montanas: "${montanasUri}",
      buzo: "${buzoUri}",
      pezPayaso: "${pezPayasoUri}",
      pezAzul: "${pezAzulUri}",
      pajaro: "${pajaroUri}",
      serpiente: "${serpienteUri}",
      fondoPajaro: "${fondoPajaroUri}",
      fondoSerpiente: "${fondoSerpienteUri}",
      gota: "${gotaUri}"
    };

    // === Variables globales de animación ===
    let animationIntervals = [];
    let bubbleCount = 0; // para medusa
    const maxBubbles = 6;

    // === Limpieza de intervalos y contenedor ===
    function clearAnimations() {
      animationIntervals.forEach(clearInterval);
      animationIntervals = [];
      document.getElementById('animContainer').innerHTML = '';
      bubbleCount = 0;
    }

    // === Zzz para Koala ===
    function createZZZ() {
      const zzz = document.createElement('div');
      zzz.className = 'zzz';
      zzz.textContent = 'Zzz';
      zzz.style.left = Math.random()*80 + 10 + '%';
      zzz.style.bottom = '30%';
      zzz.style.transform = 'translateX(-50%)';
      setTimeout(() => zzz.remove(), 4000);
      return zzz;
    }

    /************************
     * 1) Escena Koala
     ************************/
    function createKoalaScene() {
      const container = document.getElementById('animContainer');
      // Fondo Koala
      const fondo = document.createElement('div');
      fondo.className = 'fondo-koala';
      container.appendChild(fondo);

      // Koala
      const koalaContainer = document.createElement('div');
      koalaContainer.className = 'koala-container';
      const img = document.createElement('img');
      img.src = images.koala;
      img.style.width = '260px';
      koalaContainer.appendChild(img);
      container.appendChild(koalaContainer);

      function createCloud() {
        const cloud = document.createElement('img');
        cloud.className = 'cloud';
        cloud.src = images.cloud;
        cloud.style.top = Math.random()*60 + 10 + '%';
        cloud.style.width = 80 + Math.random()*60 + 'px';
        cloud.addEventListener('animationend', () => {
          cloud.remove();
        });
        return cloud;
      }

      // Zzz cada 2.5s, nubes cada 20s
      animationIntervals.push(
        setInterval(() => container.appendChild(createZZZ()), 2500),
        setInterval(() => {
          const existingClouds = container.getElementsByClassName('cloud').length;
          if(existingClouds < 3) container.appendChild(createCloud());
        }, 20000)
      );
    }

    /************************
     * 2) Escena Medusa
     ************************/
    function createMedusaScene() {
      const container = document.getElementById('animContainer');
      // Fondo oceánico
      const fondo = document.createElement('div');
      fondo.className = 'oceano';
      container.appendChild(fondo);

      // Medusas
      for(let i=0; i<5; i++){
        const jelly = document.createElement('img');
        jelly.className = 'jellyfish';
        jelly.src = images.medusa;
        jelly.style.width = (80 + Math.random()*60)+'px';
        jelly.style.left = (Math.random()*90)+'%';
        jelly.style.bottom = (Math.random()*50 + 20)+'%';
        jelly.style.animationDuration = (8 + Math.random()*4)+'s';
        container.appendChild(jelly);
      }

      // Burbujas
      function createBubble() {
        if(bubbleCount >= maxBubbles) return null;
        const bubble = document.createElement('img');
        bubble.className = 'bubble-img';
        bubble.src = images.bubble;
        bubble.style.width = (15 + Math.random()*20)+'px';
        bubble.style.left = Math.random()*95 + '%';
        bubble.style.bottom = '10px';
        bubble.onanimationend = () => {
          bubble.remove();
          bubbleCount--;
        };
        bubbleCount++;
        return bubble;
      }

      animationIntervals.push(
        setInterval(() => {
          if(Math.random() < 0.25){
            const bub = createBubble();
            if(bub) container.appendChild(bub);
          }
        },6000)
      );
    }

    /************************
     * 3) Escena Morsa
     ************************/
    // Frases motivacionales
    const motivationalPhrases = [
      "No te rindas",
      "Tú puedes lograrlo",
      "Ya falta poco",
      "Sigue adelante",
      "Confía en ti"
    ];

    function showRandomPhrase(container) {
      const bubble = document.createElement('div');
      bubble.className = 'speech-bubble';
      // frase aleatoria
      bubble.textContent = motivationalPhrases[Math.floor(Math.random()*motivationalPhrases.length)];
      container.appendChild(bubble);
      // remover tras 5s
      setTimeout(() => bubble.remove(), 10000);
    }

    function createMorsaScene() {
      const container = document.getElementById('animContainer');

      // Fondo montañas
      const fondoMontanas = document.createElement('div');
      fondoMontanas.className = 'fondo-nieve';
      container.appendChild(fondoMontanas);

      // Morsa estática
      const morsaEl = document.createElement('img');
      morsaEl.src = images.morsa;
      morsaEl.className = 'morsa';
      container.appendChild(morsaEl);

      // Copos de nieve
      function createSnowflake(){
        const snowflake = document.createElement('img');
        snowflake.src = images.copoNieve;
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random()*100 + '%';
        const duration = 3 + Math.random()*3;
        snowflake.style.animationDuration = duration + 's';
        container.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), duration*1000);
      }

      // Intervalo de copos (cada 500ms)
      animationIntervals.push(
        setInterval(createSnowflake, 500)
      );

      // Globito cada 30s
      animationIntervals.push(
        setInterval(() => showRandomPhrase(container), 30000)
      );
    }

    /*************************
     * 4) Escena Tortuga
     *************************/
    function createTortugaScene(){
      const container = document.getElementById('animContainer');
      // Fondo mar
      const fondoMar = document.createElement('div');
      fondoMar.className = 'fondo-mar';
      container.appendChild(fondoMar);

      // Crear tortugas cada 2s
        animationIntervals.push(
          setInterval(createTurtle, 5000)
        );

        // Crear buzo/pezPayaso/pezAzul ocasionalmente
        animationIntervals.push(
          setInterval(() => {
            // 20% de probabilidad (ajusta a tu gusto)
            if (Math.random() < 0.6) {
              createRandomCreature(container);
            }
          }, 20000)
        );

      // Tortugas nadando
      function createTurtle(){
        const turtle = document.createElement('img');
        turtle.src = images.tortuga;
        turtle.style.position='absolute';
        turtle.style.width=(50+Math.random()*40)+'px';
        turtle.style.left='-60px';
        turtle.style.bottom=(Math.random()*50+20)+'%';
        turtle.style.zIndex=2;

        let xPos=-60;
        const speed=1+Math.random()*1.5;
        const swimInterval=setInterval(()=>{
          xPos+=speed;
          turtle.style.left=xPos+'px';
          if(xPos>350){
            clearInterval(swimInterval);
            turtle.remove();
          }
        },50);

        container.appendChild(turtle);
      }

      animationIntervals.push(
        setInterval(createTurtle,5000)
      );
    }
    
    function createRandomCreature(container) {
      const creatures = ["buzo", "pezPayaso", "pezAzul"];
      const chosen = creatures[Math.floor(Math.random() * creatures.length)];

      const creature = document.createElement('img');
      creature.src = images[chosen];
      creature.style.position = 'absolute';

      // Tamaño especial para pezAzul
      if (chosen === 'pezAzul') {
        creature.style.width = '180px'; // o el valor que quieras
      } else {
        creature.style.width = (50 + Math.random() * 40) + 'px';
      }

      // Posición vertical aleatoria
      creature.style.bottom = (Math.random() * 50 + 20) + '%';
      creature.style.zIndex = 2;

      if (chosen === "buzo" || chosen === "pezPayaso") {
        // Empiezan a la derecha y van a la izquierda
        let xPos = 350;
        creature.style.left = xPos + 'px';

        const speed = 1 + Math.random() * 1;
        const swimInterval = setInterval(() => {
          xPos -= speed; // restamos
          creature.style.left = xPos + 'px';
          if (xPos < -60) {
            clearInterval(swimInterval);
            creature.remove();
          }
        }, 50);

        } else {
          // (pezAzul u otros) de izq a der
          let xPos = -60;
          creature.style.left = xPos + 'px';

          const speed = 1 + Math.random() * 1;
          const swimInterval = setInterval(() => {
            xPos += speed;
            creature.style.left = xPos + 'px';
            if (xPos > 350) {
              clearInterval(swimInterval);
              creature.remove();
            }
          }, 50);
        }

        container.appendChild(creature);
      }

    // === Funciones de animación agregadas ===
    function createBirdScene() {  
        const container = document.getElementById('animContainer');  
        const fondo = document.createElement('div');  
        fondo.className = 'fondo-pajaro';  
        container.appendChild(fondo);  

        const bird = document.createElement('img');  
        bird.className = 'bird';  
        bird.src = images.pajaro;  
        bird.style.top = Math.random() * 40 + 30 + '%'; 
        container.appendChild(bird);

        function moveBird() {  
            bird.style.left = -bird.offsetWidth + 'px';  
            bird.style.top = Math.random() * 20 + 20 + '%'; 
            bird.style.transition = 'left 4s linear';  

            setTimeout(() => {  
                bird.style.left = '100%';  
            }, 50);  
        }

        moveBird();  
        animationIntervals.push(setInterval(moveBird, 6000));  
    }

    function createSerpienteScene() {  
        const container = document.getElementById('animContainer');  
        const fondo = document.createElement('div');  
        fondo.className = 'fondo-serpiente';  
        container.appendChild(fondo);  

        const serpiente = document.createElement('img');  
        serpiente.className = 'serpiente';  
        serpiente.src = images.serpiente;  
        serpiente.classList.add("serpiente-img");  
        container.appendChild(serpiente);  

        function createRain() {
            const rainDrop = document.createElement('div');
            rainDrop.className = 'rain-drop';
            rainDrop.style.left = Math.random() * 100 + '%'; 
            rainDrop.style.animationDuration = (1 + Math.random() * 2) + 's'; 
            container.appendChild(rainDrop);

            rainDrop.addEventListener('animationend', () => {
                rainDrop.remove();
            });
        }

        animationIntervals.push(setInterval(() => {
            if (document.getElementsByClassName('rain-drop').length < 60) {
                createRain();
            }
        }, 300));  
    }

    // === Función para cambiar de escena
    function showAnimation(type){
      clearAnimations();
      if(type==='koala')   createKoalaScene();
      else if(type==='medusa') createMedusaScene();
      else if(type==='morsa')  createMorsaScene();
      else if(type==='tortuga')createTortugaScene();
      else if(type==='pajaro') createBirdScene(); // Nueva
      else if(type==='serpiente') createSerpienteScene(); // Nueva
    }

    document.addEventListener('DOMContentLoaded',()=>{
      document.getElementById('koalaBtn').addEventListener('click',()=>showAnimation('koala'));
      document.getElementById('medusaBtn').addEventListener('click',()=>showAnimation('medusa'));
      document.getElementById('morsaBtn').addEventListener('click',()=>showAnimation('morsa'));
      document.getElementById('tortugaBtn').addEventListener('click',()=>showAnimation('tortuga'));
      document.getElementById('birdBtn').addEventListener('click',()=>showAnimation('pajaro'));
      document.getElementById('serpienteBtn').addEventListener('click',()=>showAnimation('serpiente'));

      // Escena inicial
      showAnimation('koala');
    });

    document.addEventListener('DOMContentLoaded', () => {
      const selector = document.getElementById('sceneSelector');
      selector.addEventListener('change', (e) => {
        showAnimation(e.target.value);
      });
    
      // Escena inicial
      showAnimation('koala');
    });
  })();
  </script>
</body>
</html>`;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
