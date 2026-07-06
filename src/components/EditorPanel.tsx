'use client';

import { FlowData } from '@/types';

interface EditorPanelProps {
  data: FlowData;
  selectedNode?: string;
  onNodeUpdate?: (id: string, updates: { text?: string; options?: string[] }) => void;
  onNodeDelete?: (id: string) => void;
  onPreview?: () => void;
}

export default function EditorPanel({
  data,
  selectedNode,
  onNodeUpdate,
  onNodeDelete,
  onPreview,
}: EditorPanelProps) {
  const selectedNodeData = data.nodes.find((n) => n.id === selectedNode);

  const handleTextChange = (text: string) => {
    if (selectedNode) {
      onNodeUpdate?.(selectedNode, { text });
    }
  };

  return (
    <div className="neo-panel h-full flex flex-col rounded-[24px] m-3 mb-4 overflow-hidden bg-[#23160d]/90">
      <div className="border-b border-[#ffe3cc]/15 bg-[#2d1d10]/80 px-4 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e7a46e]">Node Editor</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {selectedNodeData ? (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-bold text-[#fff7ef] mb-4">Edit Node</h3>
              <p className="text-xs text-[#e7a46e] mb-1 font-semibold">Node Type</p>
              <p className="text-sm text-[#ffe3cc] capitalize mb-4">{selectedNodeData.type} Node</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#fff7ef] block mb-2">Node ID</label>
              <input
                type="text"
                value={selectedNodeData.id}
                disabled
                className="w-full bg-[#2d1d10]/70 border border-[#e7a46e]/25 rounded-2xl px-3 py-2 text-sm text-[#ffe3cc] opacity-70 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.3)]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#fff7ef] block mb-2">Message Text</label>
              <textarea
                value={selectedNodeData.text}
                onChange={(e) => handleTextChange(e.target.value)}
                className="w-full bg-[#2d1d10]/70 border border-[#e7a46e]/25 rounded-2xl px-3 py-2 text-sm text-[#fff7ef] focus:border-[#fb7507]/60 focus:outline-none transition-colors resize-none shadow-[inset_2px_2px_6px_rgba(0,0,0,0.3)]"
                rows={3}
              />
            </div>

            {selectedNodeData.options && selectedNodeData.options.length > 0 && (
              <div>
                <label className="text-sm font-semibold text-[#fff7ef] block mb-2">Response Options</label>
                <div className="space-y-2">
                  {selectedNodeData.options.map((option, idx) => (
                    <div key={idx} className="neo-card px-3 py-2 text-sm text-[#ffe3cc]">
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-center">
            <div>
              <p className="text-[#e7a46e] text-sm mb-1">No node selected</p>
              <p className="text-[#ffe3cc]/70 text-xs">Select a node on the canvas to edit</p>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-[#ffe3cc]/15 p-6">
        <button
          onClick={onPreview}
          className="w-full rounded-2xl bg-gradient-to-r from-[#fb7507] via-[#dd8136] to-[#e7a46e] px-4 py-3 font-semibold text-[#23160d] shadow-[0_10px_24px_rgba(251,117,7,0.24)] transition-transform hover:scale-[1.01]"
        >
          Preview Flow
        </button>
      </div>
    </div>
  );
}
