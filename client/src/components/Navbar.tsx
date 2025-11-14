import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 shadow-sm bg-white">

      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <img alt="Logo" src="/logo.svg" width={40} height={40} />
        AgriSense
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-gray-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-600">
          About
        </Link>
      </div>
 
      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 bg-white border-0">
          <SheetHeader>
            <SheetTitle className="text-xl font-boldflex items-center">Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4 text-lg px-5">
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}