import { Button, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { analysisService, AnaliseType } from '../../services/Analysis';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { EditButton, TrashIcon } from '../../assets';



export const Listagem = () => {
    const theme = useTheme();
    const Navigate = useNavigate();
    const [analises, setAnalises] = useState<AnaliseType[]>([]);
    useEffect(() => {
        const getAnalises = async () => {
            const response = await analysisService.getAll();
            if (response.ok && response.data !== undefined) {
                setAnalises(response.data);
            }
        }
        getAnalises();
    }, []);

    const handleDelete = (id: string) => {
        analysisService.delete(id.toString())
            .then((response) => {
                if (response.ok) {
                    setAnalises(prevAnalises => prevAnalises.filter(item => item.id !== id));
                    toast.success('Análise excluída com sucesso.');
                } else {
                    throw new Error('Erro ao excluir a análise. Tente novamente mais tarde.');
                }
            })
            .catch(error => {
                console.error('Erro ao excluir a análise:', error);
                toast.error('Erro ao excluir a análise. Tente novamente mais tarde.');

            });
    }

    return (
        <Grid container direction="column" spacing={3} sx={{ width: '100%', mt: 5 }} >
            {
                analises.map((analise, index) => (
                    <Grid item key={index} >
                        <div className="flex flex-col p-2 border border-blue rounded-md">
                            <div id="analysis-title-description" className="mx-6 mt-4">
                                <Typography variant='h5' color={theme.palette.text.primary} >
                                    {analise.name}
                                </Typography>
                                <Typography variant="body1" color={theme.palette.text.secondary} >
                                    {analise.description}
                                </Typography>
                            </div>
                            <div id="analysis-options" className="w-full flex flex-row items-end justify-end gap-2 my-1">
                                <Button variant="outlined" size='small' endIcon={<EditButton />} sx={{ fontSize: 16, fontWeight: 'bold' }} onClick={
                                    () => {
                                        Navigate(`/analises/${analise.id}`);
                                    }
                                }>
                                    EDITAR
                                </Button>
                                <Button variant="outlined" size='small' color="error" endIcon={<TrashIcon />} sx={{ fontSize: 16, fontWeight: 'bold' }} onClick={
                                    () => { handleDelete(analise.id) }
                                }>
                                    REMOVER
                                </Button>
                            </div>
                        </div>
                    </Grid>
                ))
            }
        </Grid >
    )
}