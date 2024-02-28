import { Box, Button, Typography } from "@mui/material";
import AnaliseInverseIcon from "../../assets/AnalysisInverseIcon";
import { Listagem } from "./listagem";
import { useNavigate } from 'react-router-dom';



export const Analise = () => {
    const Navigate = useNavigate();

    return (
        <Box display={{ xs: 'none', sm: 'block' }} sx={{ px: 1 }} >
            <Box display="flex" sx={{ justifyContent: 'space-between', px: 1, pt: 10, borderBottom: '1px solid #1976d2' }} >
                <Box display='flex'>
                    <AnaliseInverseIcon className="mr-4 mb-5" />
                    <Typography sx={{ fontSize: 24, color: '#1976d2', fontWeight: 'bold', pt: 1 }}>
                        LISTAGEM DE ANÁLISES
                    </Typography>
                </Box>
                <Box>
                    <Button variant="contained" sx={{ py: 1, px: 3, fontSize: 18, fontWeight: "bold" }} onClick={
                        () => {
                            Navigate('/analises/0');
                        }
                    }>
                        Cadastrar análise
                    </Button>
                </Box>
            </Box>
            <Listagem />
        </Box>
    );
}