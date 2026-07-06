'use client';

import { FlowData } from '@/types';

interface EditorPanelProps {
  data: FlowData;
  selectedNode?: string;
  onNodeUpdate?: (id: string, updates: { text?: string; options?: string[] }) => void;
  onNodeDelete?: (id: string) => void;
  onPreview?: () => void;
  theme?: 'dark' | 'light';
}

export default function EditorPanel({
  data,
  selectedNode,
  onNodeUpdate,
  onNodeDelete,
  onPreview,
  theme = 'dark',
}: EditorPanelProps) {
  const selectedNodeData = data.nodes.find((n) => n.id === selectedNode);
  const isDark = theme === 'dark';

  const handleTextChange = (text: string) => {
    if (selectedNode) {
      onNodeUpdate?.(selectedNode, { text });
    }
  };

  return (
    <div className={`neo-panel h-full flex flex-col rounded-[24px] m-3 mb-4 overflow-hidden ${isDark ? 'bg-[#23160d]/90' : 'bg-[#fffaf4]/95'}`}>
      <div className={`border-b px-4 py-3 ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/80' : 'border-[#fb7507]/15 bg-[#fff2e8]/90'}`}>
        <h2 className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Node Editor</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {selectedNodeData ? (
          <div className="space-y-5">
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>Edit Node</h3>
              <p className={`text-xs mb-1 font-semibold ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Node Type</p>
              <p className={`text-sm capitalize mb-4 ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`}>{selectedNodeData.type} Node</p>
            </div>

            <div>
              <label className={`text-sm font-semibold block mb-2 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>Node ID</label>
              <input
                type="text"
                value={selectedNodeData.id}
                disabled
                className={`w-full rounded-2xl border px-3 py-2 text-sm opacity-70 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#e7a46e]/25 bg-[#2d1d10]/70 text-[#ffe3cc]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#5b2b0c]'}`}
              />
            </div>

            <div>
              <label className={`text-sm font-semibold block mb-2 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>Message Text</label>
              <textarea
                value={selectedNodeData.text}
                onChange={(e) => handleTextChange(e.target.value)}
                className={`w-full rounded-2xl border px-3 py-2 text-sm focus:border-[#fb7507]/60 focus:outline-none transition-colors resize-none shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#e7a46e]/25 bg-[#2d1d10]/70 text-[#fff7ef]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#23160d]'}`}
                rows={3}
              />
            </div>

            {selectedNodeData.options && selectedNodeData.options.length > 0 && (
              <div>
                <label className={`text-sm font-semibold block mb-2 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>Response Options</label>
                <div className="space-y-2">
                  {selectedNodeData.options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border px-3 py-2 text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#e7a46e]/20 bg-[#2d1d10]/80 text-[#ffe3cc]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#5b2b0c]'}`}
                    >
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
              <p className={`text-sm mb-1 ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>No node selected</p>
              <p className={`text-xs ${isDark ? 'text-[#ffe3cc]/70' : 'text-[#7a4518]/70'}`}>Select a node on the canvas to edit</p>
            </div>
          </div>
        )}
      </div>

      <div className={`border-t p-6 ${isDark ? 'border-[#ffe3cc]/15' : 'border-[#fb7507]/15'}`}>
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
