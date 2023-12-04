import LayoutNavbar from "@/components/LayoutNavbar";

export default function NewTeacher(){
    return (
        
      
      
<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-teal-400 to-blue-600 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Cadastro de Professor</h1>
			<p className="text-white mt-1">Se já fez o cadastro clique no botão de busca</p>
			<button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Busca</button>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Bem vindos professores!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Registre-se e poderá fazer busca pelo aluno</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Nome Completo" />
      </div>
				<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					
					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Nome de Usuário" />
      </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email" />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Senha" />
                        </div>

	  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					
					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Disciplina que leciona" />
      </div>
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registre-se</button>
		</form>
	</div>
</div>
                              
      
      )
}


  


