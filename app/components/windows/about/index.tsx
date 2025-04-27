import Image from "next/image";

export default function AboutWindow(){
    return(
        <div className="bg-red-00 bg-white p-3">
            <div className="flex justify-center items-center gap-5 py-5 border-b">
                <div className="hover:scale-110 ease-out transition-all">
                    <Image className="h-34 w-34 rounded-full object-cover" src={'/pictures/profile.jpg'} width={180} height={180} alt="..." />
                </div>
                <div>
                    <h2 className="text-5xl font-bold">Yassine Zebiri</h2>
                    <h3 className="text-lg font-extralight my-3">hi ,i'm developer web and freelance</h3>
                </div>
            </div>
            <div className="px-4 py-2 text-lg font-extralight text-gray-600  ">
                <p className="py-3">Hello! I'm <strong> Yassine Zebiri</strong>, a web developer specializing in building modern and creative web applications.</p>
                <h2 className="text-2xl font-bold py-2">What can I do?</h2>
                <ul className=" list-disc pl-8">
                    <li>🎨 Front-end development .</li>
                    <li>🖥️ Creating and designing custom WordPress websites without pre-made templates.</li>
                    <li>⚡ Building lightweight, fast, and fully responsive web applications.</li>
                    <li>🛠️ Improving website performance and enhancing user experience (UX/UI).</li>
                </ul>
               <div className="py-3">
                <h2 className="text-2xl font-bold py-2">🌍 Languages</h2>
                <div className="pl-5 border-l-3 ">
                <p >I am fluent in Arabic, my native language, and have a strong proficiency in <strong>English</strong>, allowing me to communicate effectively in both personal and professional contexts.</p>

                </div>
               </div>
            </div>
        </div>
    )
}