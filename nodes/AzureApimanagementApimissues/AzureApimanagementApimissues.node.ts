import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimissues implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimissues',
                name: 'N8nDevAzureApimanagementApimissues',
                icon: { light: 'file:./azure-apimanagement-apimissues.png', dark: 'file:./azure-apimanagement-apimissues.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Retrieve all issues via REST API for Azure API Management service.',
                defaults: { name: 'Azure Apimanagement Apimissues' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimissuesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
