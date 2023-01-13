let showoef = false;
window.addEventListener("load", loadeff);
window.addEventListener("keyup", ke);
function ke(t) {
    if ("l" === t.key) {
      return loadeff()}}

function loadeff() {
    if (showoef == false) {
      showoef = true;
      console.log("Overlay effects: ON");
    } else {
      showoef = false;
      console.warn("Overlay effects: OFF");}
    let month = new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(
      new Date()
    );
  
    if (month == "12" && showoef == true) {
      var embedimSnow = document.getElementById("embedim--snow");
      if (!embedimSnow) {
        function embRand(a, b) {
          return Math.floor(Math.random() * (b - a + 1)) + a;
        }
        var embCSS =
          ".embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}";
        var embHTML = "";
        for (i = 1; i < 200; i++) {
          embHTML += '<i class="embedim-snow"></i>';
          var rndX = embRand(0, 1000000) * 0.0001,
            rndO = embRand(-100000, 100000) * 0.0001,
            rndT = (embRand(3, 8) * 10).toFixed(2),
            rndS = (embRand(0, 10000) * 0.0001).toFixed(2);
          embCSS +=
            ".embedim-snow:nth-child(" +
            i +
            "){" +
            "opacity:" +
            (embRand(1, 10000) * 0.0001).toFixed(2) +
            ";" +
            "transform:translate(" +
            rndX.toFixed(2) +
            "vw,-10px) scale(" +
            rndS +
            ");" +
            "animation:fall-" +
            i +
            " " +
            embRand(10, 30) +
            "s -" +
            embRand(0, 30) +
            "s linear infinite" +
            "}" +
            "@keyframes fall-" +
            i +
            "{" +
            rndT +
            "%{" +
            "transform:translate(" +
            (rndX + rndO).toFixed(2) +
            "vw," +
            rndT +
            "vh) scale(" +
            rndS +
            ")" +
            "}" +
            "to{" +
            "transform:translate(" +
            (rndX + rndO / 2).toFixed(2) +
            "vw, 105vh) scale(" +
            rndS +
            ")" +
            "}" +
            "}";
        }
        embedimSnow = document.createElement("div");
        embedimSnow.id = "embedim--snow";
        embedimSnow.innerHTML =
          "<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}" +
          embCSS +
          "</style>" +
          embHTML;
        document.body.appendChild(embedimSnow);
      }
    }
  
    if (month == "11" || (month == "1" && showoef == true)) {
      var embedimRain = document.getElementById("embedim--rain");
      if (!embedimRain) {
        function embRand(a, b) {
          return Math.floor(Math.random() * (b - a + 1)) + a;
        }
        var embCSS =
          ".embedim-rain{position: absolute;width: 1px;height: 100px;background: white;border-radius: 50%;margin-top:-10px}";
        var embHTML = "";
        for (i = 1; i < 200; i++) {
          embHTML += '<i class="embedim-rain"></i>';
          var rndX = embRand(0, 1000000) * 0.0001,
            rndO = 0;
          (rndT = (embRand(3, 8) * 10).toFixed(2)),
            (rndS = (embRand(0, 10000) * 0.0001).toFixed(2));
          embCSS +=
            ".embedim-rain:nth-child(" +
            i +
            "){" +
            "opacity:" +
            (embRand(1, 10000) * 0.0001).toFixed(2) +
            ";" +
            "transform:translate(" +
            rndX.toFixed(2) +
            "vw,-10px) scale(" +
            rndS +
            ");" +
            "animation:fall-" +
            i +
            " " +
            embRand(0, 30) +
            "s -" +
            embRand(0, 30) +
            "s linear infinite" +
            "}" +
            "@keyframes fall-" +
            i +
            "{" +
            "%{" +
            "transform:translate(" +
            (rndX + rndO).toFixed(2) +
            "vw," +
            rndT +
            "vh) scale(" +
            rndS +
            ")" +
            "}" +
            "to{" +
            "transform:translate(" +
            (rndX + rndO / 2).toFixed(2) +
            "vw, 100vh) scale(" +
            rndS +
            ")" +
            "}" +
            "}";
        }
        embedimRain = document.createElement("div");
        embedimRain.id = "embedim--rain";
        embedimRain.innerHTML =
          "<style>#embedim--rain{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}" +
          embCSS +
          "</style>" +
          embHTML;
        document.body.appendChild(embedimRain);
      }
    }
  
    if (month == "11" && showoef == true) {
      var embedimCloud = document.getElementById("embedim--cloud");
      if (!embedimCloud) {
        function embRand(a, b) {
          return Math.floor(Math.random() * (b - a + 1)) + a;
        }
        var embCSS =
          ".embedim-cloud{position: absolute;width: 200px;height: 20px;background: white;border-radius: 100%;}";
        var embHTML = "";
        for (i = 1; i < 50; i++) {
          embHTML += '<i class="embedim-cloud"></i>';
          var rndX = embRand(0, 1000000) * 0.0001,
            rndO = 0,
            rndT = (embRand(3, 8) * 10).toFixed(2),
            rndS = (embRand(0, 10000) * 0.0001).toFixed(2);
          // update the % keyframe rule to keep the raindrops in the same vertical position
          embCSS +=
            ".embedim-cloud:nth-child(" +
            i +
            "){" +
            "margin-top:" +
            embRand(1, 100) +
            "px;" +
            "opacity:" +
            (embRand(1, 10000) * 0.0001).toFixed(2) +
            ";" +
            "transform:translate(" +
            rndX.toFixed(2) +
            "vw,0) scale(" +
            rndS +
            ");" +
            "animation:fall-" +
            i +
            " " +
            embRand(0, 30) +
            "s -" +
            embRand(0, 30) +
            "s linear infinite" +
            "}" +
            "@keyframes fall-" +
            i +
            "{" +
            "%{" +
            "transform:translateX(" +
            10 +
            "vw)" +
            "}" +
            "}";
        }
        var embedimRain = document.createElement("div");
        embedimRain.id = "embedim--cloud";
        embedimRain.innerHTML =
          "<style>#embedim--cloud{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}" +
          embCSS +
          "</style>" +
          embHTML;
        document.body.appendChild(embedimRain);
      }
    }
  
    if (month == "2" || (month == "3" && showoef == true)) {
      // Create the CSS styles
      const css = document.createTextNode(`
          #lens-flare {
          position: fixed;
          top: 10%;
          left: 75%;
          transform: translate(0%, 0%);
          width: 200px;
          height: 200px;
          }
  
          .ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 50px;
          background: yellow;
          border-radius: 50%;
          transform: translate(50%, 50%);
          }
  
          #lens-flare.animated .ray {
          animation: flare-animation 10s infinite linear;
          }
  
          @keyframes flare-animation {
          0% {
          transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          25% {
          transform: translate(-50%, -50%) rotate(45deg) scale(1.5);
          }
          50% {
          transform: translate(-50%, -50%) rotate(90deg) scale(2);
          }
          75% {
          transform: translate(-50%, -50%) rotate(135deg) scale(1.5);
          }
          100% {
          transform: translate(-50%, -50%) rotate(180deg) scale(1);
          }
          }
          `);
  
      // Create the style element
      const style = document.createElement("style");
      style.appendChild(css);
  
      // Add the style element to the head of the document
      document.head.appendChild(style);
  
      // Create the lens flare container element
      const lensFlare = document.createElement("div");
      lensFlare.id = "lens-flare";
  
      // Create the ray elements
      for (let i = 0; i < 5; i++) {
        const ray = document.createElement("div");
        ray.classList.add("ray");
        lensFlare.appendChild(ray);
      }
  
      // Add the lens flare element to the body of the document
      document.body.appendChild(lensFlare);
  
      function animateLensFlare() {
        lensFlare.classList.add("animated");
        requestAnimationFrame(animateLensFlare);
      }
  
      animateLensFlare();
    }
    if (showoef == false){
      var embedimCloud = document.getElementById("embedim--cloud");
      if (embedimCloud){
        embedimCloud.remove()
      }
      var embedimSnow = document.getElementById("embedim--snow");
      if (embedimSnow){
        embedimSnow.remove()
      }
      var embedimRain = document.getElementById("embedim--rain");
      if (embedimRain){
        embedimRain.remove()
      }
      var embedimLens = document.getElementById("lens-flare");
      if (embedimLens){
        embedimLens.remove()
      }
      
  
    }
  }
  