Asset service acts as a data storage and data access layer with single intention to perform various operations on asset configuration information.

Asset service is a microservice built using C# language and on .NET Core runtime. It is hierarchical in nature and one can create complex asset hierarchies and graph kind of a structures using this service.

![The architecture of an Asset Service 2.0](./assets/architecture.png)

## Architecture
Asset Service internally comprises of multiple components, some of them are shown above. Each one of them has its own specific responsibility.

**Data Access Layer** – This layer is responsible for accessing all asset configuration data stored in POSTGRESQL database.

**Business Logic Layer** – This component comprises of business level rules and some optimizations for faster CRUD operations on data.

**Proxy Layer** – This layer exposes functionality of Asset Service to the outside world in the form of REST APIs. It currently comprises of two sets of APIs namely Ingestion APIs and Data Fetch APIs.

**PostgreSQL Database** – This is the cloud hosted actual storage of Asset Configuration Information.

## Concepts in Asset Service 
**Node Types:** Every asset in hierarchy is represented as a node, each node can have a type associated with it: E.g., A “Compressor” will have a node with “Compressor” as its type.

**Properties:** Every node further have properties associated with it. E.g., A “Compressor" having a rated rpm of 3000 is a property on the node with the value mentioned.

**Edges:** Once nodes are created; they need to be coupled with adjoining nodes to form logical hierarchy as represented by connection in real world. This is achieved with edges and each node can be marked up with the adjoining node using a edge. E.g., A pump-set has 2 nodes Motor and Pump and they can be linked together with edges.

**Edge types:** The need for same node to be linked with multiple nodes together is quite prevalent in industry which can be achieved via different edge types. E.g., Ambient temperature can be linked to entire field or can be linked to a specific process using different edge types
