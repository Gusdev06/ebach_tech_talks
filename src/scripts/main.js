
const dataDoEvento = new Date("Dec 12, 2023, 19:00:00"); // aqui criamos a data do evneto, passando como argumento o - mes, dia, ano e horario
const timeStampDoEvento = dataDoEvento.getTime(); // aqui estou pegando o timeStemp do dia do evento (aquele valor em milisegundos)

const contaAsHoras = setInterval(function() { // aqui é o nosso intervalo, onde ele ira repetir essa função a cada 1000ms
    const agora = new Date() // aqui capturo o dia atual
    const timeStampAtual = agora.getTime() // aqui pego o timestemp do dia atuaç

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // aqui eu pego o dia atual e o dia do evento e vejo quanto falta para o dia do evento

    // aqui separamos os valores que estavam em ms

    const diasMs = 1000 * 60 * 60 * 24
    const horasMs = 1000 * 60 * 60 
    const minMs = 1000 * 60 

    const diasAteEvento = Math.floor(distanciaAteOEvento / diasMs) // essa conta serve para pegas as horas ate o evento
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasMs) / horasMs)
    const minAteOEvento = Math.floor((distanciaAteOEvento % horasMs) / minMs)
    const segAteOEVENTO = Math.floor((distanciaAteOEvento % minMs) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteOEvento}h ${minAteOEvento}m ${segAteOEVENTO}s`

    if(distanciaAteOEvento < 0) { // esse if vai zerar o tempo e vai dizer que ja foi expirado
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento Espirado'
    }






},1000) // entao aq eu peguei a data atual, e a cada 1 seg esse conteudo sera executado e agora nossa constante sempre vai estar atualizade pq ela sempre se reecriara 

