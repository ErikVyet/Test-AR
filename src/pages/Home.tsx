import { Box, Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { Suspense } from "react";
import { CanvasLoader } from "../components/common/CanvasLoader";
import { OrbitControls } from "@react-three/drei";
import { ApartmentModel } from "../components/common/ApartmentModel";

const store = createXRStore();

export default function Home() {
    const handleEnterARMode = async () => {
        try {
            await store.enterAR();
        }
        catch (error) {
            console.warn("AR not supported on this device/configuration:", error);
            alert(`AR mode is not supported on your current device or browser. ${error}`);
        }
    };

    return (
        <Box className="w-full h-screen place-content-center place-items-center text-center">
            <Button onClick={handleEnterARMode}>Enter AR Mode</Button>
            <Canvas className="size-full!" camera={{ position: [0, 6, 8], fov: 75 }}>
                <XR store={store}>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 5]} intensity={2}/>
                    <Suspense fallback={<CanvasLoader/>}>
                        <ApartmentModel scale={0.05}/>
                    </Suspense>
                    <OrbitControls makeDefault/>
                </XR>
            </Canvas>
        </Box>
    );
}