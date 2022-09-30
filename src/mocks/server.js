import { setupServer } from 'msw/node';
import { handlers } from './handlers.js';

export const mockApi = setupServer(...handlers);