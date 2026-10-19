import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function Wiki() {
    const { slug } = useParams();
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Wiki Page for: {slug}
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is a placeholder for the wiki content related to the slug: {slug}.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Back to Home
            </Button>
        </Box>
    );
}
