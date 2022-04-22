class Snackbar{
    constructor(){
        this.snackbar = document.createElement('div');
    }
    init(){
        this.snackbar.classList.add('snackbar');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(message){
        this.snackbar.textContent = message;
        this.snackbar.classList.add('snackactive');
        setTimeout(() => {
            this.snackbar.classList.remove('snackactive');
        }, 4000);
    }
}