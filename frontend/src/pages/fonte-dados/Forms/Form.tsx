import { Autocomplete, Box, FormControl, Input, TextField, Typography } from "@mui/material";

import { DataSourceType } from "../../../services/DataSource";
import { useEffect, useState } from "react";


interface FormProps {
  defaultValues: DataSourceType;
  onSubmit: (data: DataSourceType) => void;
}
function FormularioFonteDados({ defaultValues, onSubmit }: FormProps) {

  const [values, setValues] = useState<String[]>([]);


  useEffect(() => {
    const getAnalises = defaultValues.analysis ? defaultValues.analysis : [];
    setValues(getAnalises.map((option) => option.name));
  }, [defaultValues]);

  return (
    <Box component="form"
      sx={{
        '& > :not(style)': { m: 2 },
        ml: 2, 
        mr: 10, 
        mt: 6
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-row justify-between">
        <FormControl>
          <Typography variant="h5" fontWeight='bold' >*Título da Fonte</Typography>
          <Input
            sx={{ m: 1, width: '40ch' }}
            placeholder="Digite o nome"
            defaultValue={defaultValues.name}
            multiline
            inputProps={{ maxLength: 255 }}
            onChange={(e) => setTimeout(() => {
              onSubmit({ ...defaultValues, name: e.target.value })
            }, 750)}
            id="standard-adornment-amount"
          />
        </FormControl>
        <FormControl>
          <Typography variant="h5" fontWeight='bold'>*Descrição da Fonte</Typography>
          <Input
            sx={{ m: 1, width: '50ch' }}
            placeholder="Digite a descrição"
            defaultValue={defaultValues.description}
            multiline
            inputProps={{ maxLength: 255 }}
            onChange={(e) => setTimeout(() => {
              onSubmit({ ...defaultValues, description: e.target.value })
            }, 750)}
            id="standard-adornment-amount"
          />
        </FormControl>
      </div>
      <Autocomplete
        multiple
        options={values}
        value={values}
        onChange={(event, newValues) => {
          if (Array.isArray(newValues)) {
            setValues(newValues);
          }
        }}
        id="disable-close-on-select"
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="(Selecione as análises que possuem a fonte de dados)"
            placeholder="Análises"
          />
        )}
      />
    </Box>
  )
}



export default FormularioFonteDados;
