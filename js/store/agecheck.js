const appId = window.location.href.split("app/")[1].slice(0, -1);
var hero = document.createElement("img");

hero.className = "game_page_hero";
hero.src = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_hero.jpg`;

document.getElementsByClassName("responsive_page_template_content")[0].prepend(hero)