console.log('[Stories] Loaded!')
var testValue = "test"
var MOCK_USERS = ['lorem_ipsum', 'dolor_sit', 'amet_13', 'qui_aliquid']
class Stories {
    constructor(mountPoint, variant = 'default'){
        this.meta = {
            variant
        }
        mountPoint.replaceChildren(this.renderStoriesDOM(variant))
    }

    getClassWithVariant(cls){
        return `${cls}_${this.meta.variant}`
    }

    renderStoryTemplate(user,index){
        const variant = this.meta.variant
        return `<div class="${this.getClassWithVariant("story_container")}">
        <div class="${this.getClassWithVariant("story_image_wrapper")}">
            <img src="https://source.unsplash.com/random/360x240?random=${index}" class="${this.getClassWithVariant("story_image")}">
        </div>
        <div class="${this.getClassWithVariant("story_text")}">${user}</div>
        </div>`
    }

    renderStoriesDOM() {
        var container = document.createElement('div');
        const variant = this.meta.variant
        container.id = 'stories-container'
        container.innerHTML = `<div class="${this.getClassWithVariant("story_layout")}">
        ${MOCK_USERS.map((v,i) => this.renderStoryTemplate(v,i)).join('')}
        </div>`
        return container
    }
}