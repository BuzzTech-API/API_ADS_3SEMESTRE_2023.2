from fastapi import APIRouter, Depends, HTTPException
from database import schemas
from sqlalchemy.orm import Session
from models import process_user_crud
from database.database import get_db
from typing import Optional

router = APIRouter(
    tags=['Processes_Users']
)



## Processo Usuario rotas


@router.get("/users_processes/{user_id}/{process_id}", response_model=Optional[schemas.ProcessUser])
def get_process_user(user_id, process_id,db: Session = Depends(get_db)):
    """Rota para buscar uma relação Usuario-Processo"""
    process_user = process_user_crud.get_process_user_by_user_and_process_id(user_id=user_id, process_id=process_id, db=db)
    if not process_user:
        raise HTTPException(status_code=404, detail="Relação de Processo e usuário não encontrada ")
    return process_user


@router.post("/users_processes/", response_model=schemas.ProcessUserCreate)
def create_process_user(process_user: schemas.ProcessUserCreate, db: Session = Depends(get_db)):
    """Rota para criar uma relação Usuario-Processo"""
    return process_user_crud.create_process_user(db=db, process_user=process_user)


@router.delete("/users_processes/{id}")
def delete_process_user(id: int, db: Session = Depends(get_db)):
    """Rota para deletar uma relação Usuario-Processo"""
    return process_user_crud.delete_process_user(id=id, db=db)


