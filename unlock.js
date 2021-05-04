$('.lockedElement').each(function() {
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