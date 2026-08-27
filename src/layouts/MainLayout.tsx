import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <Container className="min-h-screen max-h-max" disableGutters>
            <Outlet/>
        </Container>
    );
}

export default MainLayout;