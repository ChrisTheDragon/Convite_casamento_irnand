# Convite de Casamento

Convite de casamento interativo, responsivo e otimizado para dispositivos móveis. O projeto utiliza HTML, CSS e JavaScript puros, com efeito de virar páginas através do Swiper.js.

## Link do convite

> Substitua o endereço abaixo pelo link publicado no GitHub Pages.

**Acessar convite:** [COLE_AQUI_O_LINK_DO_GITHUB_PAGES](https://SEU_USUARIO.github.io/SEU_REPOSITORIO/)

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- [Swiper.js](https://swiperjs.com/) via CDN
- Google Fonts:
  - Cormorant Garamond
  - Great Vibes
  - Montserrat

## Estrutura do repositório

```text
.
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── audio/
│   │   ├── audio.mp3
│   │   └── .gitkeep
│   └── images/
│       ├── Convite.jpeg
│       ├── casal1.jpeg
│       ├── casal2.jpeg
│       ├── casal3.jpeg
│       ├── casal4.jpeg
│       ├── casal5.jpeg
│       └── .gitkeep
└── pages/
    ├── dress-code.html
    ├── manual.html
    └── presentes.html
```

## Páginas do convite

- **Capa:** utiliza `assets/images/Convite.jpeg` e abre o convite ao tocar no selo.
- **Mensagem inicial:** utiliza `assets/images/casal1.jpeg`.
- **Data do casamento:** utiliza `assets/images/casal2.jpeg`.
- **Informações do evento:** utiliza `assets/images/casal3.jpeg`.
- **Menu de ações:** utiliza `assets/images/casal4.jpeg`.
- **Mensagem final:** utiliza `assets/images/casal5.jpeg`.
- **Dress Code:** página independente em `pages/dress-code.html`.
- **Manual dos convidados:** página independente em `pages/manual.html`.
- **Sugestão de presentes:** página independente em `pages/presentes.html`.

## Personalização

### Imagens

Substitua os arquivos dentro de `assets/images/`, mantendo os mesmos nomes, ou atualize os caminhos no HTML e CSS.

Os nomes dos arquivos diferenciam letras maiúsculas e minúsculas:

```text
Convite.jpeg
casal1.jpeg
casal2.jpeg
casal3.jpeg
casal4.jpeg
casal5.jpeg
```

### Música

Adicione o arquivo de áudio em:

```text
assets/audio/audio.mp3
```

O áudio é iniciado após o usuário tocar no selo da capa, respeitando as políticas de autoplay dos navegadores móveis.

### Links

No `index.html`, atualize:

- Link do Google Maps.
- Número e mensagem do WhatsApp.
- Textos, nomes, datas e local do evento.

Os pontos de personalização estão identificados com comentários `SUBSTITUA`.

### Estilos

Os principais estilos estão em `css/styles.css`. As variáveis no início do arquivo controlam cores, tamanhos e sobreposições das páginas, por exemplo:

```css
--final-text
--final-overlay
--final-message-size
--menu-panel
--menu-icon-size
```

## Executar localmente

O convite pode ser aberto diretamente pelo arquivo `index.html`.

Para uma experiência mais próxima do GitHub Pages, também é possível iniciar um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie todo o conteúdo deste diretório para a branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Salve e aguarde a publicação.

O endereço normalmente será:

```text
https://SEU_USUARIO.github.io/SEU_REPOSITORIO/
```

## Atualizar uma publicação existente

Depois de modificar o projeto:

```bash
git add .
git commit -m "Atualiza convite"
git push
```

O GitHub Pages fará uma nova publicação automaticamente.

## Observações

- O projeto não requer Node.js, compilação ou dependências locais.
- O layout foi desenvolvido com foco em dispositivos móveis.
- O `overflow` vertical é bloqueado para evitar rolagem indesejada no livro de páginas.
- O Swiper.js é carregado por CDN; para funcionar offline, será necessário baixar e hospedar a biblioteca localmente.
