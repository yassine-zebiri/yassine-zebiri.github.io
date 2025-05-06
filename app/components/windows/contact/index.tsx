export default function ContactWindow(){
    return(
        <div className="bg-slate-800 text-white px-5 py-12 text-center text-xl text-gray-700">
            <div className="my-5">
                <p>Feel free to reach out! I'll get back to you as soon as possible.</p>
            </div>
            <div className="my-5">
                <p className="my-5">email me at <strong>yassinezebiriu@gmail.com</strong> </p>
                <a href="mailto:yassinezebiriu@gmail.com" target="_blank"
                className="px-5 py-3 bg-amber-400 text-white font-bold border
                 border-black rounded"
                >
                    send message
                </a>
            </div>

        </div>
    )
}