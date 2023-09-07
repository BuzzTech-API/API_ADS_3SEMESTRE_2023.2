from database import models, schemas
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database.database import SessionLocal, engine
from models import user_crud, process_crud, step_crud, request_for_evidence_crud, evidence_crud


models.Base.metadata.create_all(bind=engine)

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

@app.get("/")
def hello():
    return {"Hello": "World"}

@app.get("/users/{id}", response_model=schemas.User)
def get_user(id: int, db: Session = Depends(get_db)):
    return user_crud.get_user(id=id, db=db)

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = user_crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_crud.create_user(db=db, user=user)

@app.put("/users/", response_model=schemas.User)
def update_user(user: schemas.User , db: Session = Depends(get_db)):
    return user_crud.update_user(user=user, db=db)

@app.delete("/users/{id}")
def delete_user(id: int, db: Session = Depends(get_db)):
    return user_crud.delete_user(id=id, db=db)

## Processos rotas

@app.get("/processes/{id}", response_model=schemas.Process)
def get_process(id: int, db: Session = Depends(get_db)):
    return process_crud.get_process(id=id, db=db)

@app.post("/processes/", response_model=schemas.Process)
def create_process(process: schemas.ProcessCreate, db: Session = Depends(get_db)):
    return process_crud.create_process(db=db, process=process)

@app.put("/processes/", response_model=schemas.Process)
def update_process(process: schemas.Process , db: Session = Depends(get_db)):
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


## Etapas rotas

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

