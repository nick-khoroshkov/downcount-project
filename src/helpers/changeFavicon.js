export function changeFavicon(title) {
  const favicon = document.getElementById("favicon");

  if (!favicon) return;

  favicon.href = `/favicon_icons/${title}.ico?v=2`;
}

export function changeFaviconTeam(team) {
  const favicon = document.getElementById("favicon");

  if (!favicon) return;

  let teamName = team.toLowerCase().replaceAll(" ", "");
  favicon.href = `/favicon_icons/${teamName}.ico?v=2`;
}
