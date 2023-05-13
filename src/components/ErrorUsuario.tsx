//crear alerta de error al no existir un usuario
const ErrorUsuario = () => {
  return (
    <div className='  block w-full bg-red-400/80 rounded text-white text-center py-4 font-medium mt-5  '>
      <h1>No existe el usuario</h1>
    </div>
  )
}
export default ErrorUsuario
