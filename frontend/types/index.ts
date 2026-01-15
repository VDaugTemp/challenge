/**
 * Type definitions for the chat application
 */

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}

export interface Metrics {
  // Engagement metrics
  totalMessages: number;
  totalSessions: number;
  avgMessagesPerSession: number;
  avgSessionDuration: number; // in minutes
  
  // Content metrics
  avgWordCount: number;
  avgResponseLength: number; // average word count of assistant messages
  
  // Activity metrics
  messagesOverTime: Array<{ date: string; count: number }>; // messages grouped by day
  mostActiveHour: number; // hour of day (0-23) with most messages
  mostActiveDay: string; // day of week with most messages
}

