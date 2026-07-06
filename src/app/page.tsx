'use client';

import { useEffect, useState } from 'react';
import Canvas from '@/src/components/Canvas';
import ChatPreview from '@/src/components/ChatPreview';
import EditorPanel from '@/src/components/EditorPanel';
import FlowInsightsPanel from '@/src/components/FlowInsightsPanel';
import { FlowData } from '@/types';

export default function Page() {
  const [data, setData] = useState<FlowData | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>();
  const [nodeCount, setNodeCount] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isDark = theme === 'dark';

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/flow_data.json');
        const flowData: FlowData = await res.json();
        console.log('Loaded flow data from /flow_data.json:', flowData);
        setData(flowData);
        setNodeCount(flowData.nodes.length);
      } catch (error) {
        console.error('Failed to load flow data:', error);
      }
    };
    loadData();
  }, []);

  const handleNodeEdit = (id: string, text: string) => {
    if (!data) return;
    const updatedData = {
      ...data,
      nodes: data.nodes.map((n) => (n.id === id ? { ...n, text } : n)),
    };
    setData(updatedData);
  };

  const handleNodeUpdate = (id: string, updates: { text?: string; options?: string[] }) => {
    if (!data) return;
    const updatedData = {
      ...data,
      nodes: data.nodes.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    };
    setData(updatedData);
  };

  if (!data) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-[#17110b]' : 'bg-[#fff7ef]'}`}>
        <p className={isDark ? 'text-[#e7a46e]' : 'text-[#fb7507]'}>Loading...</p>
      </div>
    );
  }

  return (
    <main className={`min-h-screen flex flex-col ${isDark ? 'bg-[radial-gradient(circle_at_top,_rgba(255,227,204,0.12),_transparent_35%),linear-gradient(135deg,_#17110b_0%,_#23160d_100%)] text-[#fff7ef]' : 'bg-[radial-gradient(circle_at_top,_rgba(251,117,7,0.12),_transparent_35%),linear-gradient(135deg,_#fffaf4_0%,_#ffebd9_100%)] text-[#23160d]'}`}>
      <header className={`h-16 border-b flex items-center justify-between px-8 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm ${isDark ? 'border-[#ffe3cc]/15 bg-[#23160d]/95' : 'border-[#fb7507]/15 bg-[#fffdf8]/95'}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-[#ffe3cc] via-[#e7a46e] to-[#fb7507] flex items-center justify-center shadow-[0_8px_16px_rgba(251,117,7,0.24)]">
            <span className="text-sm font-bold text-[#23160d]">SF</span>
          </div>
          <h1 className={`text-xl font-semibold bg-linear-to-r from-[#ffe3cc] via-[#e7a46e] to-[#fb7507] bg-clip-text text-transparent ${isDark ? '' : 'text-[#fb7507]'}`}>SupportFlow</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className={`rounded-full border px-3 py-1 text-sm font-medium shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/80 text-[#e7a46e]' : 'border-[#fb7507]/15 bg-[#fff2e8]/80 text-[#c85a08]'}`}>
            {nodeCount} nodes
          </div>
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/80 text-[#ffe3cc] hover:bg-[#3a2414]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#c85a08] hover:bg-[#ffe8d2]'}`}
          >
            <span>{isDark ? '☀' : '☾'}</span>
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className={`flex-1 p-6 mb-12 overflow-auto ${isDark ? 'bg-[radial-gradient(circle_at_top_left,_rgba(255,227,204,0.12),_transparent_40%),linear-gradient(135deg,_rgba(23,17,11,0.98),rgba(35,22,13,0.9))]' : 'bg-[radial-gradient(circle_at_top_left,_rgba(251,117,7,0.12),_transparent_40%),linear-gradient(135deg,_rgba(255,250,244,0.98),rgba(255,235,217,0.95))]'}`}>
            <Canvas
              data={data}
              isEditing={true}
              activeNode={selectedNode}
              onNodeEdit={handleNodeEdit}
              onNodeSelect={setSelectedNode}
              theme={theme}
            />
          </div>
        </div>

        <div className={`w-96 h-max border-l overflow-hidden flex flex-col ${isDark ? 'border-[#ffe3cc]/15' : 'border-[#fb7507]/15'}`}>
          <EditorPanel
            data={data}
            selectedNode={selectedNode}
            onNodeUpdate={handleNodeUpdate}
            onPreview={() => setShowPreview(true)}
            theme={theme}
          />
        </div>
      </div>

      <FlowInsightsPanel data={data} selectedNode={selectedNode} theme={theme} />

      {showPreview && <ChatPreview data={data} onClose={() => setShowPreview(false)} theme={theme} />}
    </main>
  );
}
