"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useThemeStyles } from "@/hooks/useThemeStyles";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Component to render markdown content with proper styling
 * Handles common markdown features like bold, italic, code blocks, lists, etc.
 */
export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const styles = useThemeStyles();

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ node, ...props }) => (
            <h1
              className="text-2xl font-bold mt-4 mb-2"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-xl font-bold mt-3 mb-2"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-lg font-semibold mt-3 mb-1"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          // Paragraphs
          p: ({ node, ...props }) => (
            <p
              className="mb-2 leading-relaxed"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          // Bold text
          strong: ({ node, ...props }) => (
            <strong
              className="font-semibold"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          // Italic text
          em: ({ node, ...props }) => (
            <em
              className="italic"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          // Code blocks
          code: ({ node, className, children, ...props }: any) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code
                  className="px-1.5 py-0.5 rounded text-sm font-mono"
                  style={{
                    backgroundColor: styles.surface,
                    color: styles.primary,
                    border: `1px solid ${styles.border}`,
                  }}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            // Code block (not inline) - will be wrapped in pre
            return (
              <code
                className="block p-0 text-sm font-mono"
                style={{
                  color: styles.text,
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          // Pre blocks (code blocks wrapper)
          pre: ({ node, children, ...props }: any) => (
            <pre
              className="p-3 rounded-lg overflow-x-auto my-2"
              style={{
                backgroundColor: styles.surface,
                border: `1px solid ${styles.border}`,
                color: styles.text,
              }}
              {...props}
            >
              {children}
            </pre>
          ),
          // Lists
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside mb-2 ml-4 space-y-1"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside mb-2 ml-4 space-y-1"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li
              className="mb-1"
              style={{ color: styles.text }}
              {...props}
            />
          ),
          // Links
          a: ({ node, ...props }) => (
            <a
              className="underline hover:opacity-80 transition-opacity"
              style={{ color: styles.primary }}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 pl-4 my-2 italic"
              style={{
                borderColor: styles.primary,
                color: styles.textSecondary,
              }}
              {...props}
            />
          ),
          // Horizontal rule
          hr: ({ node, ...props }) => (
            <hr
              className="my-4"
              style={{ borderColor: styles.border }}
              {...props}
            />
          ),
          // Tables (from remark-gfm)
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-2">
              <table
                className="border-collapse border"
                style={{ borderColor: styles.border }}
                {...props}
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              className="border px-3 py-2 text-left font-semibold"
              style={{
                borderColor: styles.border,
                backgroundColor: styles.surface,
                color: styles.text,
              }}
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="border px-3 py-2"
              style={{
                borderColor: styles.border,
                color: styles.text,
              }}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

