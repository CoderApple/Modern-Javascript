class Dropdown{
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init(){
        this.trigger.addEventListener('click', () =>{
            this.trigger.classList.toggle('dropactive');
            this.content.classList.toggle('dropactive');
        });
    }
}