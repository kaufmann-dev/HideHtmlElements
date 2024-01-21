$('.locked').each(function() {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let title = $(this).data('title');
    let cache = $(this);

    $(this).append('<div class="unlockWrapper" style="width: ' + w + 'px; height: ' + h + 'px"><div><p>' + title + '</p><button class="unlock">Unlock element</button></div></div>');

    $(this).find('.unlock').click(function() {
        $(this).parent().parent().after(cache);
        $(this).parent().parent().remove();
    });
    $(this).replaceWith($(this).find('.unlockWrapper'));
    
});

$('.passwordSecured').each(function() {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let title = $(this).data('title');
    let cache = $(this);
    
    $(this).append('<div class="unlockWrapper" style="width: ' + w + 'px; height: ' + h + 'px"><div class="child"><p>' + title + '</p><input type="password" class="passwordInput"><button class="validateButton">Validate!</button></div></div>');

    $(this).find('.validateButton').click(function() {
        if($(this).parent().find('.passwordInput').val() == '1234') {
            console.log("Successfully validated!");
            $(this).parent().parent().after(cache);
            $(this).parent().parent().remove();
        } else {
            console.log("Incorrect password!");
            $(this).parent().parent().effect( "shake", {times:2, distance: 6}, 300 );
        }
    });
    $(this).replaceWith($(this).find('.unlockWrapper'));
});