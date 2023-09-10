from fastapi import APIRouter, Depends, HTTPException
from database import schemas
from sqlalchemy.orm import Session
from models import process_crud
from database.database import get_db

router = APIRouter(
    tags=['Processes']
    
)



## Processos rotas

@router.get("/processes/{id}", response_model=schemas.Process)
def get_process(id: int, db: Session = Depends(get_db)):
    """Rota para buscar processo pelo id"""
    return process_crud.get_process(id=id, db=db)

@router.post("/processes/", response_model=schemas.Process)
def create_process(process: schemas.ProcessCreate, db: Session = Depends(get_db)):
    """Rota para criar um novo processo"""
    return process_crud.create_process(db=db, process=process)

@router.put("/processes/", response_model=schemas.Process)
def update_process(process: schemas.ProcessUpdate , db: Session = Depends(get_db)):
    """Rota para alterar processo pelo id"""
    return process_crud.update_process(process=process, db=db)

@router.delete("/processes/{id}")
def delete_process(id: int, db: Session = Depends(get_db)):
    """Rota para deletar processo pelo id"""
    return process_crud.delete_process(id=id, db=db)