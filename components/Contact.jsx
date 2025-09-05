
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-12">
            <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Left side: Contact Form */}
                <Card className="w-full max-w-lg border-none  rounded-none shadow-none">
                    <CardHeader className="rounded-none">
                    </CardHeader>
                    <CardContent className="rounded-none">
                        <form className="flex flex-col gap-4">
                            <Input
                                type="text"
                                placeholder="Your name"
                                required
                                className="rounded-none border border-black"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                required
                                className="rounded-none border border-black"
                            />
                            <Input
                                type="text"
                                placeholder="Your website (optional)"
                                className="rounded-none border border-black"
                            />
                            <Textarea
                                placeholder="How can I help?*"
                                required
                                rows={4}
                                className="rounded-none border border-black"
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <Button type="submit" className="w-fit rounded-none">
                                    Get In Touch
                                </Button>
                                <div className="flex gap-3">
                                    <a
                                        href="mailto:your@email.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group transition-colors duration-200 bg-white border border-gray-200 hover:bg-black p-2 flex items-center justify-center"
                                    >
                                        <Mail
                                            size={20}
                                            className="text-black group-hover:text-white transition-colors duration-200"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group transition-colors duration-200 bg-white border border-gray-200 hover:bg-black p-2 flex items-center justify-center"
                                    >
                                        <Github
                                            size={20}
                                            className="text-black group-hover:text-white transition-colors duration-200"
                                        />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group transition-colors duration-200 bg-white border border-gray-200 hover:bg-black p-2 flex items-center justify-center"
                                    >
                                        <Linkedin
                                            size={20}
                                            className="text-black group-hover:text-white transition-colors duration-200"
                                        />
                                    </a>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Right side: Contact Info or Illustration */}
                <div className="hidden md:flex flex-col items-start justify-center w-full max-w-md px-8 py-10 bg-white/80 rounded-xl shadow-lg border border-muted">
                    <h2 className="mb-1 text-2xl font-extrabold tracking-tight text-primary">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Talk</span>
                    </h2>
                    <p className="mb-2 text-lg font-semibold text-muted-foreground">
                        For something special
                    </p>
                    <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                        I seek to push the limits of creativity to create highly engaging, user-friendly, and memorable interactive experiences.
                    </p>
                    <div className="flex flex-col gap-2 mt-2 w-full">
                        <div className="flex items-center gap-2">
                            <Mail className="text-primary" size={18} />
                            <a
                                href="mailto:abirsarkar1999@gmail.com"
                                className="text-base font-medium hover:underline transition-colors"
                            >
                                abirsarkar1999@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                            <a
                                href="tel:+919641598284"
                                className="text-base font-medium hover:underline transition-colors"
                            >
                                +91 9641598284
                            </a>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-muted hover:bg-primary hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-muted hover:bg-primary hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}