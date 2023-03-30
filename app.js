//Declaraciones
const sevidorHTTP = require('express');
const app = sevidorHTTP();
const port = process.env.PORT || 3000;
//Configuraciones - Respuestas para el cliente (Chrome, Firefox, Imsonia, Edge) 
app.get("/",(req,res)=>{
    res.send('Pagina principal. Servidor en Node.js con express')
})
app.get('*',(req,res)=>{
    res.send('404 | Pagina no encontrada');
})
//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port);
})