const executeScripts = (scripts, win = window, callback) => {
    if (!scripts.length) {
        if (typeof callback === 'function') callback();
        return;
    }
    const doc = win.document;
    const script = scripts.shift();
    if (script && script.src) {
        if (doc.head.querySelector('script[src="' + script.src + '"]')) {
            return executeScripts(scripts, win, callback);
        }
        const newScript = doc.createElement('script');
        newScript.src = script.src;
        newScript.onload = () => {
            executeScripts(scripts, win, callback);
        };
        doc.head.appendChild(newScript);
    } else {
        try {
            if (script && script.textContent) {
                win.eval(script.textContent);
            }
        } catch (ex) {
            console.error(ex);
        }
        executeScripts(scripts, win, callback);
    }
};

export default executeScripts;
