$(function() {
    var colors = ['#053645', '#194654', '#2E5764', '#436873', '#587983', '#6D8992', '#829AA2',
                  '#829AA2', '#6D8992', '#587983', '#436873', '#2E5764', '#194654', '#053645'];

    var results = [184, 280, 202, 839, 228, 515, 147, 395, 344, 774, 297, 455, 629, 327, 437,
                   1120, 436, 603, 944, 645, 990, 1838, 309, 1344];

    $("#slider").slider({
        step: 1,
        max: 23,
        value: 8,

        change: function(event, ui) {
            var colorIndex = Math.floor(ui.value/2);
            var resultsIndex = ui.value;

            $('body').animate({
                backgroundColor: colors[colorIndex]
            }, 1000);

            if (resultsIndex <= 3 || resultsIndex >= 9) {
                $('body').css('background-image', 'url(images/sky.png)');
            } else {
                $('body').css('background-image', '');
            }

            var html = "";

            for (var i = 0; i < Math.floor(results[resultsIndex] / 15); i++) {
                html += '<div class="computer"></div>';
            }

            var partial = ((results[resultsIndex] % 15) / 15) * 38;
            html += '<div class="computer" style="width: ' + partial + 'px;"></div>';
    
            $('#results').hide().html(html).fadeIn(1000);
            $('#time img').hide().attr('src', 'images/' + resultsIndex + '.png').fadeIn(1000);
        }
    });

    var colorIndex = Math.floor($("#slider").slider('value') / 2);
    var resultsIndex = $("#slider").slider('value');

    $('body').animate({
        backgroundColor: colors[colorIndex]
    }, 1000);

    var html = "";

    for (var i = 0; i < Math.floor(results[resultsIndex] / 15); i++) {
        html += '<div class="computer"></div>';
    }

    var partial = ((results[resultsIndex] % 15) / 15) * 38;
    html += '<div class="computer" style="width: ' + partial + 'px;"></div>';

    $('#results').hide().html(html).fadeIn(1000);
});