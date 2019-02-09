/*
    Copyright 2018 Ben McGee ben@devaddins.com
    please report problems to rdar@devaddins.com or on github.com
*/

'use strict';

// recursive dereference and replace
let rdar = function (template, context, prefix = '') {
    let result = template;
    for (var i in context) {
        if (Array.isArray(context[i])) {
            let rex = new RegExp('\\{\\[' + prefix + i + '\\]\\}([^]*)\\{\\[\\/' + prefix + i + '\\]\\}', 'mg');
            let res = rex.exec(result);
            if (res && res[1]) {
                let rep = '';
                for (var j in context[i]) {
                    rep = rep + rdar(res[1], context[i][j], prefix);
                }
                result = result.replace(rex, rep);
            }
        } else if (typeof context[i] === 'object') {
            result = rdar(result, context[i], prefix + i + '.');
        } else {
            let rex = new RegExp('\{\{' + prefix + i + '\}\}', 'g');
            result = result.replace(rex, context[i]);
        }
    }
    return result;
};

module.exports = rdar;