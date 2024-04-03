import Image from "next/image";


function Loading() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <Image
                src='/logo.png'
                alt="Logo"
                width={150}
                height={150}
                className="animate-pulse duration-700"
            >

            </Image>
        </div>
    );
}

export default Loading;