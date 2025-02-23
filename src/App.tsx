import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Menu, X, Sun, Moon, Code2 } from "lucide-react";
import emailjs from "@emailjs/browser";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "C#", "Python", "Java"],
    },
    {
      category: "Frameworks & Tools",
      items: [
        "ReactJS",
        "Node.js",
        "SpringBoot",
        "Docker",
        "Django",
        "Flask",
        "Git",
        "Webpack",
      ],
    },
    { category: "Cloud & DevOps", items: ["Azure", "Firebase", "Kubernetes"] },
    {
      category: "Database Technologies",
      items: ["MySQL", "MongoDB", "SQLite"],
    },
    { category: "Additional Tools", items: ["PowerBI", "Tableau"] },
  ];

  const projects = [
    {
      title: "Web3 Decentralized Application",
      description:
        "A decentralized social networking web application for sharing books, blogs, and media files. Integrated with MetaMask for secure authentication and IPFS for decentralized storage.",
      technologies: [
        "Web3.0",
        "MetaMask",
        "React",
        "TypeScript",
        "IPFS",
        "Ethereum",
      ],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      github: "https://github.com/KaviRajVedi/SocialMediaonBlockchain",
    },
    {
      title: "Stock Exchange Web Application",
      description:
        "A prototype for real-time stock transactions with live NASDAQ API integration. Features a simple, intuitive interface with secure backend operations.",
      technologies: [
        "Python",
        "SQLite",
        "phpLiteAdmin",
        "HTML",
        "CSS",
        "GitHub",
      ],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      github: "https://github.com/KaviRajVedi/Stock-Exchange",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        "service_hk73vpg",
        "contact_form",
        formRef.current,
        "L7ZD7YfhoyYYNI8fF"
      );
      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
          : "bg-gradient-to-br from-gray-100 via-purple-100 to-violet-100"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="theme-toggle"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`mobile-menu-button md:hidden ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${
          isMenuOpen ? "open" : "closed"
        } md:hidden`}
      />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden ${isMenuOpen ? "open" : "closed"} ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span
              className={`font-semibold text-lg ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark" ? "hover:bg-white/10" : "hover:bg-black/10"
              }`}
            >
              <X
                size={24}
                className={theme === "dark" ? "text-white" : "text-black"}
              />
            </button>
          </div>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    theme === "dark"
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-black/80 hover:bg-black/10 hover:text-black"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="glass-nav hidden md:block">
        <ul className="flex items-center justify-center space-x-8">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`nav-link cursor-pointer ${
                  theme === "dark"
                    ? "text-white/80 hover:text-white"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ opacity }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl py-4 font-bold mb-2 gradient-text"
          >
            Kavi Raj Vedi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl mb-8 ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}
          >
            Full Stack Developer & Data Analytics Specialist
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/KaviRajVedi"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kavirajvedi"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center gradient-text`}>
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p
              className={`text-lg mb-6 ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              }`}
            >
              Results-driven Full-stack Developer with over 1 year of
              professional experience in software development, with a strong
              emphasis on front-end development and data analytics. Proficient
              in building secure, scalable, and high-performance microservices
              and micro front end architectures using TypeScript, ReactJS,
              Node.js, Docker, and cloud platforms.
            </p>
            <p
              className={`text-lg mb-6 ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              }`}
            >
              Currently working as a Software Developer at ZeroCac, focusing on
              Frontend & Data Analytics, where I design and develop dynamic
              front-end components and implement data scraping pipelines.
            </p>
            <div className="mt-12">
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4
                    className={`text-xl font-medium ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Masters in Computer Application
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    University College of Engineering, Osmania University
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    Dec 2021 – Dec 2023 | CGPA: 7.4
                  </p>
                </div>
                <div>
                  <h4
                    className={`text-xl font-medium ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Bachelors in Computer Science
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    St. Joseph's Degree and P.G College, Osmania University
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    June 2018 – Nov 2021 | CGPA: 8.3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2
            className={`text-4xl font-bold mb-12 py-4 text-center gradient-text`}
          >
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 max-w-6xl mx-auto">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card items-center"
              >
                <h3
                  className={`text-xl text-center font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === "dark"
                          ? "bg-white/10 text-white/90"
                          : "bg-black/10 text-black/90"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coding Profiles */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3
              className={`text-2xl font-bold mb-8 text-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Coding Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://leetcode.com/u/BerryFur/"
                target="_blank"
                rel="noopener noreferrer"
                className="coding-profile-card group"
              >
                <div className="flex items-center space-x-4">
                  <Code2
                    className={
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }
                    size={24}
                  />
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      LeetCode
                    </h4>
                    <p
                      className={
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }
                    >
                      @BerryFur
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://codeforces.com/profile/BerryFur"
                target="_blank"
                rel="noopener noreferrer"
                className="coding-profile-card group"
              >
                <div className="flex items-center space-x-4">
                  <Code2
                    className={
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }
                    size={24}
                  />
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Codeforces
                    </h4>
                    <p
                      className={
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }
                    >
                      @BerryFur
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center gradient-text`}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="project-overlay">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs ${
                          theme === "dark"
                            ? "bg-white/20 text-white/90"
                            : "bg-black/20 text-black/90"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        theme === "dark"
                          ? "text-white/80 hover:text-white"
                          : "text-black/80 hover:text-black"
                      }
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center gradient-text`}>
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact-input"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-input"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="contact-input"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white text-purple-900 hover:bg-white/90 disabled:bg-white/50"
                    : "bg-black text-white hover:bg-black/90 disabled:bg-black/50"
                } disabled:cursor-not-allowed`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
