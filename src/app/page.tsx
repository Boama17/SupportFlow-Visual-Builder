'use client';

import { useEffect, useState } from 'react';
import Canvas from '@/src/components/Canvas';
import { FlowData } from '@/types';

export default function Page() {
  const [data, setData] = useState<FlowData | null>(null);
  const [selectedNode, setSelectedNode] = useState<string>();
  const [nodeCount, setNodeCount] = useState(0);

  const tips: Record<string, string[]> = {
    start: [
      'Opening message should be warm and welcoming',
      'Clearly state what the bot can help with',
      'Provide 2-3 distinct routing options',
      'Use simple, jargon-free language',
    ],
    q1: [
      'Ask one question at a time',
      'Use specific, actionable questions',
      'Avoid yes/no questions when possible',
      'Guide users with clear language',
    ],
    q2: [
      'Ensure logical flow between questions',
      'Each option should lead to a resolution',
      'Consider all possible user intents',
      'Test different user paths thoroughly',
    ],
    end1: [
      'Provide specific, actionable solutions',
      'Include direct contact information',
      'Offer alternative resources or links',
      'Confirm the issue is resolved',
    ],
    end2: [
      'Make instructions clear and concise',
      'Provide step-by-step guidance',
      'Offer support contact options',
      'Include estimated resolution time',
    ],
    end3: [
      'Break down complex solutions into steps',
      'Provide screenshots or examples when helpful',
      'Offer escalation options if needed',
      'Include a satisfaction check',
    ],
    end4: [
      'Make support ticket creation simple',
      'Provide ticket tracking information',
      'Set clear expectations for response time',
      'Include relevant issue classification',
    ],
    complete: [
      'Thank the user for their time',
      'Ask for feedback on their experience',
      'Offer additional resources or help',
      'Provide contact info for follow-up',
    ],
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/flow_data.json');
        const flowData: FlowData = await res.json();
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
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="h-16 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/30 flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SupportFlow Visual Diagram</h1>
        </div>
        <div className="text-sm font-medium text-slate-400">
          {nodeCount} nodes
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">

        {/* Canvas */}
        <div className="flex-1 p-6 overflow-auto bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
          <Canvas
            data={data}
            isEditing={true}
            activeNode={selectedNode}
            onNodeEdit={handleNodeEdit}
            onNodeSelect={setSelectedNode}
          />
        </div>

        
      </div>

       </main>
  );
}
