import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SidebarTrigger } from "./ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="flex justify-between h-full items-center">
      <div className="flex items-center gap-2 flex-grow">
        <SidebarTrigger />
        {/* //search  */}

        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="What do you want to listen to?"
              className="h-9 w-full pl-10 pr-4 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-1 sm:gap-2 md:gap-4">
        <Button className="p-4 font-bold rounded-full">Sign up</Button>
        <Button className="p-4 font-bold rounded-full">Sign in</Button>
      </div>
    </nav>
  );
};
