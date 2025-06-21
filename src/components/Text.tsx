import { Link } from "react-router-dom"

function Text() {
    return (
        <>
        <div className="hidden md:block max-w-2/5 mx-auto h-[75vh] mt-[25vh] text-3xl">
            <h2 className="mt-8 text-center !leading-14 cinzel-font">
                Whether you're launching a personal blog, showcasing your portfolio, starting an online store, or giving your business website a fresh new look — Fad Web and Development is here to bring your vision to life.
            </h2>

            <h2 className="mt-8 text-center !leading-20 cinzel-font">
               Contact us to get your free quote now.
            </h2>

            <div className="mt-8 hidden sm:flex absolute left-1/2 transform -translate-x-1/2 mt-12 items-center cinzel-font text-[69%]">
                <Link to={'/quote'}>
                    <button className="mt-8 px-6 py-3 !bg-white text-black rounded-md !border !border-white hover:!bg-black hover:!text-white !transition !duration-300">
                        Request Quote
                    </button>
                </Link>
            </div>
        </div>

        <div className="md:hidden max-w-[80%] mx-auto h-[75vh] mt-[25vh] text-3xl">
            <h2 className="text-center !leading-10 cinzel-font">
                A3 Web Studios is here to bring your vision to life.
            </h2>

            <div className=" sm:flex absolute left-1/2 transform -translate-x-1/2 mt-12 items-center cinzel-font text-[69%]">
                <Link to={'/quote'}>
                    <button className="mt-8 px-6 py-3 !bg-white text-black rounded-md !border !border-white hover:!bg-black hover:!text-white !transition !duration-300">
                        Request Quote
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Text