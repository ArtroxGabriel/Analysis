## Endpoints

### Analysis

| Methods |                  Urls                  |               Actions |
|---------|:--------------------------------------:|----------------------:|
| GET     |              api/analysis              |      get all analysis |
| GET     |           api/analysis/{id}            |    get analysis by id |
| POST    | api/datasource/{dataSourceID}/analysis |      add new analysis |
| PUT     |           api/analysis/{id}            | update analysis by id |
| DELETE  |           api/analysis/{id}            | remove analysis by id |

### Data Source

| Methods |        Urls         |                  Actions |
|---------|:-------------------:|-------------------------:|
| GET     |   api/datasource    |     get all data sources |
| GET     | api/datasource/{id} |    get data source by id |
| POST    |   api/datasource    |      add new data source |
| PUT     | api/datasource/{id} | update data source by id |
| DELETE  | api/datasource/{id} | remove data source by id |

### Column Data Source

| Methods |                      Urls                      |                         Actions |
|---------|:----------------------------------------------:|--------------------------------:|
| GET     | api/datasource/{dataSourceID}/columndatasource |     get all column data sources |
| GET     |           api/columndatasource/{id}            |    get column data source by id |
| POST    | api/datasource/{dataSourceID}/columndatasource |      add new column data source |
| PUT     |           api/columndatasource/{id}            | update column data source by id |
| DELETE  |           api/columndatasource/{id}            | remove column data source by id |


