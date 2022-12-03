// If the game is geoblocked the element won't exist and this is not needed
if (document.getElementsByClassName("game_page_background").length != 0) {
    const appId = window.location.href.split("app/")[1].split("/")[0];
    var hero = document.createElement("img");

    hero.className = "game_page_hero";
    hero.src = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_hero.jpg`;

    document.getElementsByClassName("game_page_background")[0].prepend(hero);
}

// Only for EA Play games
if (document.getElementsByClassName("master_sub").length != 0)
    document.getElementsByClassName("master_sub")[1].insertAdjacentHTML("afterbegin", '<svg xmlns="http://www.w3.org/2000/svg" width="54" height="18" viewBox="0 0 300 98"><path fill="#FF4747" fill-rule="evenodd" d="M118.56035,10.9621 L118.56035,76.8721 L131.55435,76.8721 L131.55435,52.8616 L147.56185,52.8616 C160.46035,52.8616 170.06435,43.9181 170.06435,31.7716 C170.06435,19.7186 160.83685,10.9621 148.03235,10.9621 L118.56035,10.9621 Z M146.62085,41.7526 L131.55435,41.7526 L131.55435,22.5441 L146.62085,22.5441 C152.83435,22.5441 157.16585,26.4986 157.16585,32.1486 C157.16585,37.7976 152.83435,41.7526 146.62085,41.7526 L146.62085,41.7526 Z M188.14185,7.1971 L176.18485,10.9621 L176.18485,76.8721 L188.14185,76.8721 L188.14185,7.1971 Z M217.23485,77.5321 C223.07385,77.5321 228.34685,75.3666 232.30135,71.6931 L232.30135,76.8721 L244.25835,76.8721 L244.25835,29.8891 L232.30135,29.8891 L232.30135,35.0661 C228.53435,31.3006 223.35485,29.1351 217.70735,29.1351 C205.46735,29.1351 194.35535,39.3036 194.35535,53.3326 C194.35535,67.3616 205.27785,77.5321 217.23485,77.5321 L217.23485,77.5321 Z M219.30735,66.7971 C212.05835,66.7971 206.21885,61.2416 206.21885,53.3326 C206.21885,45.4236 212.05835,39.8681 219.30735,39.8681 C226.65135,39.8681 232.39485,45.4236 232.39485,53.3326 C232.39485,61.2416 226.65135,66.7971 219.30735,66.7971 L219.30735,66.7971 Z M299.99985,29.8891 L287.47685,29.8891 L274.10535,57.5701 L260.45335,29.8891 L247.08385,29.8891 L267.23335,70.9396 L253.76885,97.6816 L266.76285,97.6816 L299.99985,29.8891 Z M68.62685,57.3361 L64.78785,51.2076 L53.57935,51.2076 L57.42435,45.0681 L60.96535,45.0681 L56.68535,38.2341 L44.74535,57.3361 L12.89085,57.3361 L20.56035,45.0681 L14.92885,45.0681 L18.75735,38.9291 L43.38035,38.9291 L39.54985,45.0681 L27.80585,45.0681 L23.96685,51.2076 L41.33935,51.2076 L56.68535,26.6476 L75.86385,57.3361 L68.62685,57.3361 Z M26.42985,26.6476 L51.68735,26.6476 L47.84835,32.7896 L22.59335,32.7896 L26.42985,26.6476 Z M43.93485,0.0001 C19.67135,0.0001 -0.00015,19.6726 -0.00015,43.9376 C-0.00015,68.2081 19.67135,87.8721 43.93485,87.8721 C68.19785,87.8721 87.87235,68.2081 87.87235,43.9376 C87.87235,19.6726 68.19785,0.0001 43.93485,0.0001 L43.93485,0.0001 Z"/></svg>');