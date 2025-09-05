import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            number: "01",
            title: "Crypto Screener Application",
            description: "A comprehensive cryptocurrency screening application built with React and Node.js. Features real-time price tracking, portfolio management, and advanced filtering options. The app provides users with detailed market analysis and investment insights.",
            githubUrl: "https://github.com/knightabir/crypto-screener",
            liveUrl: "https://crypto-screener-demo.vercel.app",
            tech: ["React", "Node.js", "MongoDB", "Chart.js"],
            image: "https://placehold.co/400x300?text=Crypto+Screener"
        },
        {
            number: "02",
            title: "Euphoria - Ecommerce Website",
            description: "A modern e-commerce platform specializing in apparel and fashion. Built with Next.js and integrated with Stripe for payments. Features include product catalog, shopping cart, user authentication, and admin dashboard for inventory management.",
            githubUrl: "https://github.com/knightabir/euphoria-ecommerce",
            liveUrl: "https://euphoria-ecommerce.vercel.app",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
            image: "https://placehold.co/400x300?text=Euphoria+Ecommerce"
        },
        {
            number: "03",
            title: "Blog Website Template",
            description: "A responsive blog platform with content management system. Features include article creation, category management, comment system, and SEO optimization. Built with modern web technologies for optimal performance and user experience.",
            githubUrl: "https://github.com/knightabir/blog-template",
            liveUrl: "https://blog-template-demo.vercel.app",
            tech: ["Next.js", "Sanity CMS", "TypeScript", "Framer Motion"],
            image: "https://placehold.co/400x300?text=Blog+Template"
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