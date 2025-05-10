import { describe, it, expect } from 'vitest';
import { signIn } from '../src/contexts/AuthContext.jsx';

describe('Autenticação', () => {
  it('Deve realizar login com sucesso', async () => {
    const result = await signIn({ email: 'test@test.com', password: '123456' });
    expect(result).toBeTruthy();
  });
});