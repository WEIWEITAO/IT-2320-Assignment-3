

function movePiece(lastEl, currentEl) {
    var current = $(currentEl);
    var last = $(lastEl);

    if (last != undefined) {
        if (last.attr("class") == "cell piece red highlight" || last.attr("class") == "cell piece black highlight") {
            if (current.attr("class") != last.attr("class")) {
                current.removeClass();
                current.addClass(last.attr("class"));
                last.removeClass();
                last.addClass("cell");
            }
        }
    }
    current.addClass("highlight");
    last.removeClass("highlight");
}

$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;
    var LastElement;
    var CurrentElement;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {
        CurrentElement = $(this);
        movePiece(LastElement, CurrentElement);
        LastElement = $(this);
    });
});