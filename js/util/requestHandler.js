(function(ctx) {
    'use strict'
    ctx.fetch = function(url,success) {
        $.ajax({
            dataType: "json",
            url: url,
            success: success
        });
    }

})(window);
