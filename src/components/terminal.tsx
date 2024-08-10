'use client';

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

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
            // 可以在这里请求历史日志，或者服务器自动发送
        };

        webSocket.onmessage = (event: MessageEvent) => {
            const messageData = JSON.parse(event.data);
            if (messageData.type === 'history') {
                // 假设服务器发送历史日志时，消息类型为 'history'
                setOutput(messageData.logs);
            } else if (messageData.type === 'message') {
                // 处理其他类型的消息
                setOutput((prevOutput) => [...prevOutput, messageData.content]);
            }
        };

        webSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        setWs(webSocket);

        return () => {
            webSocket.close();
        };
    }, [props.server_address]);

    const sendCommand = (e: FormEvent) => {
        e.preventDefault();
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'command', content: input }));
            setHistory((prevHistory) => [...prevHistory, input]);
            setInput('');
            setHistoryIndex(-1);
        }
    };

    const handleKeyDown = async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendCommand(e);
        } else if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            const selectedText = window.getSelection()?.toString();
            if (selectedText) {
                await navigator.clipboard.writeText(selectedText);
                console.log('Copied to clipboard:', selectedText);
            }
        } else if (e.ctrlKey && e.shiftKey && e.key === 'V') {
            e.preventDefault();
            const text = await navigator.clipboard.readText();
            setInput((prevInput) => prevInput + text);
        } else if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            setInput('');
        } else if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            setInput('stop');
        } else if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            setOutput([]);
        } else if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            inputRef.current?.setSelectionRange(0, 0);
        } else if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            inputRef.current?.setSelectionRange(input.length, input.length);
        } else if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            setInput('');
        } else if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const cursorPosition = inputRef.current?.selectionStart || 0;
            setInput(input.slice(0, cursorPosition));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                setHistoryIndex(historyIndex + 1);
                setInput(history[historyIndex + 1]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
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
        <div className="bg-gray-800 rounded-lg shadow-lg mx-4 my-4 px-4 py-4">
            <div className="flex items-center justify-start space-x-2 p-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="p-4 text-white">
                <div className="overflow-y-auto h-96 mb-2">
                    {output.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <form onSubmit={sendCommand} className="flex">
                    <span className="text-green-400 pr-2">$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        className="flex-grow bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
                        placeholder="Type a command..."
                        autoFocus
                    />
                </form>
            </div>
        </div>
    );
}
