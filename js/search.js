function searchGames() {
  search = 1;
  var txt = $("#gamesearch").val();
  if (txt == "") {
    $("#game .game").show();
  } else {
    $("#game .game").hide();
  }
  $("#games .game").hide();
  $("#games .game").each(function () {
    if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 || $(this).attr("id").toUpperCase().indexOf(txt.toUpperCase()) != -1) {
      $(this).show();
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let urlParams = new URLSearchParams(window.location.search);
  let q = urlParams.get("q");
  if (q) {
    document.getElementById("gamesearch").value = q;
    searchGames();
    urlParams.delete("q");
    window.history.replaceState({}, document.title, location.pathname);
  }
  document.getElementById("gamesearch").addEventListener("input", () => {
    searchGames();
  });
});