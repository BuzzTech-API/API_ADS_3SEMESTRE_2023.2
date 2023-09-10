
from fastapi import APIRouter, Depends, HTTPException
from database import schemas
from sqlalchemy.orm import Session
from models import evidence_crud
from database.database import get_db

router = APIRouter(
    tags=['Evidences']

)




## Evidencias rotas

@router.get("/evidences/{id}", response_model=schemas.Evidence)
def get_evidence(id: int, db: Session = Depends(get_db)):
    """Rota para buscar uma evidencia pelo id"""
    return evidence_crud.get_evidence(id=id, db=db)

@router.post("/evidences/", response_model=schemas.Evidence)
def create_evidence(evidence: schemas.EvidenceCreate, db: Session = Depends(get_db)):
    """Rota para criar uma nova evidencia"""
    return evidence_crud.create_evidence(db=db, evidence=evidence)

@router.put("/evidences/", response_model=schemas.Evidence)
def update_evidence(evidence: schemas.Evidence , db: Session = Depends(get_db)):
    """Rota para alterar uma evidencia pelo id"""
    return evidence_crud.update_evidence(evidence=evidence, db=db)

@router.delete("/evidences/{id}")
def delete_evidence(id: int, db: Session = Depends(get_db)):
    """Rota para deletar uma evidencia pelo id"""
    return evidence_crud.delete_evidence(id=id, db=db)

