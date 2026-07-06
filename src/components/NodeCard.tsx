'use client';

import { FlowNode, NodeType } from '@/types';

interface NodeCardProps {
  node: FlowNode;
  isEditing: boolean;
  isActive: boolean;
  onEdit: (id: string, text: string) => void;
  onSelectForPreview?: (id: string) => void;
  editingId?: string;
  editingText?: string;
  onEditingChange?: (text: string) => void;
}

const getNodeColor = (type: NodeType) => {
  switch (type) {
    case 'start':
      return '#3b82f6';
    case 'question':
      return '#06b6d4';
    case 'response':
      return '#06b6d4';
    case 'end':
      return '#10b981';
    default:
      return '#3b82f6';
  }
};

const getNodeLabel = (type: NodeType) => {
  switch (type) {
    case 'start':
      return 'START';
    case 'question':
      return 'QUESTION';
    case 'response':
      return 'RESPONSE';
    case 'end':
      return 'END';
    default:
      return '';
  }
};

const getNodeIcon = (type: NodeType) => {
  switch (type) {
    case 'start':
      return '▸';
    case 'question':
      return '◆';
    case 'response':
      return '◎';
    case 'end':
      return '●';
    default:
      return '';
  }
};

const getNodeSize = (type: NodeType) => {
  return type === 'response' ? { w: 160, h: 90 } : { w: 220, h: 85 };
};

export default function NodeCard({
  node,
  isEditing,
  isActive,
  onEdit,
  onSelectForPreview,
  editingId,
  editingText,
  onEditingChange,
}: NodeCardProps) {
  const color = getNodeColor(node.type);
  const icon = getNodeIcon(node.type);
  const size = getNodeSize(node.type);
  const isCurrentlyEditing = editingId === node.id && isEditing;

  return (
    <div
      onClick={() => onSelectForPreview?.(node.id)}
      className="absolute cursor-pointer transition-transform hover:scale-105"
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`,
        width: `${size.w}px`,
        height: `${size.h}px`,
        zIndex: 10,
      }}
    >
      <div
        className="relative w-full h-full rounded-xl shadow-lg flex flex-col items-center justify-center p-3 text-white font-medium transition-all duration-200 border-2"
        style={{
          backgroundColor: color,
          borderColor: isActive ? '#ffffff' : color,
          borderWidth: isActive ? '3px' : '2px',
          boxShadow: isActive 
            ? `0 0 24px ${color}90, 0 10px 28px rgba(0, 0, 0, 0.7)` 
            : `0 8px 20px ${color}40, 0 3px 8px rgba(0, 0, 0, 0.25)`,
          opacity: 0.98,
          borderRadius: '14px',
        }}
      >
        <div className="text-sm mb-2 flex items-center gap-1">
          <span className="text-base leading-none">{icon}</span>
          <span className="text-xs font-bold tracking-widest opacity-90">{getNodeLabel(node.type)}</span>
        </div>
        {isEditing && isCurrentlyEditing ? (
          <textarea
            autoFocus
            onClick={(e) => e.stopPropagation()}
            value={editingText || ''}
            onChange={(e) => onEditingChange?.(e.target.value)}
            onBlur={() => onEdit(node.id, editingText || '')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault();
                onEdit(node.id, editingText || '');
              }
            }}
            className="w-full h-full p-1.5 bg-black/30 text-white text-xs text-center rounded border-none resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ color: 'white', fontFamily: 'inherit' }}
          />
        ) : (
          <p className="text-center text-xs leading-snug line-clamp-2 break-words">{node.text}</p>
        )}
        {node.children && node.children.length > 0 && !isCurrentlyEditing && (
          <p className="text-xs opacity-70 mt-1 text-center">{node.children.length} {node.children.length === 1 ? 'path' : 'paths'}</p>
        )}
      </div>
    </div>
  );
}
