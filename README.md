# Projeto da Unidade 02 de POS
- Data de entrega: **12/09/2025**
- Sem prorrogações!

## Instruções
- Sigam as instruções da tarefa no slide: https://dvcirilo-ifrn.github.io/pos/slides/aula13.html#17
- Apenas um repositório por dupla.

## Equipe
- Ellainy

# Intruções para o uso
1. ### Prepare o ambiente:
   - Crie e ative a venv 

```
python -m venv venv
```

```
venv/scripts/activate.ps1
```
2. ### Instale as dependências:
```
pip install -r requirements.txt
```


2. ### Configure o .env:
   -  Altere o nome da pasta exemplo.env para .env e prencha com os dados:

```
SECRET_KEY="Suap_Boletins"
CLIENT_ID= seu_client_id
CLIENT_SECRET=seu_client_secret
```


3. ### Rode o sistema:
```
flask run
```