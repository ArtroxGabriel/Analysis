import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { analysisService, AnaliseType } from '../../../services/Analysis';
import { toast } from 'react-toastify';

import Form from "./Form";

import AnaliseInverseIcon from "../../../assets/AnalysisInverseIcon";
import { ArrowLeft } from "../../../assets";


export const PageFormAnalise = () => {
    const Navigate = useNavigate();

    const id = useParams().id;
    const [analise, setAnalise] = useState<AnaliseType>({
        id: '0',
        name: '',
        description: '',
        status: 0,
        dataSource: '',
    });
    const [analiseLoaded, setAnaliseLoaded] = useState(false);


    if (id && id !== '0' && !analiseLoaded) {
        const getAnalise = async () => {
            const response = await analysisService.getByID(id);
            if (response.ok && response.data !== undefined) {
                setAnalise(response.data);
            }
        };
        getAnalise();
        setAnaliseLoaded(true);
    }

    function validateForm(data: AnaliseType) {
        if (data.name === '') {
            toast.error('Nome da analise é obrigatório!');
            return true;
        }
        if (data.description === '') {
            toast.error('Descrição da analise é obrigatória!');
            return true;
        }
        if (data.dataSource === '') {
            toast.error('Fonte de dados é obrigatória!');
            return true;
        }

        return false
    }

    const handleSubmit = (data: AnaliseType) => {
        if (validateForm(data)) {
            return;
        }
        if (id !== '0') {
            // Estamos em modo de edição
            analysisService.put(data.id.toString(), data).then(response => {
                if (response.ok) {
                    console.log(response.data);
                    toast.success('Analise atualizada com sucesso!');
                    Navigate('/analise');
                } else {
                    console.error('Erro ao atualizar a analise:', response.err);
                    toast.error('Erro ao atualizar a analise!');
                }
            }).catch(error => console.error('Erro ao atualizar produto:', error));
        } else {
            // Estamos em modo de criação
            analysisService.post(data.dataSource.toString(), data).then(response => {
                if (response.ok) {
                    console.log(response.data);
                    toast.success('Analise criada com sucesso!');
                    Navigate('/analise');
                } else {
                    console.error('Erro ao criar a analise:', response.err);
                    toast.error('Erro ao criar a analise!');
                }
            });
        }
    }

    return (
        <Box display={{ xs: 'none', sm: 'block' }} justifyContent="space-between" paddingX={2} >
            <div id="pageform-header" className="flex justify-between pt-20 px-2 border-b border-solid border-blue"  >
                <div className="flex" >
                    <AnaliseInverseIcon className="mr-3 mb-5" />
                    <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', pt: 1 }}>
                        FORMULÁRIO  DE ANÁLISES
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 mb-5">
                    <Button variant="text" sx={{ py: 1, px: 3, fontSize: 14, fontWeight: "bold", gap: 2 }} onClick={
                        () => {
                            Navigate('/analise');
                        }
                    }>
                        <ArrowLeft /> Voltar
                    </Button>
                    <Button variant="outlined" color="success" sx={{ px: 6, fontSize: 14, fontWeight: "bold" }} onClick={() => handleSubmit(analise)}>
                        Salvar
                    </Button>
                </div>
            </div>
            <div className="flex flex-col p-1" >
                <Form defaultValues={analise} onSubmit={setAnalise} />
            </div>
        </Box>
    );
}
