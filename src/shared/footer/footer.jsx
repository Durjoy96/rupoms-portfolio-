import { Facebook, Instagram, MessageCircleHeart, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-base-200">
      {" "}
      <footer
        data-theme="light"
        className="max-w-screen-xl mx-auto px-5 footer sm:footer-horizontal bg-transparent text-base-content items-center p-6"
      >
        <aside className="grid-flow-col items-center">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold text-base-content lg:ml-4"
          >
            Rupom Sarker
          </Link>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.facebook.com/rupomsarker.creator"
            target="_blank"
            className="cursor-pointer group"
          >
            <Facebook className="w-6 h-6 group-hover:stroke-primary transition-all duration-300 delay-300" />
          </a>
          <a
            href="https://www.instagram.com/rupomsarker.creator/"
            target="_blank"
            className="cursor-pointer group"
          >
            <Instagram className="w-6 h-6 group-hover:stroke-primary transition-all duration-300 delay-300" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8801408011990&text=Hi%2C%20can%20we%20have%20a%20small%20discussion%3F/"
            target="_blank"
            className="cursor-pointer group"
          >
            <MessageCircleHeart className="w-6 h-6 group-hover:stroke-primary transition-all duration-300 delay-300" />
          </a>
          <a
            href="https://www.youtube.com/@rupomsarker.creator"
            target="_blank"
            className="cursor-pointer group"
          >
            <Youtube className="w-7 h-7 group-hover:stroke-primary transition-all duration-300 delay-300" />
          </a>
        </nav>
      </footer>
    </div>
  );
}
