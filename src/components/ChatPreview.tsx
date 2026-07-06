'use client';

import { useState } from 'react';
import { FlowData, FlowNode } from '@/types';

interface ChatPreviewProps {
  data: FlowData;
  onClose: () => void;
}

interface Message {
  type: 'bot' | 'user';
  text: string;
  nodeId?: string;
}

export default function ChatPreview({ data, onClose }: ChatPreviewProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const nodeMap = new Map(data.nodes.map((n) => [n.id, n]));

  // Initialize conversation on first render
  if (messages.length === 0 && currentNodeId === null) {
    const startNode = nodeMap.get('start');
    if (startNode) {
      setMessages([{ type: 'bot', text: startNode.text, nodeId: 'start' }]);
      setCurrentNodeId('start');
    }
  }

  const currentNode = currentNodeId ? nodeMap.get(currentNodeId) : null;

  const handleOptionSelect = (childId: string) => {
    const childNode = nodeMap.get(childId);
    if (!childNode) return;

    // Add user selection as message
    const userMessage: Message = {
      type: 'user',
      text: childNode.text.split(' - ')[0] || childNode.text,
      nodeId: childId,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Auto-advance through response nodes to show bot response
    if (childNode.type === 'response' && childNode.children.length > 0) {
      const endNode = nodeMap.get(childNode.children[0]);
      if (endNode) {
        setTimeout(() => {
          const botMessage: Message = {
            type: 'bot',
            text: endNode.text,
            nodeId: endNode.id,
          };
          setMessages((prev) => [...prev, botMessage]);
          setCurrentNodeId(endNode.id);
        }, 400);
      }
    } else if (childNode.type === 'question') {
      const botMessage: Message = {
        type: 'bot',
        text: childNode.text,
        nodeId: childId,
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentNodeId(childId);
    } else if (childNode.type === 'end') {
      const botMessage: Message = {
        type: 'bot',
        text: childNode.text,
        nodeId: childId,
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentNodeId(childId);
    }
  };

  const handleRestart = () => {
    const startNode = nodeMap.get('start');
    if (startNode) {
      setMessages([{ type: 'bot', text: startNode.text, nodeId: 'start' }]);
      setCurrentNodeId('start');
    }
  };

  const getNextOptions = (): FlowNode[] => {
    if (!currentNode) return [];
    return currentNode.children
      .map((id) => nodeMap.get(id))
      .filter((n) => n !== undefined) as FlowNode[];
  };

  const nextOptions = getNextOptions();
  const isEnd = currentNode?.type === 'end';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#23160d]/95 backdrop-blur-sm rounded-[24px] w-full max-w-md shadow-[16px_16px_40px_rgba(0,0,0,0.4)] border border-[#ffe3cc]/15 flex flex-col" style={{ height: '600px' }}>
        <div className="flex justify-between items-center p-5 border-b border-[#ffe3cc]/15 bg-linear-to-r from-[#2d1d10]/90 to-[#23160d]/80">
          <h2 className="text-lg font-semibold text-[#fff7ef]">Support Chat</h2>
          <button
            onClick={onClose}
            className="text-[#e7a46e] hover:text-[#ffe3cc] transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs px-4 py-2.5 rounded-[18px] text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-linear-to-r from-[#fb7507] via-[#dd8136] to-[#e7a46e] text-[#23160d] rounded-br-sm shadow-[0_10px_24px_rgba(251,117,7,0.18)]'
                    : 'bg-[#2d1d10]/80 text-[#fff7ef] rounded-bl-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.22)]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700/30 p-4 space-y-2">
          {isEnd ? (
            <button
              onClick={handleRestart}
              className="w-full bg-linear-to-r from-[#fb7507] via-[#dd8136] to-[#e7a46e] text-[#23160d] font-semibold py-2.5 px-4 rounded-2xl transition-all shadow-[0_10px_24px_rgba(251,117,7,0.2)] hover:scale-[1.01]"
            >
              Start Over
            </button>
          ) : (
            <div className="space-y-2">
              {nextOptions.map((node) => (
                <button
                  key={node.id}
                  onClick={() => handleOptionSelect(node.id)}
                  className="w-full bg-[#2d1d10]/70 hover:bg-[#3a2414] text-[#fff7ef] text-sm py-2.5 px-3 rounded-2xl transition-all text-left border border-[#ffe3cc]/15 hover:border-[#e7a46e]/30 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]"
                >
                  {node.text.split(' - ')[0] || node.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
