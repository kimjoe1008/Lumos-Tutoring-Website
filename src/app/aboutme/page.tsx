import Background from "../background";
import ContactMeButton from "../contactmebutton";
import NavBar from "../navbar";


export default function AboutMe() {
    return (
        <main className="relative h-screen overflow-hidden">
            <Background />
            <div className="flex flex-col h-screen">
                <NavBar/>
                <div className="flex items-center justify-center grow">
                    <div className="flex w-1/2">
                        <img src="/NoahFormal.jpg" alt="Formal image of Noah" className="w-1/2 rounded-xl mr-2"/>
                        <div className="w-1/2 ml-2">
                            <div className="text-6xl font-medium">Noah Kim</div>
                            <p className="">Noah’s tutoring career started five years ago in his town’s public library helping his friends with SAT problems they were having trouble with. Four years later, he’s accumulated experience teaching students of all ages, ranging from subjects such as middle school math and english to AP Calculus and SAT.  Noah’s goal is to help people achieve their academic goals in a timeframe that works for them.
                            <br></br>
                            <br></br>
                            Outside of tutoring, Noah is a rising junior at Georgetown pursuing a bachelor’s degree in Economics and Mathematics. He has professional experience interning in multiple unique environments, including Reichman and Associates, P.C., a forensic accounting firm, and LG Electronics. In his free time, he runs a Bubble Tea company on campus, plays electric guitar, and paints (oil).</p>
                        </div>
                    </div>
                </div>
                <ContactMeButton/>
            </div>
        </main>
    );
}