/*
MIT License
Copyright (c) 2016 Knowledgeable Mammoth
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';
(function () {
    var marathons = '';
    $(document).ready(function () {
        var marathons = '';
        var text = '';

        $.when(
            $.get('Data/marathons.json', function (data) {
                marathons = data['MarathonList'];
                  marathons.sort(function (a, b) {
                    if (a.MarathonName < b.MarathonName) return -1;
                    if (a.MarathonName > b.MarathonName) return 1;
                    return 0;
                });
                var i = 0;
                for (i = 0; i < marathons.length; i++) {
                    text += 'Name: ' + marathons[i].MarathonName + '\r\nLength: ' + marathons[i].Length+'\r\nMovies:\r\n';
                    var j = 0;
                    for (j = 0; j < marathons[i].Movies.length; j++) {
                        text += marathons[i].Movies[j] + '\r\n';
                    }
                    text += '######################################################################################\r\n';
                }
				
				
               text+='*Extended Cut';
                $('.btndown').attr('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
            })
            );
    });


})();
