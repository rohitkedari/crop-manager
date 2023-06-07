## Q1-2023

## What's New?
* **API to fetch latest timestamp from groups:** It fetches the last timestamp of the operations performed from the array of groups. Note: A maximum of 5 groups can be passed as an array in the request body. Refer [API](https://fs-uat.np-0000183.npause1.bakerhughes.com/asset2/swagger/index.html) (v2/assets/groups/maxtimestamp) for more information.
* **API to fetch changed nodes/edges from groups based on timestamp:** It fetches the list of node Ids/edge Ids from groups on which CUD operations are performed based on the min and max limit of the timestamp. Refer v2/assets/groups/nodes/changes and v2/assets/groups/edges/changes APIs for more information.
* **Allows tenant creation only at the start of the service:** The system checks the tenant config and validate tenant database and if database does not exist then new database for the tenant is created. The service displays an error stating ‘Tenant Id [""] is not configured to access fdn-asset-svc’ if API call is made for inactive tenant (not present or deleted/disabled).

## What's Improved?
Redis is used as the caching tool to improve performance of Asset 2.0. Refer deployment guide for more information. Note: It is optional.

## Known Issues
No known issues in this quarter.

## Fixed Issues
* Fixed  the issue of request body accepting blank space or empty string when passed with double quotes. 
* The 'nodes/id/hierarchy and optimize' APIs no longer returns '504- Gateway Timeout server error' if the limit is more than 40,000. 

## Limitation 
No limitation in this quarter.

##  Previous Release
