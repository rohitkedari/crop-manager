## Q1-2023
### Single User Scenarios
Each pod having 2GB RAM and 1000m CPU

| **NFR requirement**                   | **Jenkins End to End Time in miliseconds 90% (ms) sRedis** | **Jenkins End to End Time in miliseconds 90% (ms) Inmemory** |
| ------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| Bulk Asset Ingestion (1k Asset Types) | 4471 /3306                                                | 4322 /4272                                                   |
| Bulk Edge Ingestion (1k Edge Types)   | 3423 /3174                                                | 3424 /3071                                                   |


| Term              | Explanation                                                                                                                                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Integrator        | The **integrator** hosts the Backstage app and configures which plugins are available to use in the app.                                                                                                                                                                               |
| Contributor       | The **contributor** adds functionality to the app by writing plugins.                                                                                                                                                                                                                  |
| Software Engineer | The **software engineer** uses the app's functionality and interacts with its plugins. In practice, this profile covers the various roles that help deliver software, from the Software Engineer themselves, to Designers, Data Scientists, Product Owners, Engineering Managers, etc. |
