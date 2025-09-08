import { Circle, KeyRound, PointerIcon } from "lucide-react";
import Image from "next/image";

const experiences = [
    {
        company: "Freelance",
        logo: "F",
        role: "Freelance Frontend Developer",
        year: "Jan 2017 - Oct 2019",
        description: [
            "Specialized in REST API development using Node.js, Express.js, React, Spring Boot, Python Flask, and Django.",
            "Developed and maintained over 15+ applications, database, and cloud deployment solutions."
        ]
    },
    {
        company: "xLayer Technologies Private Limited",
        logo: "https://ik.imagekit.io/sbwxpfy3z/tr:w-192/xlayerLogoWhite.webp",
        role: "Software Developer at xLayer",
        year: "March 2024 - August 2024",
        description: [
            "Built JavaSpring Bootmicroservices for attendance system, improving efficiency by 35%.",
            "Developed Python Tornado APIs for loan app, processing 500+ daily transactions with 99.9% uptime."
        ]
    },
];

export default function Experience() {
    return (
        <section className="bg-black py-16">
            <div className="text-4xl text-white text-center mb-12">
                <span>My </span>
                <span className="font-bold">Experience</span>
            </div>
            <div className="container mx-auto flex flex-col gap-6 max-w-4xl">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-black rounded-lg p-6 border border-gray-500"
                    >
                        <div className="flex flex-row items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                {/* Logo container with improved border design */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-500 bg-neutral-900 shadow-md overflow-hidden">
                                    {exp.logo.startsWith("http") ? (
                                        <Image
                                            src={exp.logo}
                                            alt={exp.company + " logo"}
                                            width={48}
                                            height={48}
                                            className="object-contain w-10 h-10"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-white">
                                            {exp.logo}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xl font-bold text-white">{exp.role}</span>
                            </div>
                            <span className="text-white text-sm">{exp.year}</span>
                        </div>
                        <p className="text-white text-sm leading-relaxed">
                            {exp.description.map((line, i) => (
                                <span key={i}>
                                    <Circle className="inline-block mr-2 mb-1" size={12} key={"icon-" + i} />
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}