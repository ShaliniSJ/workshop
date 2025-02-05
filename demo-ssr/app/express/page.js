"use client";
import { useState, useEffect } from "react";
import { Container, Typography, Button, CircularProgress } from "@mui/material";

export default function APIDataPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/message"); // Update the backend URL if needed
            console.log(response);
            const result = await response.json();
            setData(result.message);
        } catch (error) {
            setData("Error fetching data!");
        }
        setLoading(false);
    };

    return (
        <Container
            maxWidth="sm"
            style={{ textAlign: "center", marginTop: "50px" }}
        >
            <Typography variant="h4">Express.js Data Fetch</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={fetchData}
                style={{ marginTop: "20px" }}
            >
                Fetch Data
            </Button>
            {loading && <CircularProgress style={{ marginTop: "20px" }} />}
            {data && (
                <Typography variant="h6" style={{ marginTop: "20px" }}>
                    {data}
                </Typography>
            )}
        </Container>
    );
}
