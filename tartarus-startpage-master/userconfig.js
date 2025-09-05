let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Poznan, Poland",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/r/desktops/", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    s: "search-bar",
    q: "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: " ",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "Social Media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "#ea6962",
            },
            {
              name: "telegram",
              url: "https://web.telegram.org/a/",
              icon: "brand-telegram",
              icon_color: "#3fd8ddff",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "brand-reddit",
              icon_color: "#e78a4e",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#f5b325af",
            },
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "faceBoock",
              url: "https://www.facebook.com/groups/feed/",
              icon: "brand-facebook",
              icon_color: "#0052ceff",
            },
            {
              name: "c.Room",
              url: "https://classroom.google.com/u/4/",
              icon: "brand-google",
              icon_color: "#d5ec7fff",
            },
            {
              name: "g.Keep",
              url: "https://keep.google.com/u/1/",
              icon: "brand-google-drive",
              icon_color: "#eef8c9cc",
            },
            {
              name: "steamDB",
              url: "https://steamdb.info/",
              icon: "brand-steam",
              icon_color: "#1a5be6ee",
            },
          ],
        },
        {
          name: "AI Tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#a9b665",
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com/app?android-min-version=301356232&ios-min-version=322.0&is_sa=1&campaign_id=gemini_overview_page&utm_source=gemini&utm_medium=referral&utm_campaign=gemini_overview_page&pt=9008&mt=8&ct=gemini_overview_page&_gl=1*hl31ae*_ga*MTU5OTg5MDc5OS4xNzU2MjQxNTk3*_ga_WC57KJ50ZZ*czE3NTYyNDE1OTckbzEkZzEkdDE3NTYyNDE2MDQkajUzJGwwJGgw",
              icon: "brain",
              icon_color: "#2320ec9a",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "presentation",
              icon_color: "#ea6962",
            },
            {
              name: "gamma",
              url: "https://gamma.app/",
              icon: "brand-openai",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "miscellaneous",
          links: [
            {
              name: "netflix",
              url: "https://www.netflix.com/",
              icon: "brand-netflix",
              icon_color: "#d3869b",
            },
            {
              name: "kinogo",
              url: "https://kinogo.la/",
              icon: "movie",
              icon_color: "#7daea3",
            },
            {
              name: "Netlify",
              url: "https://app.netlify.com/teams/dominotaydvn6357/projects",
              icon: "diamond",
              icon_color: "#dd66ecff",
            },
            {
              name: "Domen",
              url: "https://adm.tools/Domains/1891786/Manage/Records/",
              icon: "server",
              icon_color: "#709b2b8a",
            },
            {
              name: "Почта",
              url: "indexHyprland.html",
              icon: "mail-code",
              icon_color: "#c74c758a",
            },
            {
              name: "",
              url: "indexHyprland.html",
              icon: "help",
              icon_color: "#ffffffff",
            },
          ],
        },
      ],
    },
  ],
};


const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {

  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
