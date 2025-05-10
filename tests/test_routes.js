import { describe, it, expect } from 'vitest';
import { AppRoutes } from '../src/routes/AppRoutes.jsx';

describe('Rotas', () => {
  it('Deve renderizar a rota inicial', () => {
    const routes = AppRoutes();
    expect(routes).toBeTruthy();
  });
});