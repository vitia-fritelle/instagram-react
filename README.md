![instagram](https://bootcampra.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fce86f290-5a6f-413a-868b-0a2ccf46bd5a%2F1384886.png?table=block&id=94d7bc4c-a0a6-4432-a503-4079ac85827b&spaceId=f797e032-5eb2-4c9d-beb7-cd7181e19e47&width=250&userId=&cache=v2)
# Instagram [React]

# Requisitos

Neste mini projeto vocês devem transformar o projeto entregue num projeto React, com os seguintes requisitos:

- [ ]  Você deve criar seu projeto usando o comando que demos do `create-react-app`**:**
    
    ```bash
    create-react-app nome-do-projeto --template @bootcamp-ra/cra-template
    ```
    
- [ ]  Por padrão, o `create-react-app` já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado `git init` lá). Em seguida, crie o projeto também no GitHub e conecte seu projeto local ao GitHub (a entrega será por lá)
- [ ]  A página deve ser componentizada em arquivos com React, import/export
- [ ]  Todos os elementos que são repetitivos devem ser componentizados em componentes genéricos utilizando `props`
    - Exemplo
        - Em vez de:
            
            ```jsx
            export default function Pessoas() {
            	return (
            		<div>
            			<div>
            				<img ... />
            				<p>...</p>
            			</div>
            			<div>
            				<img ... />
            				<p>...</p>
            			</div>
            			<div>
            				<img ... />
            				<p>...</p>
            			</div>
            		</div>
            	);
            }
            ```
            
        - Você deve seguir a abordagem de:
            
            ```jsx
            export default function Pessoas() {
            	return (
            		<div>
            			<Pessoa imagem="..." texto="..." />
            			<Pessoa imagem="..." texto="..." />
            			<Pessoa imagem="..." texto="..." />
            		</div>
            	);
            }
            ```
            
- [ ]  Todos os itens dinâmicos do projeto (como *stories*, *posts*, usuários, etc) devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, os itens dinâmicos são:
    - Os *stories*;
    - Os *posts*;
    - As sugestões de seguidores;
    - O usuário acima das sugestões (este não é um *array*, mas os dados devem vir de *props*);
    - Exemplo
        - Em vez de:
            
            ```jsx
            export default function Lista() {
            	return (
            		<ul>
            			<li>Item 1</li>
            			<li>Item 2</li>
            			<li>Item 3</li>
            		</ul>
            	);
            }
            ```
            
        - Você deve seguir a abordagem de:
            
            ```jsx
            export default function Lista() {
            	const itens = ["Item 1", "Item 2", "Item 3"];
            
            	return (
            		<ul>
            			{itens.map(item => <li>item</li>}
            		</ul>
            	);
            }
            ```
            
    
- [ ]  Arquivos CSS podem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`