'use strict';
(function () {
    var marathons = "";
    $(document).ready(function () {
        var evenhtml = '';
        var oddhtml = '';

        var htmlcode = '';

        $.when(
            $.get('HTML/evenlistitem.html', function (data) { evenhtml = data; }),
            $.get('HTML/oddlistitem.html', function (data) { oddhtml = data; }),
            $.get('Data/marathons.json', function (data) { marathons = data['MarathonList']; })).done(
            function () {
                var i = 0;
                for (i = 0; i < marathons.length; i++) {
                    if (i % 2 == 0) {
                        htmlcode += createRow(evenhtml, i);
                    } else {
                        htmlcode += createRow(oddhtml, i);
                    }
                }
                $('#list').append(htmlcode);

            }
            );

    });


    function createRow(code, index) {
        var tempcode = '';
        var listcode = '';
        tempcode = code;

        var $tempcode = $(tempcode);

        $tempcode.find('.MarathonName').text(marathons[index].MarathonName);
        var i = 0;
        for (i = 1; i < marathons[index].Movies.length; i++) {
            listcode += '<div class="ShowListItem">' + marathons[index].Movies[i] + '</div>\n';

        }
        $tempcode.find('.MovieName').text(marathons[index].Movies[0]);
        $tempcode.find('.MovieName').append('<div class="Arrow"></div>');
        $tempcode.find(".ShowList").html(listcode);


        $tempcode.find(".Length").text(marathons[index].Length);
        return $tempcode.html();
    }

})();

function scrollDropDown(a) {
    var h1 = $(document).height();
    $(a).toggleClass('show');
    $(a).find('.Arrow').toggleClass('show');
    $(a).find('.ShowList').toggleClass('show');
    var h2 = $(document).height();
    if (h2 > h1 && $(window).width() > 800) {
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    }
};
