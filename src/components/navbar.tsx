import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Share2Icon, Menu } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeSheet = () => setIsOpen(false);

    return (
        <nav className="w-full bg-black text-white px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Share2Icon fill="black" className="rounded-sm w-6 h-6 p-0.5 bg-white text-black" />
                <span className="text-lg font-semibold">botpress</span>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
                {/* Dropdown - Platform */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-blue-400 transition outline-none focus:outline-none focus:ring-0">
                        Platform
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-neutral-900 text-white rounded-xl shadow-xl w-36 border border-neutral-800">
                        <DropdownMenuItem asChild>
                            <Link to="/overview" className="w-full hover:text-blue-400 transition">
                                Overview
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/features" className="w-full hover:text-blue-400 transition">
                                Features
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/integrations" className="w-full hover:text-blue-400 transition">
                                Integrations
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Dropdown - Solutions */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-blue-400 transition outline-none focus:outline-none focus:ring-0">
                        Solutions
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-neutral-900 text-white rounded-xl shadow-xl w-36 border border-neutral-800">
                        <DropdownMenuItem asChild>
                            <Link to="/solutions/startups" className="w-full hover:text-blue-400 transition">
                                For Startups
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/solutions/enterprises" className="w-full hover:text-blue-400 transition">
                                For Enterprises
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/solutions/support" className="w-full hover:text-blue-400 transition">
                                Customer Support
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Dropdown - Resources */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-blue-400 transition outline-none focus:outline-none focus:ring-0">
                        Resources
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-neutral-900 text-white rounded-xl shadow-xl w-36 border border-neutral-800">
                        <DropdownMenuItem asChild>
                            <Link to="/blog" className="w-full hover:text-blue-400 transition">
                                Blog
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/guides" className="w-full hover:text-blue-400 transition">
                                Guides
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/webinars" className="w-full hover:text-blue-400 transition">
                                Webinars
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Direct Links */}
                <Link to="/docs" className="text-white hover:text-blue-400 transition">
                    Docs
                </Link>
                <Link to="/enterprise" className="text-white hover:text-blue-400 transition">
                    Enterprise
                </Link>
                <Link to="/pricing" className="text-white hover:text-blue-400 transition">
                    Pricing
                </Link>
            </div>

            {/* Desktop Buttons - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3">
                <button className="text-white hover:text-blue-400 transition">Log in</button>
                <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                    Contact
                </Button>
                <Button className="bg-blue-500 rounded-full px-5 hover:bg-blue-600">
                    Sign up
                </Button>
            </div>

            {/* Mobile Menu Button - Visible only on mobile */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-neutral-800">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black text-white border-l border-neutral-800 w-full sm:w-96">
                    <div className="flex flex-col h-full p-3">
                        {/* Header with close button */}
                        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                            <div className="flex items-center space-x-2">
                                <Share2Icon fill="black" className="rounded-sm w-6 h-6 p-0.5 bg-white text-black" />
                                <span className="text-lg font-semibold">botpress</span>
                            </div>
                          
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="flex-1 py-6 px-4 space-y-6 overflow-y-auto">
                            {/* Platform Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-300 mb-3">Platform</h3>
                                <div className="space-y-2 ml-3">
                                    <Link to="/overview" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Overview
                                    </Link>
                                    <Link to="/features" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Features
                                    </Link>
                                    <Link to="/integrations" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Integrations
                                    </Link>
                                </div>
                            </div>

                            {/* Solutions Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-300 mb-3">Solutions</h3>
                                <div className="space-y-2 ml-3">
                                    <Link to="/solutions/startups" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        For Startups
                                    </Link>
                                    <Link to="/solutions/enterprises" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        For Enterprises
                                    </Link>
                                    <Link to="/solutions/support" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Customer Support
                                    </Link>
                                </div>
                            </div>

                            {/* Resources Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-300 mb-3">Resources</h3>
                                <div className="space-y-2 ml-3">
                                    <Link to="/blog" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Blog
                                    </Link>
                                    <Link to="/guides" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Guides
                                    </Link>
                                    <Link to="/webinars" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                        Webinars
                                    </Link>
                                </div>
                            </div>

                            {/* Direct Links */}
                            <div className="space-y-2">
                                <Link to="/docs" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                    Docs
                                </Link>
                                <Link to="/enterprise" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                    Enterprise
                                </Link>
                                <Link to="/pricing" onClick={closeSheet} className="block py-2 hover:text-blue-400 transition">
                                    Pricing
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Buttons */}
                        <div className="border-t border-neutral-800 pt-4 space-y-3">
                            <button 
                                onClick={closeSheet}
                                className="w-full text-center py-2 hover:text-blue-400 transition"
                            >
                                Log in
                            </button>
                            <Button 
                                variant="outline" 
                                className="w-full rounded-full border-white text-white hover:bg-white hover:text-black"
                                onClick={closeSheet}
                            >
                                Contact
                            </Button>
                            <Button 
                                className="w-full bg-blue-500 rounded-full hover:bg-blue-600"
                                onClick={closeSheet}
                            >
                                Sign up
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}