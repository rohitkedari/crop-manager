## Q1-2023

## What's New?
* **API to fetch latest timestamp from groups:** It fetches the last timestamp of the operations performed from the array of groups. Note: A maximum of 5 groups can be passed as an array in the request body. Refer [API](https://fs-uat.np-0000183.npause1.bakerhughes.com/asset2/swagger/index.html) (v2/assets/groups/maxtimestamp) for more information.
* **API to fetch changed nodes/edges from groups based on timestamp:** It fetches the list of node Ids/edge Ids from groups on which CUD operations are performed based on the min and max limit of the timestamp. Refer [v2/assets/groups/nodes/changes](https://fs-uat.np-0000183.npause1.bakerhughes.com/asset2/swagger/index.html) and [v2/assets/groups/edges/changes](https://fs-uat.np-0000183.npause1.bakerhughes.com/asset2/swagger/index.html) APIs for more information.
* **Allows tenant creation only at the start of the service:** The system checks the tenant config and validate tenant database and if database does not exist then new database for the tenant is created. The service displays an error stating ‘Tenant Id [""] is not configured to access fdn-asset-svc’ if API call is made for inactive tenant (not present or deleted/disabled).

## What's Improved?
Redis is used as the caching tool to improve performance of Asset 2.0. Refer [deployment guide](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Asset%202.0_Deployment%20Guide.pdf?csf=1&web=1&e=Lai3ug) for more information. Note: It is optional.

## Known Issues
No known issues in this quarter.

## Fixed Issues
* Fixed  the issue of request body accepting blank space or empty string when passed with double quotes. 
* The 'nodes/id/hierarchy and optimize' APIs no longer returns '504- Gateway Timeout server error' if the limit is more than 40,000. 

## Limitation 
No limitation in this quarter.

##  Previous Release
[Asset 2.0 Release Notes Q4-2022](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q4-2022/Asset%202.0_Q4-2022.pdf?csf=1&web=1&e=peHzbW)

[Q4-2022 - Interim Release - Multitenancy](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q4-2022/Asset%202.0_Q4-2022-Interim%20Release-Multitenancy.pdf?csf=1&web=1&e=ApyCVM)

[Asset 2.0 Release Notes Q4-2022 interim release - Materialized View updates](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q4-2022/Asset%202.0_Q4-2022_Interim%20Release-Materialized%20Views.pdf?csf=1&web=1&e=npscwu)

[Asset 2.0 Release Notes Q3-2022 Patch Release](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q4-2022/Asset%202.0_Q3-2022_Patch%20Release.pdf?csf=1&web=1&e=g0IzbQ)

[Asset 2.0 Release Notes Q3 - 2022](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q4-2022/Asset%202.0_Q3-2022.pdf?csf=1&web=1&e=77KMVq)

[Asset 2.0 Release Notes Patch Q2-2022](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q3-2022/Asset%202.0_Patch%20Release_Q2-2022.pdf?csf=1&web=1&e=ZENW0U)

[Asset 2.0 Release Notes Q2 - 2022](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q3-2022/Asset%202.0_Q2-2022.pdf?csf=1&web=1&e=SY14ds)

[Asset 2.0 Release Notes Q1 - 2022](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Q2-2022/Asset%202.0_Q1-2022.pdf?csf=1&web=1&e=8rgENK)

[Asset 2.0 Release Notes Q4 - 2021](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Asset%202.0_Q4-2021.pdf?csf=1&web=1&e=iMXfZb)

[Asset 2.0 Release Notes Q3 - 2021](https://bakerhughes.sharepoint.com/:b:/r/sites/EnterpriseTechnology/aerionframework/Aerion%20Documents/Asset%202.0/Asset%202.0_Q3-2021.pdf?csf=1&web=1&e=pbc7jO)

