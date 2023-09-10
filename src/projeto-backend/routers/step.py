
from fastapi import APIRouter, Depends, HTTPException
from database import schemas
from sqlalchemy.orm import Session
from models import step_crud
from database.database import get_db

router = APIRouter(
    tags=['Steps']
)


## Etapas rotas

@router.get("/steps/{id}", response_model=schemas.Step)
def get_step(id: int, db: Session = Depends(get_db)):
    """Rota para buscar etapa pelo id"""
    return step_crud.get_step(id=id, db=db)

@router.post("/steps/", response_model=schemas.Step)
def create_step(step: schemas.StepCreate, db: Session = Depends(get_db)):
    """Rota para criar uma nova etapa"""
    return step_crud.create_step(db=db, step=step)

@router.put("/steps/", response_model=schemas.Step)
def update_step(step: schemas.Step , db: Session = Depends(get_db)):
    """Rota para alterar etapa pelo id"""
    return step_crud.update_step(step=step, db=db)

@router.delete("/steps/{id}")
def delete_step(id: int, db: Session = Depends(get_db)):
    """Rota para deletar etapa pelo id"""
    return step_crud.delete_step(id=id, db=db)


