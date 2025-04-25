"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  BookOpen,
  Calendar,
} from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/lightyoruichi",
      icon: <Instagram className="h-5 w-5" />,
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white",
    },
    {
      name: "Twitter",
      url: "https://x.com/lightyoruichi",
      icon: <Twitter className="h-5 w-5" />,
      color: "hover:bg-black hover:text-white",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/lightyoruichi",
      icon: <Youtube className="h-5 w-5" />,
      color: "hover:bg-red-600 hover:text-white",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/lightyoruichi",
      icon: <Facebook className="h-5 w-5" />,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "GitHub",
      url: "https://github.com/lightyoruichi",
      icon: <Github className="h-5 w-5" />,
      color: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/lightyoruichi",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:bg-blue-700 hover:text-white",
    },
    {
      name: "Anon-Mail",
      url: "https://dub.sh/vibesniff-feedback",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "hover:bg-green-500 hover:text-white",
    },
    {
      name: "Email",
      url: "mailto:satnam182@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "hover:bg-orange-500 hover:text-white",
    },
    {
      name: "Substack",
      url: "https://substack.com/@lightyoruichi",
      icon: <BookOpen className="h-5 w-5" />,
      color: "hover:bg-orange-400 hover:text-white",
    },
    {
      name: "Book a Call",
      url: "https://dub.sh/hari-gcal",
      icon: <Calendar className="h-5 w-5" />,
      color: "hover:bg-teal-500 hover:text-white",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-3">
      {socialLinks.map((link) => (
        <motion.div key={link.name} variants={item}>
          <Button
            variant="outline"
            size="sm"
            className={`w-full h-12 flex items-center justify-center transition-all duration-300 ${link.color}`}
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
              <span className="ml-2 text-xs">{link.name}</span>
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
