# DigitalPlus — primeira versão do site

Site estático responsivo em HTML, CSS e JavaScript. Não exige instalação de dependências.

## Ver localmente
1. Extraia o ZIP.
2. Abra `index.html` no navegador.

## Publicar gratuitamente na Vercel
1. Crie uma conta em https://vercel.com/.
2. Crie um repositório no GitHub em https://github.com/ e envie os três arquivos do site (`index.html`, `styles.css`, `script.js`).
3. Na Vercel, escolha **Add New → Project**, importe esse repositório e publique.
4. A Vercel fornecerá um endereço gratuito terminado em `vercel.app`.

## Antes de vender
- Os preços e serviços atuais são ilustrativos e devem ser revisados.
- O formulário funciona apenas como demonstração local; ele não grava nem envia pedidos.
- Não existe cobrança Pix integrada nesta versão.
- Para pedidos reais, crie um backend e um banco de dados; valide os dados no servidor.
- Integre um provedor Pix (por exemplo, Mercado Pago ou Asaas) no backend. Guarde chaves secretas apenas como variáveis de ambiente no servidor. Confirme pagamentos por webhook assinado e valide o status no servidor; não confie apenas na página de retorno.
- Adicione políticas de privacidade, termos, política de reembolso e canais de suporte antes de aceitar pagamentos.
- Use serviços de divulgação legítimos e respeite as regras das plataformas sociais.

## Estrutura
- `index.html` — conteúdo e estrutura
- `styles.css` — tema visual e responsividade
- `script.js` — seleção de plataforma/serviço e formulário demonstrativo
