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

const getNodeColors = (type: NodeType) => {
  switch (type) {
    case 'start':
      return ['#fb7507', '#dd8136'];
    case 'question':
      return ['#dd8136', '#e7a46e'];
    case 'response':
      return ['#e7a46e', '#ffe3cc'];
    case 'end':
      return ['#fb7507', '#e7a46e'];
    default:
      return ['#fb7507', '#dd8136'];
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
  return type === 'response' ? { w: 150, h: 100 } : { w: 250, h: 120 };

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
  const [startColor, endColor] = getNodeColors(node.type);
  const icon = getNodeIcon(node.type);
  const size = getNodeSize(node.type);
  const isCurrentlyEditing = editingId === node.id && isEditing;
  const textColor = node.type === 'response' ? '#23160d' : '#fff7ef';

  return (
    <div
      onClick={() => onSelectForPreview?.(node.id)}
      className="absolute cursor-pointer ms-48 mt-8 transition-transform duration-200 hover:scale-105"
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`,
        width: `${size.w}px`,
        height: `${size.h}px`,
        zIndex: 10,
      }}
    >
      <div
        className="relative w-full h-full flex flex-col items-center justify-center p-2 font-medium transition-all duration-200 border-2"
        style={{
          backgroundImage: `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`,
          borderColor: isActive ? '#fff7ef' : startColor,
          borderWidth: isActive ? '3px' : '2px',
          boxShadow: isActive
            ? `0 0 24px ${startColor}80, 0 12px 28px rgba(0, 0, 0, 0.55)`
            : `0 10px 22px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.18)`,
          opacity: 0.98,
          borderRadius: '18px',
          color: textColor,
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
            className="w-full h-full p-1.5 bg-black/20 text-xs text-center rounded border-none resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ color: textColor, fontFamily: 'inherit' }}
          />
        ) : (
          <p className="text-center text-xs leading-snug whitespace-pre-line wrap-break-word">{node.text}</p>
        )}
        {node.children && node.children.length > 0 && !isCurrentlyEditing && (
          <p className="text-xs opacity-70 mt-1 text-center">{node.children.length} {node.children.length === 1 ? 'path' : 'paths'}</p>
        )}
      </div>
    </div>
  );
}
