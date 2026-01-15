/**
 * Hook for managing metrics calculated from chat history
 * Calculates real metrics from localStorage chat sessions
 */

import { useState, useEffect } from "react";
import { Metrics, ChatSession } from "@/types";
import { useChatHistory } from "@/contexts/ChatHistoryContext";
import {
  calculateTotalMessages,
  calculateTotalSessions,
  calculateAvgMessagesPerSession,
  calculateAvgSessionDuration,
  calculateAvgWordCount,
  calculateAvgResponseLength,
  calculateMessagesOverTime,
  calculateMostActiveHour,
  calculateMostActiveDay,
} from "@/utils/metricsCalculator";

export function useMetrics() {
  const { sessions } = useChatHistory();
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Calculate metrics from chat history
  useEffect(() => {
    setLoading(true);
    
    // Small delay to ensure smooth UI updates
    const timer = setTimeout(() => {
      try {
        const calculatedMetrics: Metrics = {
          // Engagement metrics
          totalMessages: calculateTotalMessages(sessions),
          totalSessions: calculateTotalSessions(sessions),
          avgMessagesPerSession: calculateAvgMessagesPerSession(sessions),
          avgSessionDuration: calculateAvgSessionDuration(sessions),
          
          // Content metrics
          avgWordCount: calculateAvgWordCount(sessions),
          avgResponseLength: calculateAvgResponseLength(sessions),
          
          // Activity metrics
          messagesOverTime: calculateMessagesOverTime(sessions),
          mostActiveHour: calculateMostActiveHour(sessions),
          mostActiveDay: calculateMostActiveDay(sessions),
        };
        
        setMetrics(calculatedMetrics);
      } catch (error) {
        console.error("Error calculating metrics:", error);
        setMetrics(null);
      } finally {
        setLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [sessions]);

  return {
    metrics,
    loading,
  };
}
