/**
 * Preset prompts organized by category
 * These are the default prompts that users can select from
 */

export interface PresetPrompt {
  id: string;
  text: string;
  category: string;
  emoji: string;
}

export interface PresetCategory {
  name: string;
  emoji: string;
  prompts: PresetPrompt[];
}

// Default preset prompts - this is the original set that can be restored
export const DEFAULT_PRESETS: PresetCategory[] = [
  {
    name: "Decision Making & Planning",
    emoji: "🤔",
    prompts: [
      {
        id: "decision-1",
        text:
          "Help me think through the pros and cons of a major decision I'm facing. Ask me questions to understand my situation better.",
        category: "Decision Making",
        emoji: "🤔",
      },
      {
        id: "decision-2",
        text:
          "I'm considering two different career paths. Can you help me evaluate the pros and cons of each option?",
        category: "Decision Making",
        emoji: "🤔",
      },
      {
        id: "decision-3",
        text: "Help me plan a thoughtful birthday surprise. What are some creative ideas I should consider?",
        category: "Decision Making",
        emoji: "🤔",
      },
    ],
  },
  {
    name: "Communication & Writing",
    emoji: "✍️",
    prompts: [
      {
        id: "comm-1",
        text:
          "Draft a polite follow-up message for someone who hasn't responded to my previous message. Make it friendly and non-pushy.",
        category: "Communication",
        emoji: "✍️",
      },
      {
        id: "comm-2",
        text:
          "Help me write a professional email. I'll tell you who it's for and what it's about.",
        category: "Communication",
        emoji: "✍️",
      },
      {
        id: "comm-3",
        text:
          "I have a message I'd like to rewrite. Can you help me make it sound more professional and polished?",
        category: "Communication",
        emoji: "✍️",
      },
    ],
  },
  {
    name: "Daily Planning & Organization",
    emoji: "📅",
    prompts: [
      {
        id: "planning-1",
        text: "Help me create an effective daily schedule. What's the best way to structure my day for maximum productivity?",
        category: "Planning",
        emoji: "📅",
      },
      {
        id: "planning-2",
        text:
          "What should I focus on today? Help me identify my top priorities and create a plan.",
        category: "Planning",
        emoji: "📅",
      },
      {
        id: "planning-3",
        text:
          "Help me organize my week. What's the best approach to balance my work, personal tasks, and self-care?",
        category: "Planning",
        emoji: "📅",
      },
    ],
  },
  {
    name: "Personal Tasks & Reminders",
    emoji: "✅",
    prompts: [
      {
        id: "tasks-1",
        text:
          "I have some ingredients in my fridge and need meal ideas. Can you suggest recipes based on what I have?",
        category: "Tasks",
        emoji: "✅",
      },
      {
        id: "tasks-2",
        text:
          "Help me create a comprehensive checklist for an upcoming trip. What are the essential things I shouldn't forget?",
        category: "Tasks",
        emoji: "✅",
      },
      {
        id: "tasks-3",
        text:
          "What are some important things I should remember to do this week? Help me think of tasks I might be forgetting.",
        category: "Tasks",
        emoji: "✅",
      },
    ],
  },
  {
    name: "Problem Solving & Advice",
    emoji: "💡",
    prompts: [
      {
        id: "advice-1",
        text:
          "I'm facing a challenge and need help thinking through solutions. Can you ask me questions to better understand my situation?",
        category: "Advice",
        emoji: "💡",
      },
      {
        id: "advice-2",
        text:
          "I'm dealing with a difficult situation at work. What are some strategies I could use to handle it effectively?",
        category: "Advice",
        emoji: "💡",
      },
      {
        id: "advice-3",
        text:
          "Help me brainstorm creative ways to achieve a goal I have. I'll share the goal with you.",
        category: "Advice",
        emoji: "💡",
      },
    ],
  },
  {
    name: "Time Management & Productivity",
    emoji: "⏰",
    prompts: [
      {
        id: "time-1",
        text:
          "I have multiple tasks to complete. How should I prioritize them? What's the best method for deciding what to do first?",
        category: "Time Management",
        emoji: "⏰",
      },
      {
        id: "time-2",
        text:
          "Help me estimate how long different tasks will take. I'll share my task list with you.",
        category: "Time Management",
        emoji: "⏰",
      },
      {
        id: "time-3",
        text:
          "I have a big project to tackle. What's the best way to break it down into smaller, manageable steps?",
        category: "Time Management",
        emoji: "⏰",
      },
    ],
  },
];
