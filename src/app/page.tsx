


export default function Home() {
  
  
  return (
    
    

     
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      
    <div className="w-1/2 h-screen hidden lg:block bg-gradient-to-r from-teal-400 to-blue-600">
      <img src="./img/thunderaLogo.png" alt="Placeholder Image" className="object-cover w-full h-full"/>
      
    </div>
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Thundera Heath (entrada)</h1>
      <form action="#" method="POST">
        <div className="mb-4">
          <label form="username" className="block text-gray-600">Nome de Usuario</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"/>
        </div>
        <div className="mb-4">
          <label form="password" className="block text-gray-600">Senha</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"/>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
          <label form="remember" className="text-gray-600 ml-2">Memorizar campos acima?</label>
        </div>
        
        <div className="mb-6 text-blue-500">
          <a href="./pages/novaSenha" className="hover:underline">Esqueceu a senha? Obtenha uma nova</a>
        </div>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
        
        
      </form>

      <div className="mt-6 text-blue-500 text-center">
      <text className=" text-gray-600">Se não é cadastrado como professor cadastre-se : </text>

        <a href="./pages/cadProf" className="hover:underline">Cadastro de Professor</a>
      </div>
      <div className="mt-6 text-blue-500 text-center">
      <text className=" text-gray-600">Caso queira cadastrar um novo aluno: </text>

        <a href="./pages/cadAluno" className="hover:underline">Cadastro de Aluno</a>
      </div>
    </div>
    </div>
       
  )
}
