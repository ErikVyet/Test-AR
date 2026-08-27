import { Html, useProgress } from "@react-three/drei";

export function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html className="font-mono! text-zinc-100!" center>{progress.toFixed(0)}%</Html>
    );
}