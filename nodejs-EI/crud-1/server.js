import express from 'express';
import Chance from 'chance';

const PORT = 8080;
const app = express();
const chance = new Chance();

////////////Clientes /////////////////
function createClients() {
  return {
    id: chance.integer({ min: 30, max: 50 }),
    nombre: chance.first(),
    apellido:chance.last(),
    email: chance.email({domain: "gmail.com"}),
    edad: chance.age(),
    telefono: chance.phone(),
  };
}


const totalClients = 15; 
const clients = Array.from({ length: totalClients }, createClients);

console.log('Clientes:');
console.log(clients);

//////////////rutas get///////////////////////

app.get('/api/clients/:id?', (req, res) =>{
  const {id} = req.params;

  if (!id) {
    res.json(clients);
    return;
}

  let cliente = clients.find(cl => cl.id === Number(id));
  if(!cliente) {
    cliente = {},
    res.status(404);
  }
  res.json(cliente);
})

////////////rutas post //////////////

app.post('/api/clients', (req, res) => {
  let clientOne =  {
    id: 115,
    nombre: 'Susana',
    apellido: 'Martinez',
    email: 'susanamartinez@gmail.com',
    edad: 60,
    telefono: '(351) 944-5484',
  };
  clients.push(clientOne);
  res.json(clientOne);
});


 
const server = app.listen(PORT, () => console.log(`Servidor Express escuchando el puerto ${PORT}`));
server.on('error', error => console.log(`se clujo un error al intentar iniciar el servidor Express`));