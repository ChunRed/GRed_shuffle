let pass_type = ['▚', '█▙', '▙','▖','▜','❘','▖','&','$$','#','@','!'];

class GText_01 {


    constructor(HTMLElement) {
        this.elemant = HTMLElement;
        this.origin_text = this.elemant.innerHTML.split("");
        this.new_text = this.elemant.innerHTML.split("");
    }

    fade_in(i) {
        this.new_text[i] = pass_type[Math.floor(Math.random() * pass_type.length)];
        this.elemant.innerHTML = "";
        for (let i = 0; i < this.new_text.length; i++) {
            this.elemant.innerHTML += this.new_text[i];
        }

    }

    fade_out(i) {
        this.new_text[i] = this.origin_text[i];
        this.elemant.innerHTML = "";
        for (let i = 0; i < this.new_text.length; i++) {
            this.elemant.innerHTML += this.new_text[i];
        }
    }

    delay(flag) {
        if (flag == 1) {
            
            for (let i = 0; i < this.origin_text.length; i++) {
                this.timeout = setTimeout(() => this.fade_in(i), i * 30);
            }
        }
        else if (flag == 0) {
            for (let i = 0; i < this.origin_text.length; i++) {
                this.timeout = setTimeout(() => this.fade_out(i), i * 30);
            }
        }
    }


    start(delay = 0) {
        this.elemant.innerHTML = "";
        for(let i = 0; i < this.new_text.length; i++){
            this.new_text[i] = ""
        }
        
        setTimeout(() => this.delay(1), delay);
    }


    stop(delay = 0) {
        setTimeout(() => this.delay(0), delay);
    }
    
}