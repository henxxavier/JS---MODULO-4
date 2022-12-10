const students = [
    {
        name: 'Henrique',
        firstNote: 10,
        secoundNote: 7.5
    },

    {
        name: 'Fabiola',
        firstNote: 4.0,
        secoundNote: 9.5
    },

    {
        name: 'Italo',
        firstNote: 6.0,
        secoundNote: 7.5
    },

    {
        name: 'Felipe',
        firstNote: 8.0,
        secoundNote: 7.5
    },
]

let average = (students) => {
    let calcAverage = ((students.firstNote + students.secoundNote) / 2).toFixed(0)

    if (calcAverage >= 7) {
        return `A media do(a) aluno(a) ${students.name} é: ${calcAverage} \n Parabens, ${students.name}! voce foi aprovado!`
    }
    else {
        return `A media do(a) aluno(a) ${students.name} é: ${calcAverage} \n Nao foi dessa vez ${students.name}! Tente novamente.`
    }
}


for (let student of students) {
    let averageMessage = average(student)
    alert(averageMessage)
}