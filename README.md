# drumkit project

## Este projeto é uma releitura de alguns sites e apps de bateria, mesa de DJ e afins

**Resumo:** As divs na tela são criadas com javascript mesmo, os arquivos de som são armazenados em um objeto/json com as respectivas teclas. 
Para que o navegador saiba qual div foi clicada, diferencio pelo "target.id" do "MouseEvent" gerado no clique, e uso "key", do "KeyboardEvent" gerado quando pressiono a tecla no teclado, se o target ou a key forem os mesmos da tecla dentro do json, o som é ativado.
