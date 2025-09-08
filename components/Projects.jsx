import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            number: "01",
            title: "Riot QR - Real Time QR Generator",
            description: "A real-time QR code and barcode generator that allows users to create, download, and share codes effortlessly without requiring login. Built with React and Node.js, Riot QR offers a seamless and intuitive user experience for generating both QR codes and barcodes instantly. No user data is stored on the server, ensuring privacy and security.",
            githubUrl: "https://github.com/knightabir/RiotQR.git",
            liveUrl: "https://riotqr.vercel.app",
            tech: ["React", "Node.js", "QR Code", "Barcode"],
            image: "./riot_qr.png"
        },
        {
            number: "02",
            title: "S3 Drive - Cloud Storage Solution",
            description: "A AWS S3 wrapper application, allows users to upload, manage and share files seamlessly. Built with Next.js, it offers a user-friendly interface and robust security features, We are not storing any of your personal data in the database, it stores in your browser localstorage, and when you logout then clears all the data from your browser.",
            githubUrl: "https://github.com/knightabir/S3Drive.git",
            liveUrl: "https://my-s3-drive.vercel.app",
            tech: ["Next.js", "AWS", "Tailwind CSS", "Shadcn UI"],
            image: "./s3_drive.png"
        },
        {
            number: "03",
            title: "AI-Powered Travel Planning Platform",
            description: "An AI-driven travel planning application that leverages Google Gemini to create personalized itineraries. Users can input their preferences and receive tailored travel plans, including accommodation, activities, and dining options. Built with Next.js and MongoDB for a seamless user experience.",
            githubUrl: "https://github.com/knightabir/my-ai-travel-planner.git",
            liveUrl: "https://my-ai-tour-planner.vercel.app/",
            tech: ["Next.js", "Node.js", "MongoDB", "Google Gemini", "Vercel"],
            image: "./ai_Travel_planner.png"
        },
        {
            number: "04",
            title: "Incenti Track - Sales Incentive Tracker",
            description: "Sales tracking software where sales personnel can monitor performance and calculate potential incentives. Built with Next.js, ShadCN UI, and MongoDB, it features secure authentication with NextAuth, JWT, and Google Login for seamless and protected access.",
            githubUrl: "https://github.com/knightabir/IncentiTrack.git",
            liveUrl: "https://incenti-track.vercel.app/",
            tech: ["Next.js", "ShadCN UI", "MongoDB", "NextAuth", "JWT", "Google Login"],
            image: "./incenti_track.png"
        }
    ];

    return (
        <section id="project" className="bg-black py-16">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-4xl text-white text-center mb-16">
                    <span>My </span>
                    <span className="font-bold">Projects</span>
                </div>

                {/* Projects List */}
                <div className="max-w-7xl mx-auto space-y-32">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Project Info - 2/3 width */}
                            <div className="flex-1 max-w-4xl">
                                <div className="flex items-start gap-8">
                                    {/* Project Number */}
                                    <div className="text-8xl font-bold text-white/10 flex-shrink-0">
                                        {project.number}
                                    </div>

                                    {/* Project Details */}
                                    <div className="flex-1">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-4 py-2 border border-white/30 text-white text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors"
                                            >
                                                <Github size={20} />
                                                <span>GitHub</span>
                                            </a>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                                <span>Live Demo</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Mockup - 1/3 width */}
                            <div className="flex-1 max-w-lg flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-2xl shadow-2xl object-cover w-full h-80"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}