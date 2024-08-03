import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

function Navbar() {
  return (
    <nav className="z-20 fixed flex flex-col justify-center items-center w-full h-max" style={{
      marginTop: "90vh"
    }}>
      <div className="flex justify-center items-center gap-2 bg-slate-800/20 dark:bg-white/10 background-blur-sm px-4 py-1 rounded-full">
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150 cursor-pointer"
          >
            <Link href={item.link}>{item.icon}</Link>
          </div>
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
}

export default Navbar;
