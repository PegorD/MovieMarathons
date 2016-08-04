"use strict";
(function () {
    var marathons = "";
    $(document).ready(function () {
        var marathons = "";
        var text = "";

        $.when(
            $.get("Data/marathons.json", function (data) {
                marathons = data["MarathonList"];
                var i = 0;
                for (i = 0; i < marathons.length; i++) {
                    text += "Name: " + marathons[i].MarathonName + "\r\nLength: " + marathons[i].Length+"\r\nMovies:\r\n";
                    var j = 0;
                    for (j = 0; j < marathons[i].Movies.length; j++) {
                        text += marathons[i].Movies[j] + "\r\n";
                    }
                    text += "**************************************************************************************\r\n";
                }

                var test = encodeURIComponent(text);
                $(".btndown").attr("href", "data:text/plain;charset=utf-8,"+encodeURIComponent(text));
            })
            );
    });


})();