Array.from(document.getElementsByClassName("recentAchievements")).forEach(function(row) {
    let progress = document.createElement("div");
    progress.className = "achievement_progress";
    let progress_value = document.createElement("div");
    // TODO: read achievement values from rgGames variable instead of the element
    // Returns the numbers from the "x of y achivements earned" text
    let achievments = row.textContent.match(/\d+/g)

    // 100% * (<achievments earned> / <total achievments) outputs the percentage of earned achievements
    progress_value.style.width = 100 * (achievments[0] / [achievments[1]]) + "%";

    progress.append(progress_value);
    row.insertBefore(progress, row.children[1]);
});