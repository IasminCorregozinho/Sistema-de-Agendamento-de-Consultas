// Sistema de Agendamento de Consultas
interface Consulta {
    id: string;
    paciente: string;
    data: Date;
    observacoes?: string;
    dataCancelamento?: Date | null;
    status: "agendada" | "concluída" | "cancelada";
}

const readline = require('readline-sync');
let consultas: Consulta[] = []; 

function agendarConsulta(consulta: Consulta) {
     consultas.push(consulta);
     console.log(`Consulta para ${consulta.paciente} agendada`);
}

function cancelarConsulta(idDaConsulta: string) {
    const consultaEncontrada = consultas.find(consulta => consulta.id === idDaConsulta);
    if (consultaEncontrada) {
        consultaEncontrada.status = "cancelada";
        consultaEncontrada.dataCancelamento = new Date();
        console.log(`Consulta do paciente ${consultaEncontrada.paciente} foi cancelada.`);
    } else {
        console.log(`Consulta com ID "${idDaConsulta}" não encontrada.`);
    }
}
function listarConsultas() {
    if (consultas.length === 0) {
        console.log("Nenhuma consulta agendada!")
        return
    }
       console.log("Todas as consultas agendadas:")
       consultas.forEach(consulta => {
       console.log(`ID: ${consulta.id} | Paciente: ${consulta.paciente} | Data: ${consulta.data.toLocaleDateString()} | Status: ${consulta.status}`)
       })
    }
function listarPorStatus(status: "agendada" | "concluída" | "cancelada") {
    const consultasFiltradas = consultas.filter(consulta => consulta.status === status);
    if (consultasFiltradas.length === 0) {
        console.log(`Nenhuma consulta com status "${status}" encontrada!`);
        return;
     }
      console.log(`Consultas com status "${status}":`);
      consultasFiltradas.forEach(consulta => {
      console.log(`ID: ${consulta.id} | Paciente: ${consulta.paciente} | Data: ${consulta.data.toLocaleDateString()} | Status: ${consulta.status}`);
       });
}
function menuPrincipal() {
     while (true) {
        console.log('\n--- MENU DE OPÇÕES ---');
        console.log('1. Agendar consulta');
        console.log('2. Cancelar consulta');
        console.log('3. Listar consultas');
        console.log('4. Listar consultas por status');
        console.log('5. Sair');
        console.log('----------------------');

        let opcao = readline.question('Escolha uma opção: ');

        if (opcao === '1') { 
            const id = readline.question('ID da consulta: ');
            const paciente = readline.question('Nome do paciente: ');
            const dataStr = readline.question('Data da consulta (YYYY-MM-DD): ');
            const data = new Date(dataStr);
            const observacoes = readline.question('Observações (opcional): ');
            const consulta: Consulta = {
                id,
                paciente,
                data,
                observacoes,
                status: "agendada"
            };
            agendarConsulta(consulta);
            } else if (opcao === '2') { 
                let idDaConsulta = readline.question('Qual consulta deseja cancelar? ');
                cancelarConsulta(idDaConsulta);
            } else if (opcao === '3') {
                listarConsultas();
            } else if (opcao === '4') {
                let status = readline.question('Qual status? (agendada, concluída, cancelada):');
                listarPorStatus(status);
            } else if (opcao === '5') {
                console.log('Saindo do programa. Até mais!');
                return;
                } else {
                    console.log('Opção inválida. Por favor, escolha de 1 a 5.');
                }
     }
    }            


menuPrincipal();