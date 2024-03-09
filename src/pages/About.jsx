
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About(){

    return(
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto text-center max-w-screen-md">
                <h1 className="text-3xl font-bold text-center py-5 ">
                    About Space
                </h1>
                <p className="py-2">Space is a student health and wellness application developed in 2024 by Paul, Harman, Sami, Ricky, and Ebod that allows you to track your sleep, hydration, emotional calmness and nutrition levels. This web app uses clean, simple features that are easy for you to use and understand.</p>
                <h1 className="text-3xl font-bold text-center py-5 ">
                    Meet the Developers!
                </h1>
                <p className="py-2">Paul is a full stack developer based in Vancouver, British Columbia, Canada. He has been working in the financial industry for 7+ years before studying at British Columbia Institute of Technology for 3 years and graduating from the Applied Software Development and Applied Web Development programs in December 2023. He also loves capybaras, semi-aquatic rodents native to South America!</p>
                <p className="py-2">Harman is a software developer based in Vancouver, British Columbia, Canada. He is in term 3 of the Bachelor of Science in Applied Computer Science program at British Columbia Institute of Technology.</p>
                <p className="py-2">Sami is a software developer based in Vancouver, British Columbia, Canada. He is in term 3 of the Bachelor of Science in Applied Computer Science program at British Columbia Institute of Technology.</p>
                <p className="py-2">Ricky is a UI UX designer based in Vancouver, British Columbia, Canada. He graduated the UI UX design program at British Columbia Institute of Technology.</p>
                <p className="py-2">Ebod is a software developer based in Vancouver, British Columbia, Canada. He is in term 2 of the Computer Systems Technology diploma program at British Columbia Institute of Technology.</p>
            </main>
            <Footer />
        </div>
    )
}