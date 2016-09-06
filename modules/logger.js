module.exports = function(/* variables */) {
    var args = Array.prototype.slice.call(arguments);
    if (!args) { return; }

    for (var i = 0; i < args.length; i++) {
        var log_text = args[i];
        if (typeof log_text !== 'string') {
            log_text = JSON.stringify(log_text);
        }
        console.log(log_text);
    }
};
