from sqlalchemy.orm import Session
from database import schemas
from database.database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, Table
from sqlalchemy.orm import relationship, mapped_column, Mapped
from models.evidence_crud import Evidence

class RequestForEvidence(Base):
    __tablename__ = 'request_for_evidence'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    requiredDocument = Column(String(60))
    description = Column(String(60))
    step_id = Column(Integer, ForeignKey("step.id"))
    user_id = Column(Integer, ForeignKey("user.id"))
    evidenceValidationDate = Column(Date)
    is_validated = Column(Boolean)
    is_actived = Column(Boolean, default=True)
    evidences = relationship(Evidence)


def get_request_for_evidence(db: Session, id: int):
    return db.query(RequestForEvidence).filter(RequestForEvidence.id==id).first()


def get_all_request_for_evidence(db: Session, skip: int = 0, limit: int = 100):
    return db.query(RequestForEvidence).offset(skip).limit(limit).all()

def create_request_for_evidence(db: Session, request_for_evidence: schemas.RequestForEvidenceCreate):
    db_request_for_evidence = RequestForEvidence(requiredDocument=request_for_evidence.requiredDocument, description=request_for_evidence.description, step_id=request_for_evidence.step_id, user_id=request_for_evidence.user_id, evidenceValidationDate=request_for_evidence.evidenceValidationDate, is_validated=request_for_evidence.is_validated, is_actived=request_for_evidence.is_actived)
    db.add(db_request_for_evidence)
    db.commit()
    db.refresh(db_request_for_evidence)
    return db_request_for_evidence


def update_request_for_evidence(db: Session, request_for_evidence: schemas.RequestForEvidence):
    db_request_for_evidence = db.query(RequestForEvidence).filter(RequestForEvidence.id == request_for_evidence.id).first()

    if db_request_for_evidence:
        db_request_for_evidence.requiredDocument=request_for_evidence.requiredDocument
        db_request_for_evidence.description=request_for_evidence.description
        db_request_for_evidence.step_id=request_for_evidence.step_id
        db_request_for_evidence.user_id=request_for_evidence.user_id
        db_request_for_evidence.evidenceValidationDate=request_for_evidence.evidenceValidationDate
        db_request_for_evidence.is_validated=request_for_evidence.is_validated
        db_request_for_evidence.is_actived=request_for_evidence.is_actived

        db.commit()
        db.refresh(db_request_for_evidence)
    
    return db_request_for_evidence

def delete_request_for_evidence(db: Session, id: int):
    db_request_for_evidence = db.query(RequestForEvidence).filter(RequestForEvidence.id == id).first()

    if db_request_for_evidence:
        db.delete(db_request_for_evidence)
        db.commit()
    
    return db_request_for_evidence