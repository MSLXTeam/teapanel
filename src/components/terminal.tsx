'use client'

import {FormEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';

export default function Terminal(props: { server_address: string }) {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [ws, setWs] = useState<WebSocket | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const webSocket = new WebSocket(props.server_address);

        webSocket.onopen = () => {
            console.log('WebSocket connection established');
        };

        webSocket.onmessage = (event: MessageEvent) => {
            setOutput((prevOutput) => [...prevOutput, event.data]);
        };

        webSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        setWs(webSocket);

        return () => {
            webSocket.close();
        };
    }, []);

    const sendCommand = (e: FormEvent) => {
        e.preventDefault();
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(input);
            setHistory([...history, input]);
            setInput('');
            setHistoryIndex(-1);
        }
    };

    const handleKeyDown = async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendCommand(e);
        } else if (e.ctrlKey && e.key === 'c' && e.shiftKey) {
            // Ctrl + Shift + C: 复制选中的文本
            const selectedText = window.getSelection()?.toString();
            if (selectedText) {
                await navigator.clipboard.writeText(selectedText);
                console.log('Copied to clipboard:', selectedText);
            }
        } else if (e.ctrlKey && e.key === 'v' && e.shiftKey) {
            // Ctrl + Shift + V: 粘贴剪贴板内容
            const text = await navigator.clipboard.readText();
            setInput((prevInput) => prevInput + text);
        } else if (e.ctrlKey && e.key === 'c') {
            // 中断当前命令
            setInput('');
        } else if (e.ctrlKey && e.key === 'd') {
            setInput('stop')
        } else if (e.ctrlKey && e.key === 'l') {
            // 清屏
            setOutput([]);
        } else if (e.ctrlKey && e.key === 'a') {
            // 移动光标至行首
            inputRef.current?.setSelectionRange(0, 0);
        } else if (e.ctrlKey && e.key === 'e') {
            // 移动光标至行尾
            inputRef.current?.setSelectionRange(input.length, input.length);
        } else if (e.ctrlKey && e.key === 'u') {
            // 删除光标前的内容
            setInput('');
        } else if (e.ctrlKey && e.key === 'k') {
            // 删除光标后的内容
            const cursorPosition = inputRef.current?.selectionStart || 0;
            setInput(input.slice(0, cursorPosition));
        } else if (e.key === 'ArrowUp') {
            // 上箭头：浏览命令历史
            if (historyIndex < history.length - 1) {
                setHistoryIndex(historyIndex + 1);
                setInput(history[historyIndex + 1]);
            }
        } else if (e.key === 'ArrowDown') {
            // 下箭头：浏览命令历史
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setInput(history[historyIndex - 1]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <div style={{background: '#000000', color: '#fff', padding: '20px', height: '100vh'}}>
            <h1>仿真终端</h1>
            <div style={{maxHeight: '80vh', overflowY: 'auto', whiteSpace: 'pre-wrap'}}>
                {output.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
            <form onSubmit={sendCommand}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{width: '100%', padding: '10px', marginTop: '10px'}}
                />
                <button type="submit" style={{display: 'none'}}>Send</button>
            </form>
        </div>
    );
};
