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
      <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl w-full max-w-md shadow-2xl border border-slate-700/50 flex flex-col" style={{ height: '600px' }}>
        <div className="flex justify-between items-center p-5 border-b border-slate-700/30 bg-gradient-to-r from-slate-800/50 to-slate-800/30">
          <h2 className="text-lg font-semibold text-white">Support Chat</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-sm shadow-lg'
                    : 'bg-slate-700/80 text-slate-50 rounded-bl-sm'
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
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2.5 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Over
            </button>
          ) : (
            <div className="space-y-2">
              {nextOptions.map((node) => (
                <button
                  key={node.id}
                  onClick={() => handleOptionSelect(node.id)}
                  className="w-full bg-slate-700/60 hover:bg-slate-600/80 text-white text-sm py-2.5 px-3 rounded-lg transition-all text-left border border-slate-600/30 hover:border-slate-500/50"
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
