import { apiProvider } from './provider';

export type AnaliseType = {
    id: string,
    name: string,
    description: string,
    status: number,
    dataSource: string,
}

class Analysis {

    async post(dataSourceId: string, analysis: AnaliseType) {
        try {

            const path = `datasource/${dataSourceId}/analysis`;
            const response = await apiProvider.post<AnaliseType, AnaliseType>(path, analysis);

            console.log(response);
            console.log(`A analise da fonte de dados com ID ${dataSourceId} foi cadastrada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao cadastrar a análise:', error);
            return { ok: false, err: error };
        }

    }

    async getAll() {
        try {
            const path = 'analysis';
            const response = await apiProvider.get<AnaliseType[]>(path);

            console.log(response);
            console.log('as análises foram obtidas com sucesso.');

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao obter as análises:', error);

            return { ok: false, err: error };
        }
    }

    async getByID(analysisId: string) {
        try {
            const path = `analysis/${analysisId}`;
            const response = await apiProvider.get<AnaliseType>(path);

            console.log(response);
            console.log(`A análise com ID ${analysisId} foi obtida com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao obter a análise:', error);

            return { ok: false, err: error };
        }
    }

    async put(analysisId: string, analysis: AnaliseType) {
        try {
            const path = `analysis/${analysisId}`;
            const response = await apiProvider.put<AnaliseType, AnaliseType>(path, analysis);

            console.log(response);
            console.log(`A análise com ID ${analysisId} foi atualizada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao atualizar a análise:', error);

            return { ok: false, err: error };
        }
    }

    async delete(analysisId: string) {
        try {
            const path = `analysis/${analysisId}`;
            const response = await apiProvider.delete<AnaliseType>(path);

            console.log(response);
            console.log(`A análise com ID ${analysisId} foi deletada com sucesso.`);

            return { ok: true, data: response };
        } catch (error) {
            console.error('Erro ao deletar a análise:', error);

            return { ok: false, err: error };
        }
    }
}

export const analysisService = new Analysis(); 