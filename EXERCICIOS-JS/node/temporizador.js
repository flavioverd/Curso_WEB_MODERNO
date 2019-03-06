const schedule = require('node-schedule') // importando modulo do node "schedule"

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 2', function () { // segundos, horas, dia da semana, no caso 2 é terça-feira 
    console.log('Executando Tarefa 1!', new Date().getSeconds()) // dentro da função posso fazer a requisção que quiser, inclusive BD.    
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule() // RecurrenceRule regra de recorrencia
regra.dayOfWeek = [new schedule.Range(1, 5)] // vai disparar função tarefa2 de segunda a sexta 1 à 5
regra.hour = 17 // na hora que decidirmos
regra.second = 30 // e no segundo que quisermos

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})