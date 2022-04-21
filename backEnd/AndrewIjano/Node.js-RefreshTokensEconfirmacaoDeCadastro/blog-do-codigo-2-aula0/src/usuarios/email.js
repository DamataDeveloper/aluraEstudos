const nodemailer = require('nodemailer')

async function enviaEmail(usuario){
    const contaTeste = await nodemailer.createTestAccount();
    const transportador = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        auth: contaTeste,
    });
    const info = await transportador.sendMail({
        from:' "Blog do Codigo" <noreply@blogdocodigo.com.br>',
        to: usuario.email,
        subject: 'Teste de email',
        text: 'ola! este e um email de teste',
        html: '<h1>Ola</h1> <p>Este e um email de teste</p>'
    });

    console.log('URL: '+ nodemailer.getTestMessageUrl(info))
}

modele.exports = {
    enviaEmail
}