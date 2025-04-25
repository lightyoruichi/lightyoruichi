"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import SocialLinks from "./social-links"
import SkillsSection from "./skills-section"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import ExperienceSection from "./experience-section"
import md5 from "crypto-js/md5"

export default function ProfileCard() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  // Ensure theme is only accessed client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const profileData = {
    name: "Harinder Singh",
    title: "Growth & AI-Driven Marketing Strategist",
    bio: "I focus on creating efficient, scalable growth systems backed by data, technology, behavioral science and automation. If you're looking to improve customer acquisition, streamline marketing operations, or explore AI-driven solutions, feel free to reach out.",
    location: "Malaysia",
    email: "harinder.mke@gmail.com",
    gravatarEmail: "satnam182@gmail.com",
    skills: [
      { name: "Growth Strategy", level: 95 },
      { name: "AI Marketing", level: 90 },
      { name: "SEO", level: 85 },
      { name: "Automation", level: 88 },
      { name: "Conversion Optimization", level: 92 },
      { name: "Performance Marketing", level: 85 },
    ],
    achievements: [
      "Scaled organic traffic from 0 to 210K visitors/month",
      "Increased lead generation by 10x using AI sales agents",
      "Improved eCommerce conversion rates by 250%",
      "Reduced customer acquisition costs by 30%",
    ],
    experience: [
      {
        role: "Fractional CMO/Growth",
        company: "Consulting",
        period: "Current",
        description:
          "Doing the nomad thing, helping other founders with growth strategy, AI-driven marketing automation, and revenue optimization. Focused on founders/teams facings problems with go-to-market execution, demand generation, and scalable growth systems ",
      },
      {
        role: "Digital Marketing Manager",
        company: "JS Morlu",
        period: "2020-2023",
        description: "Led SEO, AI automation, and conversion optimization initiatives.",
      },
      {
        role: "Digital Strategist",
        company: "Galaxy Racer",
        period: "2018-2020",
        description: "Managed growth for esports and gaming brands.",
      },
      {
        role: "Freelance Consultant",
        company: "Various Clients",
        period: "2015-2018",
        description: "Focused on eCommerce UX, lifecycle marketing, and revenue optimization.",
      },
    ],
    techStack: [
      "ReactJS",
      "Node.js",
      "WordPress",
      "SQL",
      "Python",
      "PHP",
      "LAMP",
      "AI Tools",
      "Zapier",
      "GA4",
      "Marketing Automation",
    ],
  }

  // Generate proper Gravatar URL with MD5 hash
  const getGravatarUrl = (email: string) => {
    const hash = md5(email.trim().toLowerCase()).toString()
    return `https://www.gravatar.com/avatar/${hash}?s=200&d=mp`
  }

  const gravatarUrl = getGravatarUrl(profileData.gravatarEmail)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="border-2 shadow-lg overflow-hidden">
        <CardHeader className="relative p-0">
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </Button>
          </div>
          <div className="h-32 bg-gradient-to-r from-teal-500 to-emerald-600" />
          <div className="flex flex-col items-center -mt-12 px-6">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={gravatarUrl || "/placeholder.svg"} alt={profileData.name} />
              <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-2xl font-bold">{profileData.name}</h2>
            <p className="text-muted-foreground text-center">{profileData.title}</p>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <span>{profileData.location}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="connect">Connect</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className={cn("space-y-4", activeTab !== "about" && "hidden")}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <p className="text-muted-foreground leading-relaxed">{profileData.bio}</p>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Key Achievements</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {profileData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.techStack.slice(0, 6).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {profileData.techStack.length > 6 && (
                      <Badge variant="outline">+{profileData.techStack.length - 6} more</Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            <TabsContent value="skills" className={cn("space-y-4", activeTab !== "skills" && "hidden")}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <SkillsSection skills={profileData.skills} />
              </motion.div>
            </TabsContent>
            <TabsContent value="experience" className={cn("space-y-4", activeTab !== "experience" && "hidden")}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <ExperienceSection experience={profileData.experience} />
              </motion.div>
            </TabsContent>
            <TabsContent value="connect" className={cn("space-y-4", activeTab !== "connect" && "hidden")}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <SocialLinks />
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}
