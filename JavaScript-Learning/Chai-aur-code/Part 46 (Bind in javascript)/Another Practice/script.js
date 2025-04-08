class React {
    constructor() {
        this.library = 'React'
        this.server = 'https://localhost:3000';
        
        const btn = document.getElementById('btn')
        btn.addEventListener('click', this.handleClick.bind(this)) // It only displays the 'Clicked' console, but the 'this.server' console doesn't display correctly, but shows 'undefined' without binding;
        
    }

    handleClick() {
        console.log('Clicked');
        console.log(this.server);
        console.log(this)
    }
}


const app = new React()
// app.handleClick() // it displays both console correctly