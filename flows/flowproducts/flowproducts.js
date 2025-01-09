const { addKeyword } = require('@bot-whatsapp/bot')
const productsList = require("../../constanst/products")

const MainProductsMain = addKeyword("VER_PRODUCTOS")
    .addAnswer("Aqui te mostramos la lista de nuestros productos:")
    .addAnswer(productsList)
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

module.exports = MainProductsMain