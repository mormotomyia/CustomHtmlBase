/**
 * @author Mormotomyia
 * @copyright Mormotomyia 2021
 */

Object.defineProperty(HTMLVideoElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

Object.defineProperty(HTMLVideoElement.prototype, 'playable', {
    get: function(){
        return !!(this.readyState > 2);
    }
})

Object.defineProperty(HTMLImageElement.prototype, 'playable', {
    get: function(){
        return !!(this.complete);
    }
})



const video = new HTMLVideoElement()
video.playing // typescripts intellisense does not accept this
video.playable // or this :/