import Image from "next/image";
import { Home } from "../types/pages/home.types";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "../atoms/content/PortableText";


export default function HomeView({ data }: { data: Home }) {
  return (
    <div>
      <div className="w-[1920px] h-[110px] relative">
        <img
          className="w-[250px] h-[70px] left-[136px] top-[24px] absolute"
          src="https://s3-alpha-sig.figma.com/img/e09f/a636/711044123ee6be8d5c796f48f6f5dd42?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1em65zPgjGEgkOEK6eIwba2KlE~vdZ3yFyjdPp4~GAYb0RK5lxVcw-a6~yGql5APUSL44CSApLNND3aPS~7QQ7FUxManlqvx0XLzbZeseUqjpKRry0q6-eI3BEHA9iEqL~RWx3pLfADZFCQv6crdq8C2LnEsOnVB37l5w-5RcuHedG19atfBjxmbySmwLSjPASytJj3md6a7LljGL3SrRZHIXfj9UjeWSzDAUbALFv2FzeDY7dKfl8faz8RfDrIqVT60TB881CzW1c-L6AeA2UzY8vjSoOwux8rAzuXO9PyBs-~VREq8eb7Mm~v-GksPjmp0z9T09QEQ6ubzzZHKQ__"
        />
        <div className="left-[1434px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          Hjem
        </div>
        <div className="left-[1537px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          Om
        </div>
        <div className="left-[1611px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          Prosjekter
        </div>
      </div>
      <div className="ml-[145px] mt-6 font font-extrabold text-5xl font-['Inter']">
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit
        </p>
      </div>
      <div>
        <div>
          <Image
            className="ml-[150px] mt-8 rounded-[3px]"
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/1625861037-GettyImages-1023149708.jpg"
            }
            alt={"team"}
            height={800}
            width={800}
          />
        </div>
      </div>
      <div className="bg-neutral-400">
        <h1 className="flex justify-center text-3xl font-semibold text-white">
          {data.title}
        </h1>
      </div>
      <div className="flex justify-center mt-6">
        <div className="ml-5">
          {data.image?.url && (
            <Image
              className="rounded-md"
              src={urlFor(data.image.url).url()}
              alt={data.image?.alt || "Image"}
              height={300}
              width={300}
            />
          )}
          <div className="prose prose-xl">
            <PortableText value={data.entry} />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl"></h1>
        </div>
      </div>
      <div className="flex flex-col justify-center text-3xl font-semibold mt-[10%]"></div>
      <div className="flex-wrap flex font-normal justify-evenly text-2xl mt-4">
        {data.project?.map((post, k) => (
          <div key={k}>
            <h2 className="font-semibold">{post.title}</h2>
            <div>
              {post.mainImage?.url && (
                <Image
                  className="rounded-md"
                  src={urlFor(post.mainImage.url).url()}
                  alt={post.mainImage?.alt || "Project Image"}
                  height={300}
                  width={300}
                />
              )}
            </div>
            <div>
              <PortableText value={post.content} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-wrap flex font-normal justify-evenly text-2xl mt-4">
        {data.ansatte?.map((ansatte, k) => (
          <div key={k}>
            <h2 className="font-semibold">{ansatte.title}</h2>
            <div>
              {ansatte.mainImage?.url && (
                <Image
                  className="rounded-md"
                  src={urlFor(ansatte.mainImage.url).url()}
                  alt={ansatte.mainImage?.alt || "Ansatte Image"}
                  height={300}
                  width={300}
                />
              )}
            </div>
            <div>
              <PortableText value={ansatte.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
