import { Box, Button, Typography } from "@mui/material";
import { DataSourceInverseIcon } from "../../assets";
import { useNavigate } from 'react-router-dom';
import { Listagem } from "./listagem";
import { dataSourceService } from "../../services/DataSource";


export const FonteDados = () => {
    const Navigate = useNavigate();

    const handleCadastro = async () => {
        try {
            const response = await dataSourceService.post({
                id: "",
                name: 'Digite o nome',
                description: 'Digite a Descrição',
                analysis: [],
                columnDataSource: [],
            });
            console.log(response)
            const novoId = response.data?.id;
            if (novoId) {
                Navigate(`/fonte-dados/${novoId}`);
            }
        } catch (error) {
            console.error("Erro ao cadastrar fonte:", error);
        }
    }

    return (
        <Box display={{ xs: 'none', sm: 'block' }} sx={{ px: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1, pt: 10, borderBottom: '1px solid #1976d2' }} >
                <div className="flex">
                    <DataSourceInverseIcon className="mr-4 mb-5" />
                    <Typography sx={{ fontSize: 24, color: '#1976d2', fontWeight: 'bold', pt: 1 }}>
                        LISTAGEM DE FONTES
                    </Typography>
                </div>
                <div>
                    <Button variant="contained" sx={{ py: 1, px: 4, fontSize: 18, fontWeight: "bold" }} onClick={handleCadastro}>
                        Cadastrar Fonte
                    </Button>
                </div>
            </Box>
            <Listagem />

        </Box>
    );
}