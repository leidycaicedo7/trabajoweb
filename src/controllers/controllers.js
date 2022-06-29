//el controaldor recibe los datos de la peticion
//el controlador envia respuestas al cliente

const trabajo={};
//const nota =require()

/*trabajo.getAll= (req,res)=>{
    res.json();
}*/
trabajo.create = (req,res)=>{

    //1. recibir datos
    datos=req.body

    //2. calculo los promedios (logica de negocio)
    let nota1=datos.nota1*0.15
    let nota2=datos.nota2*0.15
    let nota3=datos.nota3*0.30
    let nota4=datos.nota3*0.40

    let promedio=nota1+nota2+nota3+nota4
    
    res.json({
        'promedio':promedio,
        
    })
   
    //const notas= notas.length+1;
    
    /*const newnota = req.body;
    let n= nota1*0.15
    let n2=nota2*0.15
    let n3=nota3*0.30
    let n4=nota4*0.40
    const resultado= n+n2+n3+n4
    nota.push(newnota);
    res.json(newnota);*/
}
module.exports = trabajo