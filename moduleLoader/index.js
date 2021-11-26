const loadDefaultModule = async(moduleName) => {
        try {   
                const module =  await import(`/${moduleName}/index.js`);
                document.getElementsByTagName("head")[0].insertAdjacentHTML(
                        "beforeend",
                        `<link rel="stylesheet" href="/${moduleName}/styles.css" />`);
                return module.default;     
        } catch(e){
                console.log('[Module Loader Error]: e')
        }
         
}