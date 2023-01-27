class Persona{
    constructor(nombre){
        this.nombre = nombre;
        this.next = null;
        this.prev = null;
    };
    
    setNext(dLLNode){
    this.next = dLLNode;
    };

    setPrev(dLLNode){
    this.prev = dLLNode;
    };
};


class Fila {
    constructor(){
        this.head = null;
        this.tail = null;
        this.current = null;
    };

    recibirPersona(personaNodo){
        if(!this.head){
            this.head = personaNodo
            this.current = this.head
            this.tail = this.head
        } else {
            let colaActual = this.tail
            this.tail = personaNodo;
            this.tail.setPrev(colaActual)
            colaActual.setNext(this.tail)
        }
    };

    atenderPersona(){
        if(!this.head){
            return null
        }

        const valorDeRetorno = this.head.nombre

        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else {
            this.head = this.head.next
            this.head.prev = null
        }

        if(this.current.next){
            this.current = this.current.next
          }
        return valorDeRetorno
    }

};

const lasTortillas = new Fila()
console.log(lasTortillas)
lasTortillas.recibirPersona(new Persona({nombre:"Noel"}))
lasTortillas.recibirPersona(new Persona({nombre:"Armando"}))
lasTortillas.recibirPersona(new Persona({nombre:"Monse"}))
console.log(lasTortillas)
lasTortillas.atenderPersona()
lasTortillas.atenderPersona()
console.log(lasTortillas)
lasTortillas.atenderPersona()
console.log(lasTortillas)