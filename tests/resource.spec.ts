import { Pica } from '../src/index';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Contacts } from '../src/types/models';

describe('SDK Unified & Passthrough Mock Tests', () => {
    let pica: Pica;
    let mockAxios: MockAdapter;
    let axiosInstance: AxiosInstance;

    const CONNECTION_KEY = 'pica-connection';
    const SECRET_KEY = 'sk_test_abc';
    const BASE_URL = 'http://localhost/v1';

    beforeEach(() => {
        axiosInstance = axios.create({
            baseURL: BASE_URL
        });

        mockAxios = new MockAdapter(axiosInstance);

        pica = new Pica(SECRET_KEY, {
            serverUrl: BASE_URL,
        });

        pica.axiosInstance = axiosInstance;
    });

    afterEach(() => {
        mockAxios.reset();
    });

    it('should create a contact', async () => {
        const newContact: Contacts = {
            firstName: 'John',
            lastName: 'Doe'
        };

        const createdContactResponse = { id: '123', ...newContact };

        mockAxios.onPost('unified/contacts').reply((_config) => {
            return [201, { unified: createdContactResponse }];
        });

        const createdContact = await pica.contacts(CONNECTION_KEY).create(newContact);

        expect(createdContact.statusCode).toBe(201);
    });

    it('should update a contact', async () => {
        const contactId = '123';
        const updatedContact: Contacts = {
            firstName: 'Jane',
            lastName: 'Doe'
        };

        mockAxios.onPatch(`unified/contacts/${contactId}`).reply((_config) => {
            return [204, { unified: updatedContact }];
        });

        const response = await pica.contacts(CONNECTION_KEY).update(contactId, updatedContact);

        expect(response.statusCode).toBe(204);
    });

    it('should get a contact', async () => {
        const contactId = '123';
        const contact: Contacts = {
            id: contactId,
            firstName: 'John',
            lastName: 'Doe'
        };

        mockAxios.onGet(`unified/contacts/${contactId}`).reply((_config) => {
            return [200, { unified: contact }];
        });

        const response = await pica.contacts(CONNECTION_KEY).get(contactId);

        expect(response.statusCode).toBe(200);
        expect(response.unified).toEqual(contact);
    });

    it('should list contacts', async () => {
        const contacts: Contacts[] = [
            { id: '1', firstName: 'John', lastName: 'Doe' },
            { id: '2', firstName: 'Jane', lastName: 'Smith' }
        ];

        mockAxios.onGet('unified/contacts').reply((_config) => {
            return [200, { unified: contacts }];
        });

        const response = await pica.contacts(CONNECTION_KEY).list();

        expect(response.statusCode).toBe(200);
        expect(response.unified).toEqual(contacts);
    });

    it('should delete a contact', async () => {
        const contactId = '123';

        mockAxios.onDelete(`unified/contacts/${contactId}`).reply((_config) => {
            return [204, {}];
        });

        const response = await pica.contacts(CONNECTION_KEY).delete(contactId);

        expect(response.statusCode).toBe(204);
    });

    it('should count contacts', async () => {
        const count = { count: 10 };

        mockAxios.onGet('unified/contacts/count').reply((_config) => {
            return [200, { unified: count }];
        });

        const response = await pica.contacts(CONNECTION_KEY).count();

        expect(response.statusCode).toBe(200);
        expect(response.unified).toEqual(count);
    });

    it('should use passthrough to search contacts', async () => {
        interface Custom {
            name: string,
            age: number,
            verified: boolean
        };

        const mockContacts: Custom[] = [
            { name: 'John Doe', age: 30, verified: true },
            { name: 'Jane Smith', age: 25, verified: false }
        ];

        const data = {
            data: mockContacts
        };

        mockAxios.onGet('/passthrough/contacts/search.json').reply((_config) => {
            return [200, data];
        });

        const passthroughResponse = await pica.passthrough<Custom>(CONNECTION_KEY).call({
            method: 'GET',
            path: 'contacts/search.json',
            headers: {},
            queryParams: {}
        });

        expect(passthroughResponse.statusCode).toBe(200);
        expect(passthroughResponse.passthrough).toEqual(data);
    });
});