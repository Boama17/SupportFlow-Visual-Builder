'use client';

import { useState } from 'react';
import { FlowData, FlowNode } from '@/types';
import NodeCard from './NodeCard';
import Connectors from './Connectors';

interface CanvasProps {
  data: FlowData;
  isEditing: boolean;
  activeNode?: string;
  onNodeEdit?: (id: string, text: string) => void;
  onNodeSelect?: (id: string) => void;
  theme?: 'dark' | 'light';
}

export default function Canvas({
  data,
  isEditing,
  activeNode,
  onNodeEdit,
  onNodeSelect,
  theme = 'dark',
}: CanvasProps) {
  const [editingId, setEditingId] = useState<string | undefined>();
  const isDark = theme === 'dark';
  const [editingText, setEditingText] = useState('');

  const handleNodeClick = (nodeId: string) => {
    onNodeSelect?.(nodeId);
    if (isEditing) {
      const node = data.nodes.find((n) => n.id === nodeId);
      if (node) {
        if (editingId === nodeId) {
          // Double click same node - exit edit mode
          setEditingId(undefined);
        } else {
          // Click different node or first click - enter edit mode
          setEditingId(nodeId);
          setEditingText(node.text);
        }
      }
    }
  };

  const handleSaveEdit = (id: string, text: string) => {
    setEditingId(undefined);
    onNodeEdit?.(id, text);
  };

  const canvasHeight = 700;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[24px] border shadow-[20px_20px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] ${isDark ? 'border-[#ffe3cc]/15 bg-[radial-gradient(circle_at_top_left,_rgba(255,227,204,0.16),_transparent_35%),linear-gradient(135deg,_#17110b_0%,_#23160d_100%)]' : 'border-[#fb7507]/15 bg-[radial-gradient(circle_at_top_left,_rgba(251,117,7,0.12),_transparent_35%),linear-gradient(135deg,_#fffaf4_0%,_#ffebd9_100%)]'}`}
      style={{ height: `${canvasHeight}px` }}
    >
      <Connectors nodes={data.nodes} activeConnector={undefined} />
      {data.nodes.map((node) => (
        <NodeCard
          key={node.id}
          node={node}
          isEditing={isEditing}
          isActive={activeNode === node.id}
          onEdit={handleSaveEdit}
          onSelectForPreview={handleNodeClick}
          editingId={editingId}
          editingText={editingText}
          onEditingChange={setEditingText}
        />
      ))}
    </div>
  );
}
