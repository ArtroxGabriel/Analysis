import { Box, Button, TextField, Typography, Autocomplete, Input } from "@mui/material";
import { PlusCircle, TrashWhiteIcon } from "../../../../assets";

import { columnDataSource, ColumnDataSourceType } from "../../../../services/ColumnDataSource";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

type ColumnDataProps = {
  columns: ColumnDataSourceType[]; 
  setColumns: (data: ColumnDataSourceType[]) => void;

};

const ColumnData = ({ columns, setColumns }: ColumnDataProps) => {
  const id = useParams().id || '';
  const typeDatas: string[] = ["Texto", "Números", "Data"];


  const addColumn = () => {
    const newColumn: ColumnDataSourceType = {
      idColumnDataSource: "",
      title: `Digite o titulo da coluna`,
      typeData: "none" 
    };

    columnDataSource.post(id, newColumn).then((response) => {
      if (response.ok && response.data !== undefined) {
        setColumns([...columns, response.data]);
        toast.success('Coluna adicionada com sucesso.');
      } else {
        throw new Error('Erro ao adicionar a Fonte de dados. Tente novamente mais tarde.');
      }
    }).catch(error => {
      console.error('Erro ao adicionar a Fonte de dados:', error);
      toast.error('Erro ao adicionar a Coluna Tente novamente mais tarde.');
    });
  };


  const removeColumn = (ColumnData: ColumnDataSourceType) => {

    const indexToRemove = columns.indexOf(ColumnData);

    columnDataSource.delete(ColumnData.idColumnDataSource)
      .then((response) => {
        if (response.ok) {
          toast.success('Coluna excluída com sucesso.');
        } else {
          throw new Error('Erro ao excluir a Fonte de dados. Tente novamente mais tarde.');
        }
      })
      .catch(error => {
        console.error('Erro ao excluir a Fonte de dados:', error);
        toast.error('Erro ao excluir a Coluna Tente novamente mais tarde.');

      });

    setColumns(columns.filter((coluna, index) => index !== indexToRemove));
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, ColumnData: ColumnDataSourceType) => {
    const index = columns.indexOf(ColumnData);
    const updatedColumns = [...columns];
    updatedColumns[index].title = event.target.value;
    setColumns(updatedColumns);
  };

  const handleChangeTypeData = (value: string | null, ColumnData: ColumnDataSourceType) => {
    const index = columns.indexOf(ColumnData);
    const updatedColumns = [...columns];
    updatedColumns[index].typeData = value || "texto"; 
    setColumns(updatedColumns);
  };


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2 },
        ml: 2,
        mr: 10,
        mt: 6
      }}
      noValidate
      autoComplete="off"
    >
      {columns.map((column, index) => (
        <div key={column.idColumnDataSource} className="flex flex-col w-full border border-blue rounded-lg mb-20">
          <div className="flex flex-row w-full justify-between pt-2 bg-blue rounded-t-lg ">
            <Typography fontWeight={'bold'} sx={{ color: 'white', ml: 2, fontSize: 18 }}> Coluna {index + 1} </Typography>
            <Button sx={{ mb: 1 }} onClick={() => removeColumn(column)}> <TrashWhiteIcon /> </Button>
          </div>
          <div className="flex justify-between mb-5 mt-8 mx-5">
            <Input
              sx={{ m: 1, width: '40ch' }}
              placeholder="Digite o Título da Coluna"
              multiline
              defaultValue={column.title === "Digite o titulo da coluna" ? "" : column.title}
              onChange={(event) => handleChangeTitle(event, column)}
              inputProps={{ maxLength: 255 }}
              id="standard-adornment-amount"
            />
            <Autocomplete
              disableCloseOnSelect
              id="tipos de dados"
              options={typeDatas}
              value={column.typeData === "none" ? '' : column.typeData}
              onChange={(event, value) => handleChangeTypeData(value, column)}
              sx={{ width: '40ch' }}
              renderInput={(params) => <TextField {...params} label="(Seleciona o tipo de dado)" variant="standard" />}
            />
          </div>
        </div>
      ))}
      <Button
        variant="text"
        sx={{ fontSize: 14, fontWeight: 'bold', gap: 1 }}
        onClick={addColumn}
      >
        <PlusCircle /> Adicionar Coluna
      </Button>
    </Box>
  );
};

export default ColumnData;
