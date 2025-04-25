"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
}

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        </div>
      ))}
    </div>
  )
}
