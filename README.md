# Hospital Caminhos

Aplicação web de enfermagem com React, Vite, TypeScript, Express e SQLite.

## Executar

1. Requer Node.js 22.5 ou superior (usa o módulo `node:sqlite` integrado ao Node).
2. Instale dependências: `npm install`
3. Inicie frontend e API: `npm run dev`
4. Acesse `http://localhost:5173`. A API fica em `http://localhost:3001`.

O banco `data/hospital.db` e os três usuários iniciais são criados automaticamente na primeira inicialização. Credenciais: Lorena / `12345678`, Ana Clara / `87654321`, Júlia / `24682468`. Em produção, defina `JWT_SECRET` com valor seguro e sirva o build do frontend através de HTTPS.

## Recursos

- Login com senha armazenada por bcrypt e token JWT.
- Cadastro transacional de paciente e anamnese.
- Evoluções relacionadas ao paciente, com autoria e horário.
- Listagem e visualização detalhada via API autenticada.
- Impressão com estilos próprios.
