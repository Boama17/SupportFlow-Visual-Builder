'use client';

import { useEffect, useState } from 'react';
import Canvas from '@/src/components/Canvas';
import { FlowData } from '@/types';

export default function Page() {
  const [data, setData] = useState<FlowData | null>(null);
  const [selectedNode, setSelectedNode] = useState<string>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/flow_data.json');
        const flowData: FlowData = await res.json();
        setData(flowData);
      } catch (error) {
        console.error('Failed to load flow data:', error);
      }
    };

    loadData();
  }, []);

  const handleNodeEdit = (id: string, text: string) => {
    if (!data) return;

    setData({
      ...data,
      nodes: data.nodes.map((node) =>
        node.id === id ? { ...node, text } : node
      ),
    });
  };

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 overflow-auto">
      <Canvas
      />
    </main>
  );
}