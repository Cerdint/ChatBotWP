const { addKeyword } = require('@bot-whatsapp/bot')
const MainMapFlow = addKeyword("VER_MAPA")
    .addAnswer("Espere un momento...")
    .addAnswer(["Aqui tiene la nuestra ubicacion", "https://www.google.com/maps/place/Universidad+Privada+del+Valle+Sede+La+Paz/@-16.5034609,-68.1199745,17z/data=!3m1!4b1!4m6!3m5!1s0x915f206782937445:0xacceb97486edb698!8m2!3d-16.5034609!4d-68.1199745!16s%2Fg%2F1hdzd_4wg?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"], 
        {
            delay: 1500,
        }
    )
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

module.exports = MainMapFlow