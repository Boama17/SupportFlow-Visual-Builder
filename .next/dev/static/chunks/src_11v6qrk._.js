(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/NodeCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NodeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const getNodeColor = (type)=>{
    switch(type){
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
const getNodeLabel = (type)=>{
    switch(type){
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
const getNodeIcon = (type)=>{
    switch(type){
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
const getNodeSize = (type)=>{
    return type === 'response' ? {
        w: 150,
        h: 100
    } : {
        w: 250,
        h: 120
    };
};
function NodeCard({ node, isEditing, isActive, onEdit, onSelectForPreview, editingId, editingText, onEditingChange }) {
    const color = getNodeColor(node.type);
    const icon = getNodeIcon(node.type);
    const size = getNodeSize(node.type);
    const isCurrentlyEditing = editingId === node.id && isEditing;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>onSelectForPreview?.(node.id),
        className: "absolute cursor-pointer ms-[12rem] mt-[2rem] transition-transform hover:scale-105",
        style: {
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${size.w}px`,
            height: `${size.h}px`,
            zIndex: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full rounded-xl shadow-lg flex flex-col items-center justify-center p-2 text-white font-medium transition-all duration-200 border-2",
            style: {
                backgroundColor: color,
                borderColor: isActive ? '#ffffff' : color,
                borderWidth: isActive ? '3px' : '2px',
                boxShadow: isActive ? `0 0 24px ${color}90, 0 10px 28px rgba(0, 0, 0, 0.7)` : `0 8px 20px ${color}40, 0 3px 8px rgba(0, 0, 0, 0.25)`,
                opacity: 0.98,
                borderRadius: '16px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm mb-2 flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base leading-none",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/NodeCard.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold tracking-widest opacity-90",
                            children: getNodeLabel(node.type)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NodeCard.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                isEditing && isCurrentlyEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    autoFocus: true,
                    onClick: (e)=>e.stopPropagation(),
                    value: editingText || '',
                    onChange: (e)=>onEditingChange?.(e.target.value),
                    onBlur: ()=>onEdit(node.id, editingText || ''),
                    onKeyDown: (e)=>{
                        if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                            e.preventDefault();
                            onEdit(node.id, editingText || '');
                        }
                    },
                    className: "w-full h-full p-1.5 bg-black/30 text-white text-xs text-center rounded border-none resize-none focus:outline-none focus:ring-2 focus:ring-white/50",
                    style: {
                        color: 'white',
                        fontFamily: 'inherit'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs leading-snug whitespace-pre-line break-words",
                    children: node.text
                }, void 0, false, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this),
                node.children && node.children.length > 0 && !isCurrentlyEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs opacity-70 mt-1 text-center",
                    children: [
                        node.children.length,
                        " ",
                        node.children.length === 1 ? 'path' : 'paths'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NodeCard.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NodeCard.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c = NodeCard;
var _c;
__turbopack_context__.k.register(_c, "NodeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Connectors.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Connectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const getNodeSize = (type)=>{
    return type === 'response' ? {
        w: 240,
        h: 100
    } : {
        w: 240,
        h: 80
    };
};
const getCenterPoint = (x, y, type)=>{
    const size = getNodeSize(type);
    return {
        x: x + size.w / 2,
        y: y + size.h / 2
    };
};
const cubicBezier = (p0, p1, p2, p3)=>{
    return `M ${p0[0]} ${p0[1]} C ${p1[0]} ${p1[1]}, ${p2[0]} ${p2[1]}, ${p3[0]} ${p3[1]}`;
};
function Connectors({ nodes, activeConnector }) {
    const nodeMap = new Map(nodes.map((n)=>[
            n.id,
            n
        ]));
    const lines = nodes.flatMap((node)=>node.children.map((childId, childIndex)=>{
            const child = nodeMap.get(childId);
            if (!child) return null;
            const start = getCenterPoint(node.x, node.y, node.type);
            const end = getCenterPoint(child.x, child.y, child.type);
            const yDistance = end.y - start.y;
            const xDistance = end.x - start.x;
            const controlOffset = Math.max(yDistance * 0.4, 60);
            const control1 = [
                start.x + xDistance * 0.1,
                start.y + controlOffset
            ];
            const control2 = [
                end.x - xDistance * 0.1,
                end.y - controlOffset
            ];
            const connectorId = `${node.id}-${childId}`;
            const isActive = activeConnector === connectorId;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                "data-connector": connectorId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                            id: `arrow-${connectorId}`,
                            markerWidth: "10",
                            markerHeight: "10",
                            refX: "9",
                            refY: "3.5",
                            orient: "auto",
                            markerUnits: "strokeWidth",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,0 L0,7 L10,3.5 z",
                                fill: isActive ? '#3b82f6' : '#475569',
                                opacity: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Connectors.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Connectors.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Connectors.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: cubicBezier([
                            start.x,
                            start.y
                        ], control1, control2, [
                            end.x,
                            end.y
                        ]),
                        stroke: isActive ? '#3b82f6' : '#475569',
                        strokeWidth: isActive ? 2.5 : 1.5,
                        fill: "none",
                        markerEnd: `url(#arrow-${connectorId})`,
                        className: "transition-all duration-300",
                        strokeLinecap: "round",
                        opacity: isActive ? 1 : 0.6
                    }, void 0, false, {
                        fileName: "[project]/src/components/Connectors.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, connectorId, true, {
                fileName: "[project]/src/components/Connectors.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this);
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute top-0 left-0 w-full h-full ms-[12rem] mt-[2rem] pointer-events-none",
        style: {
            zIndex: 0
        },
        children: lines
    }, void 0, false, {
        fileName: "[project]/src/components/Connectors.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c = Connectors;
var _c;
__turbopack_context__.k.register(_c, "Connectors");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NodeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NodeCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Connectors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Connectors.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Canvas({ data, isEditing, activeNode, onNodeEdit, onNodeSelect }) {
    _s();
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [editingText, setEditingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleNodeClick = (nodeId)=>{
        onNodeSelect?.(nodeId);
        if (isEditing) {
            const node = data.nodes.find((n)=>n.id === nodeId);
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
    const handleSaveEdit = (id, text)=>{
        setEditingId(undefined);
        onNodeEdit?.(id, text);
    };
    const canvasHeight = 650;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl",
        style: {
            height: `${canvasHeight}px`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Connectors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                nodes: data.nodes,
                activeConnector: undefined
            }, void 0, false, {
                fileName: "[project]/src/components/Canvas.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            data.nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NodeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    node: node,
                    isEditing: isEditing,
                    isActive: activeNode === node.id,
                    onEdit: handleSaveEdit,
                    onSelectForPreview: handleNodeClick,
                    editingId: editingId,
                    editingText: editingText,
                    onEditingChange: setEditingText
                }, node.id, false, {
                    fileName: "[project]/src/components/Canvas.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Canvas.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Canvas, "GkG11zVb/X466x8jXPNMB0H+IFo=");
_c = Canvas;
var _c;
__turbopack_context__.k.register(_c, "Canvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChatPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ChatPreview({ data, onClose }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentNodeId, setCurrentNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const nodeMap = new Map(data.nodes.map((n)=>[
            n.id,
            n
        ]));
    // Initialize conversation on first render
    if (messages.length === 0 && currentNodeId === null) {
        const startNode = nodeMap.get('start');
        if (startNode) {
            setMessages([
                {
                    type: 'bot',
                    text: startNode.text,
                    nodeId: 'start'
                }
            ]);
            setCurrentNodeId('start');
        }
    }
    const currentNode = currentNodeId ? nodeMap.get(currentNodeId) : null;
    const handleOptionSelect = (childId)=>{
        const childNode = nodeMap.get(childId);
        if (!childNode) return;
        // Add user selection as message
        const userMessage = {
            type: 'user',
            text: childNode.text.split(' - ')[0] || childNode.text,
            nodeId: childId
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        // Auto-advance through response nodes to show bot response
        if (childNode.type === 'response' && childNode.children.length > 0) {
            const endNode = nodeMap.get(childNode.children[0]);
            if (endNode) {
                setTimeout(()=>{
                    const botMessage = {
                        type: 'bot',
                        text: endNode.text,
                        nodeId: endNode.id
                    };
                    setMessages((prev)=>[
                            ...prev,
                            botMessage
                        ]);
                    setCurrentNodeId(endNode.id);
                }, 400);
            }
        } else if (childNode.type === 'question') {
            const botMessage = {
                type: 'bot',
                text: childNode.text,
                nodeId: childId
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
            setCurrentNodeId(childId);
        } else if (childNode.type === 'end') {
            const botMessage = {
                type: 'bot',
                text: childNode.text,
                nodeId: childId
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
            setCurrentNodeId(childId);
        }
    };
    const handleRestart = ()=>{
        const startNode = nodeMap.get('start');
        if (startNode) {
            setMessages([
                {
                    type: 'bot',
                    text: startNode.text,
                    nodeId: 'start'
                }
            ]);
            setCurrentNodeId('start');
        }
    };
    const getNextOptions = ()=>{
        if (!currentNode) return [];
        return currentNode.children.map((id)=>nodeMap.get(id)).filter((n)=>n !== undefined);
    };
    const nextOptions = getNextOptions();
    const isEnd = currentNode?.type === 'end';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-800/95 backdrop-blur-sm rounded-2xl w-full max-w-md shadow-2xl border border-slate-700/50 flex flex-col",
            style: {
                height: '600px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-5 border-b border-slate-700/30 bg-gradient-to-r from-slate-800/50 to-slate-800/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-white",
                            children: "Support Chat"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatPreview.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-white transition-colors text-2xl leading-none",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatPreview.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChatPreview.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-3",
                    children: messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-xs px-4 py-2.5 rounded-xl text-sm leading-relaxed ${msg.type === 'user' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-sm shadow-lg' : 'bg-slate-700/80 text-slate-50 rounded-bl-sm'}`,
                                children: msg.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatPreview.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/ChatPreview.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatPreview.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-700/30 p-4 space-y-2",
                    children: isEnd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleRestart,
                        className: "w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2.5 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105",
                        children: "Start Over"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPreview.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: nextOptions.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleOptionSelect(node.id),
                                className: "w-full bg-slate-700/60 hover:bg-slate-600/80 text-white text-sm py-2.5 px-3 rounded-lg transition-all text-left border border-slate-600/30 hover:border-slate-500/50",
                                children: node.text.split(' - ')[0] || node.text
                            }, node.id, false, {
                                fileName: "[project]/src/components/ChatPreview.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPreview.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatPreview.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ChatPreview.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ChatPreview.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(ChatPreview, "kl6kLAGDwLl6zMaid/5ryDSkYWw=");
_c = ChatPreview;
var _c;
__turbopack_context__.k.register(_c, "ChatPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EditorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const getNodeLabel = (node)=>{
    const base = node.type.charAt(0).toUpperCase() + node.type.slice(1);
    return `${base} • ${node.id}`;
};
const getTone = (reach)=>{
    if (reach >= 60) return 'hot';
    if (reach >= 30) return 'warm';
    return 'cold';
};
function EditorPanel({ data, selectedNode, onNodeUpdate, onNodeDelete, onPreview }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('editor');
    const selectedNodeData = data.nodes.find((n)=>n.id === selectedNode);
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditorPanel.useMemo[analytics]": ()=>{
            const nodeMap = new Map(data.nodes.map({
                "EditorPanel.useMemo[analytics]": (node)=>[
                        node.id,
                        node
                    ]
            }["EditorPanel.useMemo[analytics]"]));
            const startNode = data.nodes.find({
                "EditorPanel.useMemo[analytics].startNode": (node)=>node.type === 'start'
            }["EditorPanel.useMemo[analytics].startNode"]);
            const paths = [];
            const walk = {
                "EditorPanel.useMemo[analytics].walk": (nodeId, currentPath)=>{
                    const node = nodeMap.get(nodeId);
                    if (!node) return;
                    const nextPath = [
                        ...currentPath,
                        node.id
                    ];
                    if (node.children.length === 0 || node.type === 'end') {
                        paths.push(nextPath);
                        return;
                    }
                    node.children.forEach({
                        "EditorPanel.useMemo[analytics].walk": (childId)=>walk(childId, nextPath)
                    }["EditorPanel.useMemo[analytics].walk"]);
                }
            }["EditorPanel.useMemo[analytics].walk"];
            if (startNode) {
                walk(startNode.id, []);
            }
            const totalPaths = paths.length || 1;
            const averagePathLength = paths.length ? Math.round(paths.reduce({
                "EditorPanel.useMemo[analytics]": (sum, path)=>sum + path.length - 1
            }["EditorPanel.useMemo[analytics]"], 0) / paths.length * 10) / 10 : 0;
            const reachCounts = Object.fromEntries(data.nodes.map({
                "EditorPanel.useMemo[analytics].reachCounts": (node)=>[
                        node.id,
                        0
                    ]
            }["EditorPanel.useMemo[analytics].reachCounts"]));
            paths.forEach({
                "EditorPanel.useMemo[analytics]": (path)=>{
                    path.forEach({
                        "EditorPanel.useMemo[analytics]": (nodeId)=>{
                            if (reachCounts[nodeId] !== undefined) {
                                reachCounts[nodeId] += 1;
                            }
                        }
                    }["EditorPanel.useMemo[analytics]"]);
                }
            }["EditorPanel.useMemo[analytics]"]);
            const nodeReach = Object.fromEntries(Object.entries(reachCounts).map({
                "EditorPanel.useMemo[analytics].nodeReach": ([nodeId, count])=>[
                        nodeId,
                        Math.round(count / totalPaths * 100)
                    ]
            }["EditorPanel.useMemo[analytics].nodeReach"]));
            const deadEnds = data.nodes.filter({
                "EditorPanel.useMemo[analytics].deadEnds": (node)=>node.children.length === 0 && node.type !== 'end'
            }["EditorPanel.useMemo[analytics].deadEnds"]).map({
                "EditorPanel.useMemo[analytics].deadEnds": (node)=>node.id
            }["EditorPanel.useMemo[analytics].deadEnds"]);
            const bottlenecks = data.nodes.filter({
                "EditorPanel.useMemo[analytics].bottlenecks": (node)=>{
                    const reach = nodeReach[node.id] ?? 0;
                    return reach < 35 && node.children.length > 0;
                }
            }["EditorPanel.useMemo[analytics].bottlenecks"]).map({
                "EditorPanel.useMemo[analytics].bottlenecks": (node)=>node.id
            }["EditorPanel.useMemo[analytics].bottlenecks"]);
            const maxDepth = paths.reduce({
                "EditorPanel.useMemo[analytics].maxDepth": (max, path)=>Math.max(max, path.length - 1)
            }["EditorPanel.useMemo[analytics].maxDepth"], 0);
            let healthScore = 100;
            healthScore -= deadEnds.length * 12;
            healthScore -= data.nodes.filter({
                "EditorPanel.useMemo[analytics]": (node)=>(nodeReach[node.id] ?? 0) < 10
            }["EditorPanel.useMemo[analytics]"]).length * 5;
            healthScore -= Math.max(0, maxDepth - 4) * 6;
            healthScore = Math.max(0, Math.min(100, healthScore));
            const suggestions = [];
            if (deadEnds.length > 0) {
                suggestions.push('Add follow-up responses or resolution paths to prevent dead ends.');
            }
            if (data.nodes.some({
                "EditorPanel.useMemo[analytics]": (node)=>node.children.length > 3
            }["EditorPanel.useMemo[analytics]"])) {
                suggestions.push('Split overcomplicated decision points that branch into too many options.');
            }
            if ((Object.values(nodeReach).filter({
                "EditorPanel.useMemo[analytics]": (value)=>value < 20
            }["EditorPanel.useMemo[analytics]"]).length || 0) > 0) {
                suggestions.push('Merge rarely reached branches to simplify the overall experience.');
            }
            const complexityWarning = maxDepth > 5 ? 'This flow is getting deep. Consider shortening the path to keep the conversation clear.' : maxDepth > 4 ? 'Decision depth is approaching the recommended limit; simplify if possible.' : null;
            const rankedNodes = data.nodes.map({
                "EditorPanel.useMemo[analytics].rankedNodes": (node)=>({
                        id: node.id,
                        label: getNodeLabel(node),
                        reach: nodeReach[node.id] ?? 0,
                        type: node.type
                    })
            }["EditorPanel.useMemo[analytics].rankedNodes"]).sort({
                "EditorPanel.useMemo[analytics].rankedNodes": (a, b)=>b.reach - a.reach
            }["EditorPanel.useMemo[analytics].rankedNodes"]);
            const heatmap = rankedNodes.map({
                "EditorPanel.useMemo[analytics].heatmap": (node)=>({
                        id: node.id,
                        label: node.label,
                        reach: node.reach,
                        tone: getTone(node.reach)
                    })
            }["EditorPanel.useMemo[analytics].heatmap"]);
            return {
                totalPaths,
                averagePathLength,
                nodeReach,
                healthScore,
                deadEnds,
                bottlenecks,
                complexityWarning,
                suggestions,
                rankedNodes,
                heatmap
            };
        }
    }["EditorPanel.useMemo[analytics]"], [
        data
    ]);
    const handleTextChange = (text)=>{
        if (selectedNode) {
            onNodeUpdate?.(selectedNode, {
                text
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900/95 backdrop-blur-sm border-l border-slate-700/30 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-700/30 bg-slate-800/40 px-4 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold uppercase tracking-wider text-slate-300",
                        children: "Flow Insights & Analytics"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditorPanel.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('editor'),
                                className: `rounded-full px-3 py-1 text-xs font-medium transition-all ${activeTab === 'editor' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'}`,
                                children: "Editor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('insights'),
                                className: `rounded-full px-3 py-1 text-xs font-medium transition-all ${activeTab === 'insights' ? 'bg-fuchsia-500/20 text-fuchsia-300' : 'text-slate-400 hover:text-slate-200'}`,
                                children: "Insights"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditorPanel.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditorPanel.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: activeTab === 'editor' ? selectedNodeData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-white mb-4",
                                    children: "Edit Node"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 mb-1 font-semibold",
                                    children: "Node Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-300 capitalize mb-4",
                                    children: [
                                        selectedNodeData.type,
                                        " Node"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 195,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-white block mb-2",
                                    children: "Node ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: selectedNodeData.id,
                                    disabled: true,
                                    className: "w-full bg-slate-800/50 border border-slate-600/30 rounded-lg px-3 py-2 text-sm text-slate-300 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 201,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-white block mb-2",
                                    children: "Message Text"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: selectedNodeData.text,
                                    onChange: (e)=>handleTextChange(e.target.value),
                                    className: "w-full bg-slate-800/50 border border-slate-600/30 rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 211,
                            columnNumber: 15
                        }, this),
                        selectedNodeData.options && selectedNodeData.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-white block mb-2",
                                    children: "Response Options"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 223,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: selectedNodeData.options.map((option, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800/30 border border-slate-600/20 rounded-lg px-3 py-2 text-sm text-slate-300",
                                            children: option
                                        }, idx, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 226,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 224,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 222,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNodeDelete?.(selectedNodeData.id),
                                className: "flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors",
                                children: "Delete Node"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 235,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 234,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 194,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex items-center justify-center text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mb-1",
                                children: "No node selected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 246,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-xs",
                                children: "Select a node on the canvas to edit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 247,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditorPanel.tsx",
                        lineNumber: 245,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 244,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-fuchsia-500/10 p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.3em] text-slate-400",
                                                children: "Flow Health Score"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditorPanel.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-4xl font-semibold text-white",
                                                children: [
                                                    analytics.healthScore,
                                                    "/100"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditorPanel.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditorPanel.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full bg-slate-900/70 px-3 py-2 text-sm text-slate-300",
                                        children: analytics.complexityWarning ? 'Needs attention' : 'Healthy flow'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditorPanel.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-700/60 bg-slate-800/60 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.25em] text-slate-400",
                                            children: "Total Paths"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-2xl font-semibold text-white",
                                            children: analytics.totalPaths
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-700/60 bg-slate-800/60 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.25em] text-slate-400",
                                            children: "Avg Path Length"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-2xl font-semibold text-white",
                                            children: analytics.averagePathLength
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-700/60 bg-slate-800/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-white",
                                            children: "Path Heatmap"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "Hot vs cold branches"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: analytics.heatmap.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-1 flex items-center justify-between text-xs text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.reach,
                                                                "% reach"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full bg-slate-700/80",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-2 rounded-full ${item.tone === 'hot' ? 'bg-cyan-400' : item.tone === 'warm' ? 'bg-fuchsia-400' : 'bg-slate-500'}`,
                                                        style: {
                                                            width: `${Math.max(item.reach, 8)}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditorPanel.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-700/60 bg-slate-800/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Bottleneck Detection"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                analytics.bottlenecks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2 text-sm text-slate-300",
                                    children: analytics.bottlenecks.map((nodeId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2",
                                            children: [
                                                nodeId,
                                                " may be losing momentum with limited reach."
                                            ]
                                        }, nodeId, true, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 310,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-400",
                                    children: "No major bottlenecks detected. The flow is holding momentum well."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-700/60 bg-slate-800/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Node Rankings"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-2",
                                    children: analytics.rankedNodes.map((node, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-900/60 px-3 py-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-slate-200",
                                                            children: [
                                                                "#",
                                                                index + 1,
                                                                " ",
                                                                node.label
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: node.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `rounded-full px-2 py-1 text-xs ${selectedNode === node.id ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-700/70 text-slate-300'}`,
                                                    children: [
                                                        node.reach,
                                                        "% reach"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, node.id, true, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-slate-700/60 bg-slate-800/60 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Flow Intelligence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3 text-sm text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-red-500/20 bg-red-500/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-red-300",
                                                    children: "Dead End Alerts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this),
                                                analytics.deadEnds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: [
                                                        analytics.deadEnds.join(', '),
                                                        " has no forward path."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: "No dead ends detected. Every branch keeps moving forward."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-amber-500/20 bg-amber-500/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-amber-300",
                                                    children: "Optimization Suggestions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-2 list-disc space-y-1 pl-5",
                                                    children: analytics.suggestions.length > 0 ? analytics.suggestions.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: suggestion
                                                        }, suggestion, false, {
                                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 99
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "No optimization suggestions at the moment."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditorPanel.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 141
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-cyan-300",
                                                    children: "Complexity Warning"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: analytics.complexityWarning ?? 'The flow stays within a comfortable decision depth.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 252,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EditorPanel.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-700/50 p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onPreview,
                    className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors",
                    children: "Preview Flow"
                }, void 0, false, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EditorPanel.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EditorPanel.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(EditorPanel, "PxBPiasXLN4OVPnJTDBtpfPWm2U=");
_c = EditorPanel;
var _c;
__turbopack_context__.k.register(_c, "EditorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EditorPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Page() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedNode, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [nodeCount, setNodeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const loadData = {
                "Page.useEffect.loadData": async ()=>{
                    try {
                        const res = await fetch('/flow_data.json');
                        const flowData = await res.json();
                        console.log('Loaded flow data from /flow_data.json:', flowData);
                        setData(flowData);
                        setNodeCount(flowData.nodes.length);
                    } catch (error) {
                        console.error('Failed to load flow data:', error);
                    }
                }
            }["Page.useEffect.loadData"];
            loadData();
        }
    }["Page.useEffect"], []);
    const handleNodeEdit = (id, text)=>{
        if (!data) return;
        const updatedData = {
            ...data,
            nodes: data.nodes.map((n)=>n.id === id ? {
                    ...n,
                    text
                } : n)
        };
        setData(updatedData);
    };
    const handleNodeUpdate = (id, updates)=>{
        if (!data) return;
        const updatedData = {
            ...data,
            nodes: data.nodes.map((n)=>n.id === id ? {
                    ...n,
                    ...updates
                } : n)
        };
        setData(updatedData);
    };
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "h-16 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/30 flex items-center justify-between px-8 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-white",
                                    children: "SF"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
                                children: "SupportFlow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-400",
                        children: [
                            nodeCount,
                            " nodes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-6 mb-12 overflow-auto bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                isEditing: true,
                                activeNode: selectedNode,
                                onNodeEdit: handleNodeEdit,
                                onNodeSelect: setSelectedNode
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-96 h-max border-l border-slate-700/50 overflow-hidden flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: data,
                            selectedNode: selectedNode,
                            onNodeUpdate: handleNodeUpdate,
                            onPreview: ()=>setShowPreview(true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data,
                onClose: ()=>setShowPreview(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 100,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Page, "m1Xqcy0Y4YTiOF774VqrpAEZTZw=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11v6qrk._.js.map