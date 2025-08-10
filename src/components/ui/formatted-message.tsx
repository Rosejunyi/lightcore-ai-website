"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface FormattedMessageProps {
  content: string
  isUser?: boolean
}

export function FormattedMessage({ content, isUser = false }: FormattedMessageProps) {
  // 如果是用户消息，直接显示原文
  if (isUser) {
    return (
      <div className="text-base leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    )
  }

  // AI消息使用Markdown渲染和自定义格式化
  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 标题样式
          h1: ({ children }) => (
            <h1 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold text-gray-800 mb-2 mt-4">
              {children}
            </h3>
          ),

          // 段落样式
          p: ({ children }) => (
            <p className="text-gray-700 leading-relaxed mb-4 last:mb-0">
              {children}
            </p>
          ),

          // 列表样式
          ul: ({ children }) => (
            <ul className="list-none space-y-2 mb-4 text-gray-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-none space-y-2 mb-4 text-gray-700">
              {children}
            </ol>
          ),
          li: ({ children }) => {
            const content = String(children)
            // 检查是否是数字列表项
            const numberMatch = content.match(/^(\d+)\.\s*(.*)/)
            if (numberMatch) {
              return (
                <li className="flex items-start space-x-3 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold">
                    {numberMatch[1]}
                  </span>
                  <span className="flex-1">{numberMatch[2]}</span>
                </li>
              )
            }
            // 普通列表项
            return (
              <li className="flex items-start space-x-3 leading-relaxed">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span className="flex-1">{children}</span>
              </li>
            )
          },

          // 强调样式
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 bg-yellow-100 px-1 rounded">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-blue-700 font-medium">
              {children}
            </em>
          ),

          // 链接样式
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              {children}
            </a>
          ),

          // 引用样式
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 text-gray-700 italic mb-4 rounded-r-lg">
              {children}
            </blockquote>
          ),

          // 代码样式
          code: ({ inline, children, ..._props }: { inline?: boolean; children?: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => {
            return inline ? (
              <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border" {..._props}>
                {children}
              </code>
            ) : (
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                <code {..._props}>{children}</code>
              </pre>
            )
          },

          // 分隔线
          hr: () => (
            <hr className="my-6 border-gray-300" />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}


