'use client';

import { useState } from 'react';
import { FlowData, FlowNode } from '@/types';
import NodeCard from './NodeCard';


interface CanvasProps {
  data: FlowData;
  isEditing: boolean;
  activeNode?: string;
  onNodeEdit?: (id: string, text: string) => void;
  onNodeSelect?: (id: string) => void;
}

export default function Canvas({
  data,
  isEditing,
  activeNode,
  onNodeEdit,
  onNodeSelect,
}: CanvasProps) {
  const [editingId, setEditingId] = useState<string | undefined>();
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

  const canvasHeight = 650;

  return (
    <div
      className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl"
      style={{ height: `${canvasHeight}px` }}
    >

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
