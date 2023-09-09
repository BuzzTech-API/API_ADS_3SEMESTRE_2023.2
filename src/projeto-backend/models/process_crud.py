from typing import List
from sqlalchemy.orm import Session
from database import schemas
from database.database import Base
from sqlalchemy import Boolean, Column, Integer, String, Date
from sqlalchemy.orm import relationship, Mapped
from models.step_crud import Step
from models.process_user_crud import ProcessUser

class Process(Base):
    __tablename__ = 'process'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(60))
    endingDate = Column(Date)
    createDate = Column(Date)
    lastUpdate = Column(Date)
    is_active = Column(Boolean, default=True)
    priority = Column(String(60))
    status = Column(String(60))
    steps = relationship(Step)
    users: Mapped[List["ProcessUser"]] = relationship(back_populates="process")



def get_process(db: Session, id: int):
    return db.query(Process).filter(Process.id==id).first()


def get_all_process(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Process).offset(skip).limit(limit).all()

def create_process(db: Session, process: schemas.ProcessCreate):
    db_process = Process(title=process.title, endingDate=process.endingDate, createDate=process.createDate, lastUpdate=process.lastUpdate, is_active=process.is_active, priority=process.priority, status= process.status)
    db.add(db_process)
    db.commit()
    db.refresh(db_process)
    return db_process

def update_process(db: Session, process: schemas.Process):
    db_process = db.query(Process).filter(Process.id == process.id).first()

    if db_process:
        db_process.title = process.title
        db_process.endingDate = process.endingDate
        db_process.createDate = process.createDate
        db_process.lastUpdate = process.lastUpdate
        db_process.is_active = process.is_active
        db_process.priority = process.priority
        db_process.status = process.status

        db.commit()
        db.refresh(db_process)
    
    return db_process

def delete_process(db: Session, id: int):
    db_process = db.query(Process).filter(Process.id == id).first()

    if db_process:
        db.delete(db_process)
        db.commit()
    
    return db_process