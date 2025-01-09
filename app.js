const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const productsFlow = require("./flows/flowproducts/flowproducts")
const agentFlow = require("./flows/flowagent/flowagent")
const mapFlow = require('./flows/flowmap/flowmap')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const mainFlow = addKeyword(['Hola', 'alo', 'ola', 'hola'])
    .addAnswer(
        [
            'Hola, bienvenido a nuestro chat',
            'Aqui te ofrecemos nuestro menu, por favor escriba el numero para elegir la opcion'
        ]
    )
    .addAnswer(['1. Nuestros productos', '2. Donde Nos encontramos', '3. hablar con un agente'],
        {
            capture: true, 
            delay:1000
        },
        async(ctx, { gotoFlow }) => {
            console.log(ctx.body)

            if(ctx.body == 1){
                console.log("Entro al flujo")
                return gotoFlow(productsFlow)
            }else if(ctx.body == 2){
                console.log("Entrando al flujo de ubicacion")
                return gotoFlow(mapFlow)
            }else if( ctx.body == 3){
                console.log("Entrando al flujo de hablar con un agente")
                return gotoFlow(agentFlow)
            }else{
                console.log("El usuario ingreso otro valor")
            }
        }
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([mainFlow, productsFlow, agentFlow, mapFlow])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
