const mailBody = (username: any, code: any) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>Anni E-mail</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <!-- <link rel="stylesheet" href="style.css" /> -->
            <script src='main.js'></script>
        </head>
        
               
        <body style="font-family:Arial, Helvetica, sans-serif; width: 100%;">
        
            <img src="https://cdn.discordapp.com/attachments/1036694675408564315/1105503630641082549/Anni_logo_h_1.png" alt="logo" title="logo" width="140rem" >
         
            <div style="width: 30rem; line-height: 28px;
            vertical-align: middle; align-items: center;
            text-align: left; color: #000000; padding-left: 4rem">
    
                <p style="font-weight: 800; color: #000000; font-size:24px;
                margin-bottom: 2rem;">Redefina sua senha</p>
    
                <p style="font-weight: 300; color: #000000; font-size:16px; 
                line-height: 28px;"> <b>Olá ${username}</b>, deseja redefinir sua senha? Sem problemas!
                Aqui está seu código de verificação de 4 digitos:</p>
  
                <p style="font-weight: 300; color: #000000; font-size: 32px; 
                line-height: 28px;">${code}</p>
    
         
                <p style="font-weight: 300; color: #000000; font-size:16px; line-height: 28px; 
                margin-bottom: 2rem">Se você não solicitou, apenas ignore este e-mail. A redefinição de senha permanecerá ativa por 20 minutos.</p>
    
                <div style="width: 30rem; vertical-align: middle; align-items: center;
                text-align: center; color: #000000; line-height: 25px; margin-top: 4rem">
           
                    <p style="font-weight: 300; color: #000000; font-size:12px;
                    ">Central de Atendimento: (85) 3477.3000 | Endereço: Av. Washington Soares, 1321 - Edson Queiroz - CEP 60811-905 - Fortaleza/CE - Brasil<p>
    
                </div>
            </div>
        </body>
        </html>
        `;
};

export { mailBody }