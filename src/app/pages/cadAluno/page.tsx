export default function CadAluno(){
    return(
        


      
<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-teal-400 to-blue-600 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Cadastro de Aluno</h1>
			<p className="text-white mt-1">Esse campo é reservado para o preenchemento dos dados de saúde dos aluno</p>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Bem vindos pais e professores!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Cadastre os dados de saude do aluno nos campos a seguir</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Nome Completo" />
      </div>
				<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					
					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Idade" />
        </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Tipo Sanguineo" />
          </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Alergias" />
              
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Faz uso de medicamento ?" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Contato de Emergencia" />
            </div>

	  
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registre-se</button>
		</form>
	</div>
</div>
         
           
              
  )
}
