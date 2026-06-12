import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimissuesApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimissuesApi';

        displayName = 'Azure Apimanagement Apimissues API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimissues/azure-apimanagement-apimissues.png', dark: 'file:../nodes/AzureApimanagementApimissues/azure-apimanagement-apimissues.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimissues API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
