// If the game is geoblocked the element won't exist and this is not needed
if (document.getElementsByClassName("game_page_background").length != 0) {
    const appId = window.location.href.split("app/")[1].split("/")[0];
    var hero = document.createElement("img");

    hero.className = "game_page_hero";
    hero.src = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_hero.jpg`;

    document.getElementsByClassName("game_page_background")[0].prepend(hero);
}