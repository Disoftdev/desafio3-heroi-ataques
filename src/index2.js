class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
const heroi2 = new Heroi('Merlin', 150, 'mago');
const heroi3 = new Heroi('Lee', 25, 'monge');
const heroi4 = new Heroi('Ryu', 22, 'ninja');

heroi1.atacar();
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar(); 
