/*
MIT License
Copyright (c) 2016 Knowledgeable Mammoth
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
            $.get('Data/marathons.json', function (data) {
                marathons = data['MarathonList'];
                marathons.sort(function (a, b) {
                    if (a.MarathonName < b.MarathonName) return -1;
                    if (a.MarathonName > b.MarathonName) return 1;
                    return 0;
                });
            })).done(
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
        var zindex = 'z-index:' + (marathons.length - index) + ';';
        tempcode = code;

        var $tempcode = $(tempcode);

        $tempcode.find('.MarathonName').text(marathons[index].MarathonName);
        var i = 0;
        for (i = 1; i < marathons[index].Movies.length; i++) {
            listcode += '<div class="ShowListItem">' + marathons[index].Movies[i] + '</div>\n';

        }
        $tempcode.find('.centercol').attr('style', zindex);
        $tempcode.find('.MovieName').text(marathons[index].Movies[0]);
        $tempcode.find('.MovieName').append('<div class="Arrow"></div>');
        $tempcode.find('.ShowList').attr('style', zindex);
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
    if (h2 > h1 && $(window).width() > 1400) {
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    }
};
