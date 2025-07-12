"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Smartphone,
  Globe,
  Download,
  Star,
  Zap,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Bun.js",
      "Java",
      "Spring Boot",
      "RESTful APIs",
    ],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma"],
    tools: ["Git", "Docker", "Postman", "VS Code", "IntelliJ IDEA"],
  };

  const projects = [
    {
      title: "thoughtdrop",
      description:
        "thoughtdrop is a modern, full-stack blog platform that empowers users to express themselves through written content. With a simple interface and robust features, users can sign up, create posts, browse, filter, and manage blog entries seamlessly.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/seniru22/thoughtdrop",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Elevate Estate",
      description:
        "Elevate Estate is a modern, Airbnb-inspired platform for booking and hosting vacation rentals. Built with React, it delivers a smooth, responsive, and user-friendly experience for travelers and hosts alike.",
      tech: ["React"],
      github: "https://github.com/seniru22/elevate-estate",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Tour",
      description:
        "A modern, responsive travel and tour website built using React, Vite, and Tailwind CSS. ",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/seniru22/tour",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for social media metrics with data visualization and real-time updates.",
    //   tech: ["React", "Chart.js", "Express.js", "MongoDB", "Redis"],
    //   github: "#",
    //   live: "#",
    //   image: "/placeholder.svg?height=200&width=300",
    //   featured: false,
    // },
  ];

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "XGen Group",
      period: "Nov 2023 - Present",
      description: [
        "Built dynamic and scalable web applications using Vue.js 3 and Bootstrap, improving user experience and application performance.",
        "Developed key modules for a Loan Origination System using React.js, Node.js, Express.js, and Material UI, ensuring efficient workflows and clean UI design.",
        "Contributed to the Nissan Finance project with a focus on performance optimization and scalability, working with Next.js, Node.js, Express.js, and Material UI.",
        "Designed and implemented features for a Customer Portal application using Bun.js and Express.js, improving system responsiveness.",
        "Built an SMS-Email Service leveraging Node.js, Express.js, and RabbitMQ to enable reliable asynchronous messaging and increase service reliability.",
      ],
    },
    {
      title: "Intern Software Engineer",
      company: "XGen Group",
      period: "Apr 2023 - Nov 2023",
      description: [
        "Developed dynamic and scalable user interfaces using Vue.js 3 (Composition API) and Bootstrap, ensuring responsive and modern application designs.",
        "Implemented state management solutions with Pinia, optimizing application data flow and improving performance.",
        "Integrated RESTful APIs to enable seamless communication between frontend and backend services.",
        "Collaborated with the development team to deliver high-quality, maintainable code.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seniru Kasthuriarachchi
            </h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative group text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=180&width=180"
                alt="Profile"
                width={180}
                height={180}
                className="relative rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent leading-tight">
                Seniru Kasthuriarachchi
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <Rocket className="w-6 h-6 text-blue-600 animate-bounce" />
                <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Associate Full Stack Developer
                </p>
                <Zap className="w-6 h-6 text-purple-600 animate-pulse" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate about building scalable web applications using{" "}
              <span className="font-semibold text-emerald-600">MERN stack</span>
              . I love turning complex problems into simple, beautiful solutions
              that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#projects">
                  <Code2 className="w-5 h-5 mr-2" />
                  View Projects
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/SENIRU-KASTHURIARACHCHI-CV.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a dedicated Associate Full Stack Developer with{" "}
                  <span className="font-semibold text-blue-600">2+ years</span>{" "}
                  of experience building modern web applications. My expertise
                  spans across the MERN stack and Java ecosystem, allowing me to
                  create comprehensive end-to-end solutions.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I thrive in collaborative environments and enjoy tackling
                  challenging problems with clean, efficient code. My goal is to
                  create applications that not only meet technical requirements
                  but also provide exceptional user experiences that drive
                  business success.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-emerald-600" />
                    <span>Available for Remote</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Open to Opportunities</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        Frontend Development
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Creating responsive and interactive user interfaces with
                      React, TypeScript, and modern CSS frameworks that deliver
                      exceptional user experiences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/50 dark:to-teal-950/50 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        Backend Development
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Building robust APIs and server-side applications using
                      Node.js, Express, and Java Spring Boot with scalable
                      architecture patterns.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        Database Management
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Designing and optimizing databases with MongoDB, MySQL,
                      and PostgreSQL for high-performance scalable applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/20 relative"
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web
              applications
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:scale-105 hover:rotate-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <div className="p-2 bg-white/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white hover:scale-105 hover:-rotate-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <div className="p-2 bg-white/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Server className="w-6 h-6" />
                    </div>
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white hover:scale-105 hover:rotate-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <div className="p-2 bg-white/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-6 h-6" />
                    </div>
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:scale-105 hover:-rotate-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <div className="p-2 bg-white/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-6 h-6" />
                    </div>
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and technical capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  project.featured
                    ? "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"
                    : "bg-white dark:bg-slate-800"
                } hover:scale-105`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-300 dark:border-slate-600 hover:border-slate-800 dark:hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
                      asChild
                    >
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                      asChild
                    >
                      <Link href={project.live}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-950/20 relative"
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 hover:scale-105"
                >
                  <CardHeader className="pb-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-2 md:space-y-0">
                      <div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="self-start md:self-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 px-4 py-2"
                      >
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start group/item">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                          <span className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover/item:text-slate-800 dark:group-hover/item:text-slate-100 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can work together to create
              something amazing!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 hover:scale-105 hover:rotate-1">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    Email
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    senirubsn@gmail.com
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    Phone
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    +94702034277
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 hover:scale-105 hover:-rotate-1">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    Location
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Colombo, Sri Lanka
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="mailto:senirubsn@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-200 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/seniru-kasthuriarachchi-3b9b4626a/">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-200 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="https://github.com/seniru22">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Seniru Kasthuriarachchi
            </h3>
            <p className="text-slate-300">Associate Full Stack Developer</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://github.com/seniru22"
              className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/seniru-kasthuriarachchi-3b9b4626a/"
              className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:senirubsn@gmail.com"
              className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2024 Seniru Kasthuriarachchi. Built with{" "}
              <span className="text-blue-400">Next.js</span> and{" "}
              <span className="text-purple-400">Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
