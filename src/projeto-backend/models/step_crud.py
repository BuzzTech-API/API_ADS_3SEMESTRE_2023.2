from sqlalchemy.orm import Session
from database import schemas
from database.database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, Table
from sqlalchemy.orm import relationship, mapped_column, Mapped
from models.request_for_evidence_crud import RequestForEvidence 
from models.user_step_crud import UserStep
from typing import List
class Step(Base):
    __tablename__ = 'step'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(60))
    endDate = Column(Date)
    process_id = Column(Integer, ForeignKey("process.id"))
    priority = Column(String(60))
    order = Column(Integer)
    is_active = Column(Boolean, default=True)
    requests = relationship(RequestForEvidence)
    users: Mapped[List["UserStep"]] = relationship(back_populates="step")


def get_step(db: Session, id: int):
    return db.query(Step).filter(Step.id==id).first()


def get_all_step(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Step).offset(skip).limit(limit).all()

def create_step(db: Session, step: schemas.StepCreate):
    db_step = Step(name=step.name, endDate=step.endDate, process_id=step.process_id, priority=step.priority, order=step.order, is_active=step.is_active)
    db.add(db_step)
    db.commit()
    db.refresh(db_step)
    return db_step


def update_step(db: Session, step: schemas.Step):
    db_step = db.query(Step).filter(Step.id == step.id).first()

    if db_step:
        db_step.name=step.name
        db_step.endDate=step.endDate
        db_step.process_id=step.process_id
        db_step.priority=step.priority
        db_step.order=step.order
        db_step.is_active=step.is_active

        db.commit()
        db.refresh(db_step)
    
    return db_step

def delete_step(db: Session, id: int):
    db_step = db.query(Step).filter(Step.id == id).first()

    if db_step:
        db.delete(db_step)
        db.commit()
    
    return db_step