import Image from "next/image";

const experiences = [
    {
        company: "Freelance",
        logo: "F", // Replace with your actual freelance logo if available
        role: "Freelance Frontend Developer",
        year: "Jan 2017 - Oct 2019",
        description:
            "Worked with a variety of clients on diverse web development projects, specializing in building responsive and user-friendly interfaces. Delivered high-quality solutions tailored to client needs, collaborating closely to ensure project success and satisfaction.",
    },
    {
        company: "xLayer Technologies Private Limited",
        logo: "https://ik.imagekit.io/sbwxpfy3z/tr:w-192/xlayerLogoWhite.webp",
        role: "Software Developer at xLayer",
        year: "March 2024 - August 2024",
        description:
            "Contributed to the development of scalable web applications and internal tools at xLayer Technologies. Collaborated with cross-functional teams to design, implement, and optimize features, focusing on performance, maintainability, and user experience.",
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
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}