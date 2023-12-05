export default function NovaSenha(){
    return(

        
<div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex items-center space-x-2 mb-6">
            <h1 className="text-xl font-semibold">Nova Senha</h1>
        </div>
        <p className="text-sm text-gray-600 mb-6">Se esqueceu sua senha obtenha uma nova.</p>
        <form id="changePasswordForm" className="space-y-6">
            
            <div>
                <label form="newPassword" className="text-sm font-medium text-gray-700 block mb-2">Nova senha *</label>
                <input type="password" id="newPassword" className="password-input form-input block w-full border border-gray-300 rounded-md shadow-sm" required/>
            </div>
            <div>
                <label form="confirmPassword" className="text-sm font-medium text-gray-700 block mb-2">Confirme Nova senha *</label>
                <input type="password" id="confirmPassword" className="password-input form-input block border w-full border-gray-300 rounded-md shadow-sm" required/>
                <button type="button" className="text-xs text-blue-600 hover:underline mt-1">Limpar</button>
            </div>
            <div id="passwordCriteria" className="text-sm space-y-2">
                <p className="text-red-500">Senha fraca. Deve conter:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Pelo menos 1 letra maiúscula</li>
                    <li>Pelo menos 1 número</li>
                    <li>Pelo menos 8 caracteres</li>
                </ul>
            </div>
            <div className="flex justify-between">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300">Discartar</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">Aplicar mudanças</button>
            </div>
        </form>
    </div>

    
</div>


    )
}