class React {
    constructor(){
        this.server = 'https://localhost:3000';
        this.library = 'React';

        //requirement
        document.querySelector('button').addEventListener('click', this.handleClick.bind(this))
    }

handleClick(){
    console.log('Here is the server')
    console.log(this.server)
}
}

const app = new React()