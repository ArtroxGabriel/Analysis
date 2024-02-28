import { Button, Typography, Grid, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dataSourceService, DataSourceType } from '../../services/DataSource';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { EditButton, TrashIcon } from '../../assets';



export const Listagem = () => {
    const theme = useTheme();
    const Navigate = useNavigate();
    const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
    useEffect(() => {
        const getAnalises = async () => {
            const response = await dataSourceService.getAll();
            if (response.ok && response.data !== undefined) {
                setDataSource(response.data);
            }
        }
        getAnalises();
    }, []);

    const handleDelete = (id: string) => {
        dataSourceService.delete(id.toString())
            .then((response) => {
                if (response.ok) {
                    setDataSource(prevFonteDados => prevFonteDados.filter(item => item.id !== id));
                    toast.success('Fonte de dados excluída com sucesso.');
                } else {
                    throw new Error('Erro ao excluir a Fonte de dados. Tente novamente mais tarde.');
                }
            })
            .catch(error => {
                console.error('Erro ao excluir a Fonte de dados:', error);
                toast.error('Erro ao excluir a Fonte de dados. Tente novamente mais tarde.');

            });
    }

    return (
        <Grid container direction="column" spacing={3} sx={{ width: '100%', mt: 5 }} >
            {
                dataSource.map((fonteDados, index) => (
                    <Grid item key={index} >
                        <div className="flex flex-col p-2 border border-blue rounded-md">
                            <div id="dataSource-title-description" className="mx-6 mt-4">
                                <Typography variant='h5' color={theme.palette.text.primary}>
                                    {fonteDados.name}
                                </Typography>
                                <Typography variant="body1" color={theme.palette.text.secondary}>
                                    {fonteDados.description}
                                </Typography>
                            </div>
                            <div id="dataSource-options" className="w-full flex flex-row items-end justify-end gap-2 my-1">
                                <Button variant="outlined" size='small' endIcon={<EditButton />} sx={{ fontSize: 16, fontWeight: 'bold' }} onClick={
                                    () => { Navigate(`/fonte-dados/${fonteDados.id}`) }
                                }>
                                    EDITAR
                                </Button>
                                <Button variant="outlined" size='small' color="error" endIcon={<TrashIcon />} sx={{ fontSize: 16, fontWeight: 'bold' }} onClick={
                                    () => { handleDelete(fonteDados.id) }
                                }>
                                    REMOVER
                                </Button>
                            </div>
                        </div>
                    </Grid >
                ))
            }
        </Grid >
    )
}