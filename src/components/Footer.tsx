import Image from "next/image";
import Link from "next/link";
import google_play from "@/assests/photo1.png";
import app_store from "@/assests/photo2.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="p-10 min-h-[50vh] flex flex-col md:flex-row justify-between items-center gap-y-7 bg-primary">
      <div className="w-full md:w-[45%] space-y-5">
        <h1 className="text-3xl font-bold font-serif text-white">Recipe</h1>
        <p className="text-slate-100">
          Recipe helps bring together many people who want to learn to cook new
          things for them and people who want to share theire recipes. Apart
          from this website, you can also download our application in the app
          store.
        </p>
        <div className="w-full flex items-center">
          <Image src={google_play} alt="Google Play" width={150} />
          <Image src={app_store} alt="Play Store" width={125} />
        </div>
      </div>
      <div className="w-full md:w-[45%] flex [&>div]:w-1/2 gap-x-5">
        <div className="flex flex-col space-y-3 [&>*]:text-slate-200 [&>*]:text-sm [&>*]:md:text-base [&>*]:font-medium [&>*]:uppercase">
          <Link href={`/meal`}>Meal</Link>
          <Link href={`/cuisine`}>Cuisine</Link>
          <Link href={`/dietary`}>Dietary</Link>
          <Link href={`/appliance`}>In the Kitchen</Link>
          <Link href={`/holiday`}>Holidays & Seasons</Link>
          <div className="flex gap-x-3 pt-5 [&>*]:w-6 [&>*]:h-6">
            <Twitter />
            <Facebook />
            <Instagram />
            <Youtube />
          </div>
        </div>
        <div className="flex flex-col space-y-3 [&>*]:text-slate-300 [&>*]:text-xs [&>*]:md:text-sm">
          <Link href={`#`}>About us</Link>
          <Link href={`#`}>Contact</Link>
          <Link href={`#`}>Careers</Link>
          <Link href={`#`}>Terms of Service</Link>
          <Link href={`#`}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
