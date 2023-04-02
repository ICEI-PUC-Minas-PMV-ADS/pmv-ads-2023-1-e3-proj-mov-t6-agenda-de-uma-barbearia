# Plano de Testes de Software

Segue abaixo o Plano de Teste de Software feito seguindo a metodologia de BDD, (Behavior Driven Design) onde todos os requisitos são testados ao longo do projeto gerando relátorios e imagens dos testes realizados.

<table border="1">
   <thead>
   <tr>
       <th>RF</th>
       <th>Cenário</th>
       <th>Pré-Condição</th> 
       <th>Dado</th>
       <th>Quando</th>
      <th>Então</th>
   </tr>
   </thead>
   <tbody>
   <tr>
       <td>RF-001</td>
       <td>Usuário efetuar o cadastramento da conta</td>
       <td>Usuário acessar a página de cadastro</td>
       <td>Usuário preenche o formulário de cadastro</td>
       <td>Usuário clica no botão de cadastrar</td>
       <td>O app realiza o cadastro com os dados necessários</td>
       
   </tr>
   <tr>
       <td>RF-002</td>
       <td>Usuário efetuar o login no app</td>
       <td>Usuário deverá estar cadastrado</td>
       <td>Usuário preenche seus dados na tela de login</td>
       <td>Usuário clica no botão de logar</td>
       <td>O usuário realiza o login e é redirecionado para página home</td>
   </tr>
   </tbody>
   
 <tr>
      <td>RF-003</td>
       <td>Usuário irá escolher os seus serviços</td>
       <td>O usuário estar logado e existir serviços cadastrados </td>
       <td>Acessa a página da agenda de serviços selecionado</td>
       <td>O usuário é redirecionado para página de serviços agendados</td>
       <td>A página de serviços agendados e renderizada mostrando todos os serviços que foram cadastrados.</td>
   </tfoot>
   <tfoot>
      <td>RF-004</td>
       <td>Usuário irá cancelar um serviço agendado</td>
       <td>O serviço estar agendado</td>
       <td>O serviço esteja no prazo de cancelamento e com o status de a realizar</td>
       <td>O usuário confirma o cancelamento do serviço</td>
       <td>O serviço que está agendado é deletado.</td>
   </tfoot>
</table>
