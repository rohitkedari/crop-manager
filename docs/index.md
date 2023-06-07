# Introduction

Asset-Service is a collection of assets that are linked with each other which forms a special hierarchy. This hierarchy is a systematic classification of business units, processes, systems and equipment into generic types based upon various factors such as location, use, etc.

Asset resource is divided into 3 sub types.

**Types**- Defined as type of asset E.g., Compressor, Motor
**Asset** - Defined as instance of specific type E.g., Motor in gearbox.
**Properties** - Defined as properties of instances or default properties of types

**Following are the important changes for Asset 2.0 services:**
* Attributes are termed as properties.
* The REST structures are changed to create more flexible APIs.
* .NET core language is used for Asset 2.0
* Supports pagination to fetch asset and hierarchy information

# Features
* Extremely high number of nodes (75M approx.) will be supported for any asset.
* As the scalability will increase, the APIs will be extremely high performant to match the same
* Creating of multiple assets is supported i.e. bulk ingestion
* Hierarchy model will consist of parent, child and sibling relation. With such model complicated graphs can be created in an easy way
* Supports pagination to fetch asset and hierarchy information
* Allows updating and deleting of edges and nodes
* Provides change notification. Refer Change Notification for more detail.
* Hierarchy feature allows users to find nodes in upward direction (i.e. from child node to parent node)
* Allows linking of the assets across groups in the hierarchy. Refer diagram for more information.
* Support for in-image schema upgrade using Entity Framework Core
* Secured communication using Transport Layer Security (TLS)
* Addition of an API (v2/assets/nodes/id/groupedhierarchy) to identify parent child mapping and an Upsert API (/v2/assets/nodes/batch_upsert and /v2/assets/edges/batch_upsert) for Nodes and Edge
* Validates/Filters type hierarchy
* Provision of Audit and Application logs with respect to log levels
* Supports Multitenancy with semi-automated Tenant Onboarding
* Redis cache introduced for effective caching or else in-memory cache can be used. Note: Fetch API (Optimized hierarchy, nodeId hierarchy and Grouped hierarchy endpoints) calls takes less time in consecutive call and more time in first time due to cache creation.
* Introduced fetch latest timestamp from groups and fetch changed nodes/edges from groups based on timestamp APIs
* Allows tenant creation only at the start of the service

# Security consideration
Data stored in Asset Service 2.0 is untrusted data. Consumer applications should not use the data as trusted source of information and should always pass responses through validations before using them inside any database queries/operations.
