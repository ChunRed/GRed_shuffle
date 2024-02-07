


let pass_type = '█';

class GRed_shuffle{

            
    constructor(HTMLElement){
        this.elemant =  HTMLElement;
        this.origin_text = this.elemant.innerHTML.split("");
    }
            
    display(i){
        this.origin_text[i] = pass_type;
        this.elemant.innerHTML = "";
        for(let i=0; i<this.origin_text.length; i++){
            this.elemant.innerHTML += this.origin_text[i];
        }      
    }


    start(){
        for(let i=0; i<this.origin_text.length; i++){
            this.timeout = setTimeout(() => this.display(i), i*50);
        }
    }
}