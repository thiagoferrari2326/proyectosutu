 const baseDeDatos = [
  { id: 101, nombre: "Ana García", especialidad: "Software" },
  { id: 102, nombre: "Luis Pérez", especialidad: "Redes" },
  { id: 103, nombre: "María Solís", especialidad: "Ciberseguridad" } ];

  const usunombres = baseDeDatos.map((usuario) => {
    return usuario.nombre;
  });
  console.log(usunombres);