import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-3 lg:col-span-2">
          <div className="mb-5">
            <Link href="/" className="font-bold text-2xl mb-2 block">
              gNews
            </Link>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              necessitatibus similique aspernatur obcaecati veritatis. Aperiam
              cum porro sequi, totam minima consequuntur, aspernatur deleniti
              vero repellendus dorales.
            </p>
            <div className="flex space-x-3 mt-5">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={18}
                height={18}
              />
              <Image
                src="/instagram.png"
                alt="instagram"
                width={18}
                height={18}
              />
              <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
              <Image src="/youtube.png" alt="youtube" width={18} height={18} />
            </div>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-1">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-5">
            <div>
              <span className="font-bold">Links</span>
              <Link href="/" className="block mt-2 text-sm">
                Home
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Blog
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                About
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Contact
              </Link>
            </div>
            <div>
              <span className="font-bold">Tags</span>
              <Link href="/" className="block mt-2 text-sm">
                Style
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Fashion
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Tech
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Culture
              </Link>
            </div>
            <div>
              <span className="font-bold">Social</span>
              <Link href="/" className="block mt-2 text-sm">
                Facebook
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Instagram
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Tiktok
              </Link>
              <Link href="/" className="block mt-2 text-sm">
                Youtube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
