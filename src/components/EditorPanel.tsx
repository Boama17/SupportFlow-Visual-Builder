'use client';

import { useState } from 'react';
import { FlowData } from '@/types';

interface EditorPanelProps {
  data: FlowData;
  selectedNode?: string;
  tips?: Record<string, string[]>;
  onNodeUpdate?: (id: string, updates: { text?: string; options?: string[] }) => void;
  onNodeDelete?: (id: string) => void;
  onPreview?: () => void;
}

export default function EditorPanel({ 
  data, 
  selectedNode, 
  tips = {},
  onNodeUpdate,
  onNodeDelete,
  onPreview,
}: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState<'editor' | 'tips'>('editor');
  const selectedNodeData = data.nodes.find((n) => n.id === selectedNode);
  const nodeTips = selectedNode ? tips[selectedNode] || [] : [];

  const handleTextChange = (text: string) => {
    if (selectedNode) {
      onNodeUpdate?.(selectedNode, { text });
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    if (selectedNode) {
      const node = data.nodes.find((n) => n.id === selectedNode);
      if (node) {
        const options = [...(node.options || [])];
        options[index] = value;
        onNodeUpdate?.(selectedNode, { options });
      }
    }
  };

  return (
    <div className="bg-slate-900/95 backdrop-blur-sm border-l border-slate-700/30 h-full flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-slate-700/30 bg-slate-800/40">
        <button
          onClick={() => setActiveTab('editor')}
          className={`flex-1 px-4 py-3 font-medium text-sm transition-all ${
            activeTab === 'editor'
              ? 'text-cyan-300 border-b-2 border-cyan-400 bg-slate-800/60'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Editor
        </button>
        <button
          onClick={() => setActiveTab('tips')}
          className={`flex-1 px-4 py-3 font-medium text-sm transition-all ${
            activeTab === 'tips'
              ? 'text-cyan-300 border-b-2 border-cyan-400 bg-slate-800/60'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          AI Tips
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'editor' ? (
          selectedNodeData ? (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Edit Node</h3>
                <p className="text-xs text-slate-400 mb-1 font-semibold">Node Type</p>
                <p className="text-sm text-slate-300 capitalize mb-4">{selectedNodeData.type} Node</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-white block mb-2">Node ID</label>
                <input
                  type="text"
                  value={selectedNodeData.id}
                  disabled
                  className="w-full bg-slate-800/50 border border-slate-600/30 rounded-lg px-3 py-2 text-sm text-slate-300 opacity-50"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-white block mb-2">Message Text</label>
                <textarea
                  value={selectedNodeData.text}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600/30 rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {selectedNodeData.options && selectedNodeData.options.length > 0 && (
                <div>
                  <label className="text-sm font-semibold text-white block mb-2">Response Options</label>
                  <div className="space-y-2">
                    {selectedNodeData.options.map((option, idx) => (
                      <div key={idx} className="bg-slate-800/30 border border-slate-600/20 rounded-lg px-3 py-2 text-sm text-slate-300">
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => onNodeDelete?.(selectedNodeData.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Delete Node
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <p className="text-slate-400 text-sm mb-1">No node selected</p>
                <p className="text-slate-500 text-xs">Select a node on the canvas to edit</p>
              </div>
            </div>
          )
        ) : (
          /* AI Tips Tab */
          selectedNodeData ? (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Best Practices</h3>
              {nodeTips.length > 0 ? (
                nodeTips.map((tip, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-3">
                    <p className="text-sm text-slate-200">{tip}</p>
                  </div>
                ))
              ) : (
                <div className="text-slate-400 text-sm">
                  No specific tips for this node type.
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <p className="text-slate-400 text-sm mb-1">No node selected</p>
                <p className="text-slate-500 text-xs">Select a node to view tips</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Bottom Action */}
      <div className="border-t border-slate-700/50 p-6">
        <button
          onClick={onPreview}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Preview Flow
        </button>
      </div>
    </div>
  );
}
