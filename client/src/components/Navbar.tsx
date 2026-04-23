"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from "./Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Upload", href: "/upload" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background">
      <Container>
        <div className=" mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo (bigger) */}
          <Link href="/" className="text-2xl font-bold text-primary">
            PDFHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search (NOW visible on mobile too) */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search PDFs..."
              className="border rounded-md px-3 py-1 text-sm md:text-base outline-none focus:border-primary w-36 sm:w-48 md:w-auto"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Login button */}
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 text-base">
              Login
            </Button>

            {/* Mobile menu */}
            <div className="md:hidden">
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">☰</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="hover:text-primary text-base"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
