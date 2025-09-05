
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, TwitterIcon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Data:", formData);
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            website: "",
            message: ""
        });
        alert("Message sent! Check console for details.");
    };

    return (
        <section id="contact-me" className="bg-white py-16 mx-auto">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-4xl text-black text-center mb-16">
                    <span>Get In </span>
                    <span className="font-bold">Touch</span>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side: Contact Form */}
                    <div className="flex-1 max-w-2xl">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-white border border-black text-black placeholder:text-black/60 rounded-none focus:border-black focus:ring-0"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-white border border-black text-black placeholder:text-black/60 rounded-none focus:border-black focus:ring-0"
                                />
                            </div>
                            <Input
                                type="text"
                                name="website"
                                placeholder="Your website (optional)"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="bg-white border border-black text-black placeholder:text-black/60 rounded-none focus:border-black focus:ring-0"
                            />
                            <Textarea
                                name="message"
                                placeholder="How can I help?*"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="bg-white border border-black text-black placeholder:text-black/60 rounded-none focus:border-black focus:ring-0 resize-none"
                            />
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Button 
                                    type="submit" 
                                    className="bg-black text-white hover:bg-black/90 rounded-none px-7 py-6 font-semibold"
                                >
                                    Send Message
                                </Button>
                                <div className="flex gap-4">
                                    <a
                                        href="mailto:abirsarkar1999@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border border-black flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors"
                                    >
                                        <Mail size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/knightabir"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border border-black flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/abir-sarkar"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border border-black flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://x.com/its_abirsarkar"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border border-black flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors"
                                    >
                                        <TwitterIcon size={20} />
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right side: Contact Info */}
                    <div className="flex-1 max-w-md">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Let's <span className="text-black/60">Talk</span>
                        </h2>
                        <p className="text-black/80 text-lg mb-8 leading-relaxed">
                            I seek to push the limits of creativity to create highly engaging, user-friendly, and memorable interactive experiences.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 border border-black flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors">
                                    <Mail size={20} className="text-inherit" />
                                </div>
                                <a
                                    href="mailto:abirsarkar1999@gmail.com"
                                    className="text-black hover:text-black/80 transition-colors"
                                >
                                    abirsarkar1999@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 border border-black flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-inherit">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <a
                                    href="tel:+919641598284"
                                    className="text-black hover:text-black/80 transition-colors"
                                >
                                    +91 9641598284
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}