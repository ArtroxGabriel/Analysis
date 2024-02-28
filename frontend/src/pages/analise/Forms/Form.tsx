import { Autocomplete, Box, FormControl, Input, TextField, Typography } from "@mui/material";

import { dataSourceService, DataSourceType } from "../../../services/DataSource";
import { AnaliseType } from '../../../services/Analysis'
import { useEffect, useState } from "react";


interface FormProps {
  defaultValues: AnaliseType;
  onSubmit: (data: AnaliseType) => void;
}
function FormularioAnalise({ defaultValues, onSubmit }: FormProps) {

  const [dataSources, setDataSourcers] = useState<DataSourceType[]>([]);
  useEffect(() => {
    const getAnalises = async () => {
      const response = await dataSourceService.getAll();
      if (response.ok && response.data !== undefined) {
        setDataSourcers(response.data);
      }
    }
    getAnalises();
  }, []);

  const defaultProps = {
    options: dataSources,
    getOptionLabel: (option: DataSourceType) => option.name,
  };

  return (
    <Box component="form"
      sx={{
        '& > :not(style)': { m: 2 },
        ml: 2,
        mr: 10,
        mt: 6,       
      }}
      noValidate
      autoComplete="off">
      <div className="flex flex-row justify-between">
        <FormControl id="analysis-input-title">
          <Typography fontWeight='bold' fontSize={'24px'}>*Nome da Análise</Typography>
          <Input
            sx={{ m: 1, width: '40ch' }}
            placeholder="Digite o nome"
            defaultValue={defaultValues.name}
            multiline
            inputProps={{ maxLength: 255 }}
            onChange={(e) => setTimeout(() => {
              onSubmit({ ...defaultValues, name: e.target.value })
            }, 750)}
          />
        </FormControl>
        <FormControl id="analysis-input-description">
          <Typography fontWeight='bold' fontSize={'24px'}>*Descrição da Análise</Typography>
          <Input
            sx={{ m: 1, width: '50ch' }}
            placeholder="Digite a descrição"
            defaultValue={defaultValues.description}
            multiline
            inputProps={{ maxLength: 255 }}
            onChange={(e) => setTimeout(() => {
              onSubmit({ ...defaultValues, description: e.target.value })
            }, 750)}
          />
        </FormControl>
      </div>
      <Autocomplete
        {...defaultProps}
        id="analysis-select-datasource"
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params}  required label="(Selecione a fonte de dados)" variant="standard" />
        )}
        value={defaultValues.dataSource ? dataSources.find(ds => ds.id.toString() === defaultValues.dataSource) : null}
        onChange={(event, value) => {
          onSubmit({ ...defaultValues, dataSource: value?.id.toString() || '' })
        }}
      />
    </Box>
  )
}



export default FormularioAnalise;
