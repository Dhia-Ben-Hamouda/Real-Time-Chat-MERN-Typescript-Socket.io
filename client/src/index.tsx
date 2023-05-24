import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme({
    palette: {
        primary: {

        }
    }
})

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

root.render(
    <Router>
        <ThemeProvider theme={theme} >
            <QueryClientProvider client={client} >

            </QueryClientProvider>
        </ThemeProvider>
    </Router>
)