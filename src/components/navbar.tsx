// components/Navbar.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Share2Icon } from "lucide-react"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full bg-black text-white px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Share2Icon fill="black" className=" rounded-sm w-6 h-6 p-0.5 bg-white text-black" />
                <span className="text-lg font-semibold">botpress</span>
            </div>

            <div className="flex items-center space-x-8 text-sm font-medium">
                {/* Dropdown - Platform */}
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="flex items-center gap-1 text-white hover:text-blue-400 transition outline-none focus:outline-none focus:ring-0"
                    >
                        Platform
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="bg-neutral-900 text-white rounded-xl shadow-xl w-36 border border-neutral-800"
                    >
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
                    <DropdownMenuTrigger
                        className="flex items-center gap-1 text-white hover:text-blue-400 transition outline-none focus:outline-none focus:ring-0"
                    >
                        Solutions
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="bg-neutral-900 text-white rounded-xl shadow-xl w-36 border border-neutral-800"
                    >
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
                    <DropdownMenuTrigger
                        className="flex items-center gap-1 text-white hover:text-blue-400 transition outline-none focus:outline-none focus:ring-0"
                    >
                        Resources
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="bg-neutral-900 text-white rounded-xl shadow-xl w-36 border border-neutral-800"
                    >
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

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-3">
                <button className="text-white hover:text-blue-400 transition">Log in</button>
                <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                    Contact
                </Button>
                <Button className="bg-blue-500 rounded-full px-5 hover:bg-blue-600">
                    Sign up
                </Button>
            </div>
        </nav>
    )
}
