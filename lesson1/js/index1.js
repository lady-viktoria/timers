const distinctMap = {};

function loadScript(src, callback) {

    const load = (src) => {
        return new Promise((resolve, reject) => {
            distinctMap[src] = src;
            console.log('loading script', src);
            const script = document.createElement('script');
            document.head.appendChild(script);
            script.src = src;
            //обработчик onload срабатывает, когда загрузится скрипт
            script.onload = resolve;
            
            

            // if(distinctMap[src]){
            //     console.log('script loaded before', src);
            //     //скрипт уже был загружен, поэтому просто выполнится  callback
            //     resolve();
            // } else {
            //     distinctMap[src] = src;
            //     console.log('loading script', src);
            //     const script = document.createElement('script');
            //     document.head.appendChild(script);
            //     script.src = src;
            //     //обработчик onload срабатывает, когда загрузится скрипт
            //     script.onload = resolve;
            // } 
        })
    }

    load(src).then(
        if(distinctMap[src]){
            console.log('script loaded before', src);
    //скрипт уже был загружен, поэтому просто выполнится  callback
        resolve();
    };

    switch(typeof(src)) {
        case 'string':
            load(src).then(callback);
            break;
      
        case 'object':
            if(Array.isArray(src)) {
                Promise.all(
                    src.map(url => {
                        console.log('---');
                        return load(url);
                    })).then(callback);
            }
            break;

        case 'function':
            src();
            break;

        default:
            console.log('Wrong parameters', src, callback);
            break;
      }
      
    
}


//проверить функцию loadScript, если src - массив
loadScript(['./js/common.js', './js/common.js'], () => {
    log();
    console.log('src - array');
});

// callback не выполнится
loadScript(['./js/common.js', './js/common.js', './js/a.js'], () => {
    console.log('src - array');
});


//проверить функцию loadScript, если src - callback
loadScript( () => {
    console.log('src - callback');
})


loadScript('./js/common.js', () => {
     log();
     console.log('src - строка');
})