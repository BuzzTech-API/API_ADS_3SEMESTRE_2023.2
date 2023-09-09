from database import schemas, database
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database.database import SessionLocal, engine
from models import user_crud, process_crud, step_crud, request_for_evidence_crud, evidence_crud,process_user_crud,user_step_crud
from typing import Optional

database.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)

## Rotas que trabalham o usuario

@app.get("/users/{id}", response_model=schemas.UserGet)
def get_user(id: int, db: Session = Depends(get_db)):
    """ Você coloca o id do usuario e te retorna um json contendo todos seus dados e processos e etapas que ele está responsável e caso ele não exista lança um exceção http falando que ele não existe"""
    user = user_crud.get_user(id=id, db=db)
    if user:
        return user
    else:
        raise HTTPException(status_code=404, detail="Usuario não existe")


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """Você posta no body os dados do usuario seguindo o modelo da classe UserCreate e se aquele email não tiver sido registrado ainda será adicionado o usuario o banco, caso ele exista lança uma http exception falando que aquele email ja está registrado"""
    db_user = user_crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_crud.create_user(db=db, user=user)

@app.put("/users/", response_model=schemas.User)
def update_user(user: schemas.User , db: Session = Depends(get_db)):
    """Você recebe o usuario que você quer alterar e o altera caso ele exista no banco, caso ele não exista lança uma exceção dizendo que usuario não foi encontrado"""
    user = user_crud.update_user(user=user, db=db)
    if user:
        return user
    else:
        raise HTTPException(status_code=404, detail="Usuario não encotrado")

@app.delete("/users/{id}")
def delete_user(id: int, db: Session = Depends(get_db)):
    """Recebe o id do usuario e tenta deletar ele no banco caso ele exista ira deleta-lo e retorna ele mostrando seus dados, caso não tenho retornara None"""
    return user_crud.delete_user(id=id, db=db)

## Processos rotas

@app.get("/processes/{id}", response_model=schemas.Process)
def get_process(id: int, db: Session = Depends(get_db)):
    return process_crud.get_process(id=id, db=db)

@app.post("/processes/", response_model=schemas.Process)
def create_process(process: schemas.ProcessCreate, db: Session = Depends(get_db)):
    return process_crud.create_process(db=db, process=process)

@app.put("/processes/", response_model=schemas.Process)
def update_process(process: schemas.ProcessUpdate , db: Session = Depends(get_db)):
    return process_crud.update_process(process=process, db=db)

@app.delete("/processes/{id}")
def delete_process(id: int, db: Session = Depends(get_db)):
    return process_crud.delete_process(id=id, db=db)


## Etapas rotas

@app.get("/steps/{id}", response_model=schemas.Step)
def get_step(id: int, db: Session = Depends(get_db)):
    return step_crud.get_step(id=id, db=db)

@app.post("/steps/", response_model=schemas.Step)
def create_step(step: schemas.StepCreate, db: Session = Depends(get_db)):
    return step_crud.create_step(db=db, step=step)

@app.put("/steps/", response_model=schemas.Step)
def update_step(step: schemas.Step , db: Session = Depends(get_db)):
    return step_crud.update_step(step=step, db=db)

@app.delete("/steps/{id}")
def delete_step(id: int, db: Session = Depends(get_db)):
    return step_crud.delete_step(id=id, db=db)


## Pedidos De Evidencia rotas

@app.get("/request_for_evidence/{id}", response_model=schemas.RequestForEvidence)
def get_request_for_evidence(id: int, db: Session = Depends(get_db)):
    return request_for_evidence_crud.get_request_for_evidence(id=id, db=db)

@app.post("/request_for_evidence/", response_model=schemas.RequestForEvidence)
def create_request_for_evidence(request_for_evidence: schemas.RequestForEvidenceCreate, db: Session = Depends(get_db)):
    return request_for_evidence_crud.create_request_for_evidence(db=db, request_for_evidence=request_for_evidence)

@app.put("/request_for_evidence/", response_model=schemas.RequestForEvidence)
def update_request_for_evidence(request_for_evidence: schemas.RequestForEvidence , db: Session = Depends(get_db)):
    return request_for_evidence_crud.update_request_for_evidence(request_for_evidence=request_for_evidence, db=db)

@app.delete("/request_for_evidence/{id}")
def delete_request_for_evidence(id: int, db: Session = Depends(get_db)):
    return request_for_evidence_crud.delete_request_for_evidence(id=id, db=db)


## Evidencias rotas

@app.get("/evidences/{id}", response_model=schemas.Evidence)
def get_evidence(id: int, db: Session = Depends(get_db)):
    return evidence_crud.get_evidence(id=id, db=db)

@app.post("/evidences/", response_model=schemas.Evidence)
def create_evidence(evidence: schemas.EvidenceCreate, db: Session = Depends(get_db)):
    return evidence_crud.create_evidence(db=db, evidence=evidence)

@app.put("/evidences/", response_model=schemas.Evidence)
def update_evidence(evidence: schemas.Evidence , db: Session = Depends(get_db)):
    return evidence_crud.update_evidence(evidence=evidence, db=db)

@app.delete("/evidences/{id}")
def delete_evidence(id: int, db: Session = Depends(get_db)):
    return evidence_crud.delete_evidence(id=id, db=db)



## Processo Usuario rotas


@app.get("/users_processes/{user_id}/{process_id}", response_model=Optional[schemas.ProcessUser])
def get_process_user(user_id, process_id,db: Session = Depends(get_db)):
    a = process_user_crud.get_process_user_by_user_and_process_id(user_id=user_id, process_id=process_id, db=db)
    print(a)
    return a


@app.post("/users_processes/", response_model=schemas.ProcessUserCreate)
def create_process_user(process_user: schemas.ProcessUserCreate, db: Session = Depends(get_db)):
    return process_user_crud.create_process_user(db=db, process_user=process_user)


@app.delete("/users_processes/{id}")
def delete_process_user(id: int, db: Session = Depends(get_db)):
    return process_user_crud.delete_process_user(id=id, db=db)



## Usuario Etapas rotas


@app.get("/stepes_users/{user_id}/{step_id}", response_model=schemas.UserStep)
def get_user_step(user_id, step_id, db: Session = Depends(get_db)):
    return user_step_crud.get_user_step_by_user_and_step_id(user_id=user_id, step_id=step_id, db=db)


@app.post("/stepes_users/", response_model=schemas.UserStep)
def create_user_step(user_step: schemas.UserStepCreate, db: Session = Depends(get_db)):
    return user_step_crud.create_user_step(db=db, user_step=user_step)


@app.delete("/stepes_users/")
def delete_user_step(step_user: schemas.UserStepCreate, db: Session = Depends(get_db)):
    return user_step_crud.delete_user_step(step_id=step_user.step_id, user_id=step_user.user_id , db=db)

