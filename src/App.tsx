import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
    const browserRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        )
    );

    return (
        <RouterProvider router={browserRouter}/>
    );
}

export default App;