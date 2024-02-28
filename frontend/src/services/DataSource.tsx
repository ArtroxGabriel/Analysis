import { apiProvider } from './provider';
import { AnaliseType } from './Analysis';
import { ColumnDataSourceType } from './ColumnDataSource';

export type DataSourceType = {
    id: string;
    name: string;
    description: string;
    analysis: AnaliseType[];
    columnDataSource: ColumnDataSourceType[];
}
class DataSource {

    async getAll() {
        try {
            const path = 'datasource';
            const response = await apiProvider.get<DataSourceType[]>(path);

            console.log(response);
            console.log('as fontes de dados foram obtidas com sucesso.');

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao obter as fontes de dados:', error);

            return { ok: false, err: error };
        }
    }

    async getByID(dataSourceId: string) {
        try {
            const path = `datasource/${dataSourceId}`;
            const response = await apiProvider.get<DataSourceType>(path);

            console.log(response);
            console.log(`a fonte de dados com ID ${dataSourceId} foi obtida com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error(`Erro ao obter a fonte de dados com ID ${dataSourceId}:`, error);

            return { ok: false, err: error };
        }
    }

    async post(dataSource: DataSourceType) {
        try {
            const path = 'datasource';
            const response = await apiProvider.post<DataSourceType, DataSourceType>(path, dataSource);

            console.log(response);
            console.log('a fonte de dados foi cadastrada com sucesso.');

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao cadastrar a fonte de dados:', error);

            return { ok: false, err: error };
        }
    }


    async put(dataSourceId: string, dataSource: DataSourceType) {
        try {
            const path = `datasource/${dataSourceId}`;
            const response = await apiProvider.put<DataSourceType, DataSourceType>(path, dataSource);

            console.log(response);
            console.log(`a fonte de dados com ID ${dataSourceId} foi atualizada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error(`Erro ao atualizar a fonte de dados com ID ${dataSourceId}:`, error);

            return { ok: false, err: error };
        }
    }

    async delete(dataSourceId: string) {
        try {
            const path = `datasource/${dataSourceId}`;
            const response = await apiProvider.delete<DataSourceType>(path);

            console.log(response);
            console.log(`a fonte de dados com ID ${dataSourceId} foi deletado com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error(`Erro ao deletar a fonte de dados com ID ${dataSourceId}:`, error);

            return { ok: false, err: error };
        }
    }

}

export const dataSourceService = new DataSource();