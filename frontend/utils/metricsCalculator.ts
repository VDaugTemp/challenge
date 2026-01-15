/**
 * Utility functions for calculating metrics from chat history
 */

import { ChatSession, ChatMessage } from "@/types";

/**
 * Calculate total number of messages across all sessions
 */
export function calculateTotalMessages(sessions: ChatSession[]): number {
  return sessions.reduce((total, session) => total + session.messages.length, 0);
}

/**
 * Calculate total number of sessions
 */
export function calculateTotalSessions(sessions: ChatSession[]): number {
  return sessions.length;
}

/**
 * Calculate average messages per session
 */
export function calculateAvgMessagesPerSession(sessions: ChatSession[]): number {
  if (sessions.length === 0) return 0;
  const totalMessages = calculateTotalMessages(sessions);
  return Math.round((totalMessages / sessions.length) * 10) / 10; // Round to 1 decimal
}

/**
 * Calculate average session duration in minutes
 */
export function calculateAvgSessionDuration(sessions: ChatSession[]): number {
  if (sessions.length === 0) return 0;
  
  const durations = sessions
    .filter(session => session.messages.length > 0) // Only sessions with messages
    .map(session => {
      const duration = session.updatedAt - session.createdAt;
      return duration / (1000 * 60); // Convert to minutes
    });
  
  if (durations.length === 0) return 0;
  
  const avgDuration = durations.reduce((sum, duration) => sum + duration, 0) / durations.length;
  return Math.round(avgDuration * 10) / 10; // Round to 1 decimal
}

/**
 * Calculate average word count across all messages
 */
export function calculateAvgWordCount(sessions: ChatSession[]): number {
  const allMessages = sessions.flatMap(session => session.messages);
  if (allMessages.length === 0) return 0;
  
  const totalWords = allMessages.reduce((sum, message) => {
    const wordCount = message.content.trim().split(/\s+/).filter(word => word.length > 0).length;
    return sum + wordCount;
  }, 0);
  
  return Math.round(totalWords / allMessages.length);
}

/**
 * Calculate average word count of assistant responses only
 */
export function calculateAvgResponseLength(sessions: ChatSession[]): number {
  const assistantMessages = sessions.flatMap(session => 
    session.messages.filter(msg => msg.role === "assistant")
  );
  
  if (assistantMessages.length === 0) return 0;
  
  const totalWords = assistantMessages.reduce((sum, message) => {
    const wordCount = message.content.trim().split(/\s+/).filter(word => word.length > 0).length;
    return sum + wordCount;
  }, 0);
  
  return Math.round(totalWords / assistantMessages.length);
}

/**
 * Calculate messages grouped by day
 */
export function calculateMessagesOverTime(sessions: ChatSession[]): Array<{ date: string; count: number }> {
  const messageCounts: Record<string, number> = {};
  
  sessions.forEach(session => {
    session.messages.forEach(message => {
      const date = new Date(message.timestamp);
      const dateKey = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      });
      
      messageCounts[dateKey] = (messageCounts[dateKey] || 0) + 1;
    });
  });
  
  // Convert to array and sort by date
  const result = Object.entries(messageCounts)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => {
      // Sort by date
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  
  return result;
}

/**
 * Calculate the hour of day (0-23) with the most messages
 */
export function calculateMostActiveHour(sessions: ChatSession[]): number {
  const hourCounts: Record<number, number> = {};
  
  sessions.forEach(session => {
    session.messages.forEach(message => {
      const hour = new Date(message.timestamp).getHours();
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });
  });
  
  if (Object.keys(hourCounts).length === 0) return 0;
  
  // Find hour with max count
  let maxHour = 0;
  let maxCount = 0;
  
  Object.entries(hourCounts).forEach(([hour, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxHour = parseInt(hour);
    }
  });
  
  return maxHour;
}

/**
 * Calculate the day of week with the most messages
 */
export function calculateMostActiveDay(sessions: ChatSession[]): string {
  const dayCounts: Record<string, number> = {};
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  sessions.forEach(session => {
    session.messages.forEach(message => {
      const dayName = dayNames[new Date(message.timestamp).getDay()];
      dayCounts[dayName] = (dayCounts[dayName] || 0) + 1;
    });
  });
  
  if (Object.keys(dayCounts).length === 0) return 'N/A';
  
  // Find day with max count
  let maxDay = 'N/A';
  let maxCount = 0;
  
  Object.entries(dayCounts).forEach(([day, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxDay = day;
    }
  });
  
  return maxDay;
}

