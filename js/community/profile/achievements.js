try {
    const appId = window.location.href.split("stats/")[1].split("/")[0];
    var hero = document.createElement("img");

    hero.className = "game_page_hero";
    hero.src = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_hero.jpg`;

    document.getElementsByTagName("body")[0].prepend(hero);
}
catch(e) {}