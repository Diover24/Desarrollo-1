//numero random y adivinarlo
 Map.ramdom()
 const User ={
    adivinar: Math.floor(Math.random() * 10),
    intentos : 0,
    estado: " "
 }

function Evaluar(Numero) {
    User.intentos++; 
    if (Numero===User.adivinar) {
        User.estado = "Ganado"
        return
    }
    return "Fallaste sigue intentando"
}
