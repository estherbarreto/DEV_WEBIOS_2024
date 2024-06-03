class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        const taxa = 0.015;
        this.novoSalario = this.salario - (this.salario * taxa);
        return this.novoSalario;
    }

    contaCorrente() {
        const taxa = 0.036;
        this.novoSalario = this.salario - (this.salario * taxa);
        return this.novoSalario;
    }

    contaEstudante() {
        const taxa = 0.012;
        this.novoSalario = this.salario - (this.salario * taxa);
        return this.novoSalario;
    }

    imprimirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Salário original: R$${this.salario.toFixed(2)}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Conta: ${this.conta}`);
        console.log(`Número da Conta: ${this.numeroConta}`);
        console.log(`Novo Salário: R$${this.novoSalario.toFixed(2)}`);
        console.log('-------------------------');
    }
}

const conta1 = new ContaBancaria('Matheus', 25, 3000, 'M', '001', 'Corrente', '1345-9');
conta1.contaPoupanca();
conta1.imprimirDados();

const conta2 = new ContaBancaria('João', 30, 4500, 'ele queima ou nao queima?', '002', 'Corrente', '23456-7');
conta2.contaCorrente();
conta2.imprimirDados();

const conta3 = new ContaBancaria('Ana', 22, 2300, 'F', '003', 'empregado na minha bola', '344833-8');
conta3.contaEstudante();
conta3.imprimirDados();
