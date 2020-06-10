/**
 * @name LightcordApiExemple
 */

module.exports = class LightcordApiExemple {
    getName() {return "Lightcord Api Exemple";} // Name of your plugin to show on the plugins page 
    getDescription() {return "Describe the basic functions. Maybe a support server link.";} // Description to show on the plugins page 
    getVersion() {return "0.0.1";} // Current version. I recommend following semantic versioning <http://semver.org/> (e.g. 0.0.1)
    getAuthor() {return "Not Thomiz";} // Your name

    load() {} // Called when the plugin is loaded in to memory

    start() {
        if(!("Lightcord" in window) || !("Api" in window.Lightcord)){
            bdApi.showToast("This plugin only works in Lightcord.")
            return
        }

        console.log(`LightcordAPI is availaible !`)
    } // Called when the plugin is activated (including after reloads)
    stop() {} // Called when the plugin is deactivated

    observer(changes) {} // Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
