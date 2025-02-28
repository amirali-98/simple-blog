import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="bg-indigo-300 text-white shadow-md">
      <div className="p-3 flex justify-between items-center lg:px-0 lg:max-w-5xl lg:mx-auto">
        <p className="text-2xl font-heavy">بلاگ</p>
        <button className="w-10 h-10 rounded-full shadow-md flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-400">
          <IoMenu className="text-2xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
