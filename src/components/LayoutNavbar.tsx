export default function LayoutNavbar(){
    return(
        
<header className="">
  <nav >
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 h-screen">
      <div className="flex justify-between h-16 px-10 shadow items-center bg-lime-200 ">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Thundera Heath card</h1>
          <div className="hidden md:flex justify-around space-x-4">
            <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
          </div>
          <div className="ml-auto md:hidden ">
              <button className="flex items-center px-3 py-2 border rounded" type="button">
              <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
              </button>
          </div>
        </div>
        <div className="flex space-x-4 items-center ">
          <a href="#" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
        </div>
      </div>
    </div>
  </nav>
  
</header>
    )
}