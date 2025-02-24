import Link from "next/link";
import SearchBar from "./searchbar";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white text-gray-900 w-full p-4 border-b">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-xl font-bold">BONUS API PLATFORM</h1>
        </Link>

      </div>
        <SearchBar />
    </header>
  );
};


export default Navbar