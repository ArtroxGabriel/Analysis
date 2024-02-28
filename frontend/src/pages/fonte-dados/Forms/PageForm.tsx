import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataSourceService, DataSourceType } from '../../../services/DataSource';
import { ColumnDataSourceType, columnDataSource } from '../../../services/ColumnDataSource';

import { toast } from 'react-toastify';

import Form from "./Form";
import ColumnData from "./columns/Column";

import AnaliseInverseIcon from "../../../assets/AnalysisInverseIcon";
import { ArrowLeft } from "../../../assets";


export const PageFormFonte = () => {
    const Navigate = useNavigate();

    const id = useParams().id || '0';
    const [dataSource, setDataSource] = useState<DataSourceType>({
        id: '',
        name: '',
        description: '',
        analysis: [],
        columnDataSource: [],
    });
    const [dataSourceLoaded, setDataSourceLoaded] = useState(false);
    const [columns, setColumns] = useState<ColumnDataSourceType[]>([]);

    useEffect(() => {
        if (id !== '0' && !dataSourceLoaded) {
            const getDataSource = async () => {
                try {
                    const response = await dataSourceService.getByID(id || ' ');
                    if (response.ok && response.data !== undefined && response.data?.name !== 'Digite o nome') {
                        setDataSource(response.data);
                        setColumns(response.data.columnDataSource);
                    }
                } catch (error) {
                    console.error('Erro ao carregar dados:', error);
                }
            };
            getDataSource();
            setDataSourceLoaded(true);
        }
    }, [dataSourceLoaded, id]);

    function validateForm(data: DataSourceType) {
        if (data.name === '' || data.name === 'Digite o nome') {
            toast.error('Nome da fonte de dados é obrigatório!');
            return true;
        }
        if (data.description === '' || data.description === 'Digite a descrição') {
            toast.error('Descrição da fonte de dados é obrigatória!');
            return true;
        }
        return false;
    }

    const handleSubmit = (data: DataSourceType) => {
        if (validateForm(data)) {
            return;
        }
        if (columns.length < 1) {
            toast.error('Adicione ao menos uma coluna!');
            return;
        }
        console.log(data)
        dataSourceService.put(id, data).then(response => {
            if (response.ok) {
                console.log(response.data);
                toast.success('Fonte de dados atualizada com sucesso!');
                Navigate('/fonte-dados');
            } else {
                console.error('Erro ao atualizar a Fonte de dados:', response.err);
                toast.error('Erro ao atualizar a Fonte de dados!');
            }
        }).catch(error => console.error('Erro ao atualizar produto:', error));

        columns.forEach(column => {
            columnDataSource.put(column.idColumnDataSource, column).then(response => {
                if (response.ok) {
                    console.log(response.data)
                } else {
                    console.error('Erro ao atualizar coluna:', response.err);
                }
            }).catch(error => console.error('Erro ao atualizar coluna:', error));
        });
    }

    const handleBack = (data: DataSourceType) => {
        if (data.name.toString() === '' || data.name.toString() === "Digite o nome" || data.description.toString() === '' || data.description.toString() === "Digite a descrição") {
            dataSourceService.delete(id).then(response => {
                if (response.ok) {
                    console.log(response.data);
                } else {
                    console.error('Erro ao excluir a Fonte de dados:', response.err);
                }
            }).catch(error => console.error('Erro ao excluir Fonte de dados:', error));
        }
        Navigate('/fonte-dados');
    }


    return (
        <Box display={{ xs: 'none', sm: 'block' }} sx={{ justifyContent: "space-between", px: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", px: 1, pt: 10, borderBottom: '1px solid #1976d2' }}>
                <div className='flex'>
                    <AnaliseInverseIcon className="mr-3 mb-5" />
                    <Typography sx={{ fontSize: 24, color: '#1976d2', fontWeight: 'bold', pt: 1 }}>
                        FORMULÁRIO  DA FONTE
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 mb-5">
                    <Button variant="text" sx={{ py: 1, px: 3, fontSize: 14, fontWeight: "bold", gap: 2 }} onClick={() => handleBack(dataSource)}>
                        <ArrowLeft /> Voltar
                    </Button>
                    <Button variant="outlined" color="success" sx={{ px: 6, fontSize: 14, fontWeight: "bold" }} onClick={() => handleSubmit(dataSource)}>
                        Salvar
                    </Button>
                </div>
            </Box>
            <Box className="flex flex-col  p-2">
                <Form defaultValues={dataSource} onSubmit={setDataSource} />
                <ColumnData columns={columns} setColumns={setColumns} />
            </Box>
        </Box>
    );
}
