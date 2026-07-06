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
      <div className="min-h-screen bg-[#17110b] flex items-center justify-center">
        <p className="text-[#e7a46e]">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,227,204,0.12),_transparent_35%),linear-gradient(135deg,_#17110b_0%,_#23160d_100%)] text-[#fff7ef] flex flex-col">
      <header className="h-16 border-b border-[#ffe3cc]/15 bg-[#23160d]/95 backdrop-blur-sm flex items-center justify-between px-8 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-[#ffe3cc] via-[#e7a46e] to-[#fb7507] flex items-center justify-center shadow-[0_8px_16px_rgba(251,117,7,0.24)]">
            <span className="text-sm font-bold text-[#23160d]">SF</span>
          </div>
          <h1 className="text-xl font-semibold bg-linear-to-r from-[#ffe3cc] via-[#e7a46e] to-[#fb7507] bg-clip-text text-transparent">SupportFlow</h1>
        </div>
        <div className="rounded-full border border-[#ffe3cc]/15 bg-[#2d1d10]/80 px-3 py-1 text-sm font-medium text-[#e7a46e] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.28)]">
          {nodeCount} nodes
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 p-6 mb-12 overflow-auto bg-[radial-gradient(circle_at_top_left,_rgba(255,227,204,0.12),_transparent_40%),linear-gradient(135deg,_rgba(23,17,11,0.98),rgba(35,22,13,0.9))]">
            <Canvas
              data={data}
              isEditing={true}
              activeNode={selectedNode}
              onNodeEdit={handleNodeEdit}
              onNodeSelect={setSelectedNode}
            />
          </div>
        </div>

        <div className="w-96 h-max border-l border-[#ffe3cc]/15 overflow-hidden flex flex-col">
          <EditorPanel
            data={data}
            selectedNode={selectedNode}
            onNodeUpdate={handleNodeUpdate}
            onPreview={() => setShowPreview(true)}
          />
        </div>
      </div>

      <FlowInsightsPanel data={data} selectedNode={selectedNode} />

      {showPreview && <ChatPreview data={data} onClose={() => setShowPreview(false)} />}
    </main>
  );
}
