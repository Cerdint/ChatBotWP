const { addKeyword } = require('@bot-whatsapp/bot')
const MainAgentFlow = addKeyword("VER_AGENTE")
    .addAnswer("En un momento le atenderemos...")
    .addAnswer('Si desea regresar escriba "salir"',
        {
            capture: true,
            delay: 1500
        },
        async(ctx, {gotoFlow}) => {
            if(ctx.body == "salir"){
                console.log("el usuario regreso al flujo principal")
            }
        }
    )

module.exports = MainAgentFlow