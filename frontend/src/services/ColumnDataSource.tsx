import { apiProvider } from './provider';

export type ColumnDataSourceType = {
    idColumnDataSource: string;
    title: string;
    typeData: string;
}

class ColumnDataSource {

    async post(dataSourceId: string, columnDataSource: ColumnDataSourceType) {
        try {
            const path = `datasource/${dataSourceId}/columndatasource`;
            const response = await apiProvider.post<ColumnDataSourceType, ColumnDataSourceType>(path, columnDataSource);

            console.log(response);
            console.log(`a fonte de dados com ID ${dataSourceId} foi cadastrada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao cadastrar a fonte de dados:', error);

            return { ok: false, err: error };
        }
    }

    async getAll(dataSourceId: string) {
        try {
            const path = `datasource/${dataSourceId}/columndatasource`;
            const response = await apiProvider.get<ColumnDataSourceType[]>(path);

            console.log(response);
            console.log(`a fonte de dados com ID ${dataSourceId} foi cadastrada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao cadastrar a fonte de dados:', error);

            return { ok: false, err: error };
        }
    }

    async getByID(columnDataSourceId: string) {
        try {
            const path = `columndatasource/${columnDataSourceId}`;
            const response = await apiProvider.get<ColumnDataSourceType>(path);

            console.log(response);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao buscar a coluna fonte de dados:', error);

            return { ok: false, err: error };
        }
    }

    async put(columnDataSourceId: string, columnDataSource: ColumnDataSourceType) {
        try {
            const path = `columndatasource/${columnDataSourceId}`;
            const response = await apiProvider.put<ColumnDataSourceType, ColumnDataSourceType>(path, columnDataSource);

            console.log(response);
            console.log(`a Coluna fonte de dados com id ${columnDataSourceId} foi atualizada com sucesso.`);


            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao atualizar a coluna fonte de dados:', error);

            return { ok: false, err: error };
        }
    }

    async delete(columnDataSourceId: string) {
        try {
            const path = `columndatasource/${columnDataSourceId}`;
            const response = await apiProvider.delete<ColumnDataSourceType>(path);

            console.log(response);
            console.log(`a Coluna fonte de dados com id ${columnDataSourceId} foi deletada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao deletar a coluna fonte de dados:', error);

            return { ok: false, err: error };
        }
    }
}

export const columnDataSource = new ColumnDataSource();