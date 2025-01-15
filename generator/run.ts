import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import Handlebars from 'handlebars';
import { camelCase } from "camel-case";

const GET_TYPES_URL = "https://development-api.picaos.com/v1/public/schemas/types/typescript";
const GET_COMMON_MODELS_URL = "https://development-api.picaos.com/v1/public/sdk/common-models?limit=500";

const generateSDK = async () => {
    try {
        console.log('🚀 Fetching types from Pica API...');

        const getTypesRequest = await axios.get(GET_TYPES_URL);
        const types = getTypesRequest.data;

        console.log('✅ Types fetched successfully. Updating models.ts file...');

        const modelsFilePath = path.join(__dirname, '..', 'src', 'types', 'models.ts');
        const modelsFileContent = `// This file is auto-generated. Do not edit it manually.\n\n${types}`;

        await fs.writeFile(modelsFilePath, modelsFileContent, 'utf8');

        console.log('📝 models.ts file has been updated successfully.');

        console.log('🔍 Fetching resources from Pica API...');

        const getCommonModelsRequest = await axios.get(GET_COMMON_MODELS_URL);
        const commonModels = getCommonModelsRequest.data?.rows || [];
        const primaryCommonModelNames = commonModels
            .filter((model: any) => model.primary)
            .map((model: any) => model.name);

        const resources = primaryCommonModelNames.map((resourceName: string) => ({
            lowerCase: resourceName.toLowerCase(),
            camelCase: camelCase(resourceName),
            pascalCase: resourceName
        }));

        console.log('✅ Primary common models fetched successfully. Generating index.ts file...');

        const templatePath = path.join(__dirname, './templates/index.handlebars');
        const templateContent = await fs.readFile(templatePath, 'utf8');

        const template = Handlebars.compile(templateContent);
        const indexContent = template({ resources });

        const indexFilePath = path.join(__dirname, '..', 'src', 'index.ts');
        await fs.writeFile(indexFilePath, indexContent, 'utf8');

        console.log('🎉 index.ts file has been generated successfully.');
    } catch (error) {
        console.error('❌ An error occurred while generating the SDK:', error);
    }
};

generateSDK();
