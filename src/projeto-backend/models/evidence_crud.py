from sqlalchemy.orm import Session
from database import schemas
from database.database import Base
from sqlalchemy import  Column, ForeignKey, Integer, String, Date


class Evidence(Base):
    __tablename__ = 'evidence'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    link = Column(String(60))
    attachment = Column(String(60))
    idRequestForEvidence = Column(Integer, ForeignKey("request_for_evidence.id"))
    deliveryDate = Column(Date)



def get_evidence(db: Session, id: int):
    return db.query(Evidence).filter(Evidence.id==id).first()


def get_all_evidence(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Evidence).offset(skip).limit(limit).all()

def create_evidence(db: Session, evidence: schemas.EvidenceCreate):
    db_evidence = Evidence(link=evidence.link, attachment=evidence.attachment, idRequestForEvidence=evidence.idRequestForEvidence, deliveryDate=evidence.deliveryDate)
    db.add(db_evidence)
    db.commit()
    db.refresh(db_evidence)
    return db_evidence


def update_evidence(db: Session, evidence: schemas.Evidence):
    db_evidence = db.query(Evidence).filter(Evidence.id == evidence.id).first()

    if db_evidence:
        db_evidence.link=evidence.link
        db_evidence.attachment=evidence.attachment
        db_evidence.idRequestForEvidence=evidence.idRequestForEvidence
        db_evidence.deliveryDate=evidence.deliveryDate

        db.commit()
        db.refresh(db_evidence)
    
    return db_evidence

def delete_evidence(db: Session, id: int):
    db_evidence = db.query(Evidence).filter(Evidence.id == id).first()

    if db_evidence:
        db.delete(db_evidence)
        db.commit()
    
    return db_evidence