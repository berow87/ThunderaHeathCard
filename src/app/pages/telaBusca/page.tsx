
import LayoutNavbar from "@/components/LayoutNavbar";

export default function TelaBusca(){
    return(
    
            
       <div>

            <LayoutNavbar/>

            <div className="grid min-h-screen place-items-center">
          <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 className="text-xl font-semibold">Olá Professor !, <span className="font-normal">Nos campos a seguir poderá faze a busca por registro de saude dos alunos</span></h1>
            <form className="mt-6">
              <div className="flex justify-between gap-3">
                
                <span className="w-1/2">
                  <label form="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Nome</label>
                  <input id="firstname" type="text" name="firstname" placeholder="" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
                
                <span className="w-1/2">
                  <label form="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Sobrenome</label>
                <input id="lastname" type="text" name="lastname" placeholder="" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
              </div>
              
              <label form="Matricula" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Matricula</label>
              <input id="Matricula" type="email" name="email" placeholder="" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              
              <label form="Telefone" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Contato de emergência</label>
              <input id="Telefone" type="tel" name="password" placeholder="" autoComplete="Telefone de emegência" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              
              <label form="sala" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Sala do aluno</label>
              <input id="sala" type="text" name="sala" placeholder="" autoComplete="Sala do Aluno" className="block w-full p-3 mt-2 mb-4 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              
              <a href="/pages/listaAlunos"
                         className="block mb-4 lg:inline-block lg:mt-0 hover:text-white px-8 py-4 rounded hover:bg-blue-700 mr-2 bg-gradient-to-r from-teal-400 to-blue-600">
                          Buscar
              </a>
            </form>
          </div>
        </div>
       </div> 
        

        
        

    
    )
}