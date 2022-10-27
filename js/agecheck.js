const appId = window.location.href.split("app/")[1].slice(0, -1);

document.getElementsByClassName("responsive_page_content")[0].style.background = `url("https://cdn.akamai.steamstatic.com/steam/apps/${appId}/page_bg_generated_v6b.jpg") no-repeat`;