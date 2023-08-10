import Link from "next/link";

export default function Logo() {
    return (
    //   <Link href={"/"} className="inline-block">
    //       <span className="text-dk-gray-200 text-xl m-8 ">USCoffee</span>
    //   </Link>
        <Link href={"/"} className="flex gap-1">
          {/* <span className="text-dk-gray-200 text-xl m-8 ">USCoffee</span> */}
          <span className="text-dk-gray-200 text-xl m-1 ">USCoffee</span>
        </Link>
    //   {/* <Link href={"/"} className="flex gap-1 ">
    //       <span className="p-2 justify-end ">Admin</span>
    //   </Link> */}
    );
}