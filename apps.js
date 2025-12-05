/* apps.js — edite apenas este arquivo para adicionar/editar apps.
   Mantenha o arquivo ao lado do index.html.
   Formato: window.APPS = [ { title, slug, desc, fullDesc, tag, version, size, download, icon, screenshots:[], badges:[], highlight, timestamp } ]
*/

window.APPS = [
  {
    title: "Dramabox (Mod Premium)",
    slug: "dramabox",
    desc: "Assista doramas asiáticos com recursos premium liberados.",
    fullDesc: "Dramabox é um aplicativo de streaming focado em doramas. Versão mod com recursos premium liberados.",
    tag: "apps",
    version: "v4.8.1 Premium Mod",
    size: "27 MB",
    download: "https://download2348.mediafire.com/___/DramaBox_Mod.apk",
    icon: "https://raw.githubusercontent.com/Gabe075/Imagem/refs/heads/main/unnamed.webp",
    screenshots: [
      "https://raw.githubusercontent.com/Gabe075/Imagem/refs/heads/main/unnamed%20(3).webp",
      "https://raw.githubusercontent.com/Gabe075/Imagem/refs/heads/main/unnamed%20(2).webp",
      "https://raw.githubusercontent.com/Gabe075/Imagem/refs/heads/main/unnamed%20(1).webp"
    ],
    badges: ["Premium","Sem anúncios"],
    highlight: true,
    timestamp: Date.now()
  },
  {
    title: "Jogo Pocket",
    slug: "jogo-pocket",
    desc: "Jogo casual, partidas rápidas e controles simples.",
    fullDesc: "Jogo Pocket é um jogo casual com fases curtas e suporte touch.",
    tag: "games",
    version: "v1.0",
    size: "48 MB",
    download: "files/jogo-pocket.apk",
    icon: "",
    screenshots: [],
    badges: ["Novo"],
    highlight: false,
    timestamp: Date.now() - 86400
  }
];
