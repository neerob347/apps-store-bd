
export function installApp(id, shouldUninstall = false, query_isInstalled = false) {
    let installedStr = localStorage.getItem("installed") || "[]";
    let installed = [];

    try {
        installed = JSON.parse(installedStr);
    } catch (err) { console.log("Invalid json:", err) }


    if (id) {
        
        if (query_isInstalled) {
            //is the query to check weather app is installed or not
            return installed.find(item => item == id) != null;
        }


        installed = installed.filter(item => item != id);

        if (shouldUninstall == false) {
            installed.push(id);
        }

        localStorage.setItem("installed", JSON.stringify(installed));
    }

    return installed.map(item=>parseInt(item));
}


export function install(event, id, callback) {
    if(event.target.innerHTML === "Installed"){
        return;
    }
    event.target.innerHTML = "Installing....";
    event.target.classList.add("bg-blue-700")
    event.target.classList.add("hover:bg-blue-900")
    
    setTimeout(() => {
        event.target.innerHTML = "Installed";
        event.target.classList.add("bg-gray-400")
        event.target.classList.add("hover:bg-gray-400")
        installApp(id);
        if(callback){
            callback();
        }
    }, 2000)
}

export function uninstall(event, id, callback){
    event.target.innerHTML = "Uninstalling....";
    event.target.classList.add("bg-blue-700")
    event.target.classList.add("hover:bg-blue-900")
    setTimeout(() => {
        event.target.innerHTML = "Uninstalled";
        event.target.classList.add("bg-gray-400")
        event.target.classList.add("hover:bg-gray-400")
        installApp(id, true);
        if(callback){
            callback();
        }
    }, 2000)
}