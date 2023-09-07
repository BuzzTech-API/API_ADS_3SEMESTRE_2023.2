from sqlalchemy.orm import Session
from database import schemas, models


def get_process(db: Session, id: int):
    return db.query(models.Process).filter(models.Process.id==id).first()


def get_all_process(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Process).offset(skip).limit(limit).all()

def create_process(db: Session, process: schemas.ProcessCreate):
    db_process = models.Process(title=process.title, endingDate=process.endingDate, createDate=process.createDate, lastUpdate=process.lastUpdate, is_active=process.is_active, priority=process.priority, status= process.status)
    db.add(db_process)
    db.commit()
    db.refresh(db_process)
    return db_process

def update_process(db: Session, process: schemas.Process):
    db_process = db.query(models.Process).filter(models.Process.id == process.id).first()

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
    db_process = db.query(models.Process).filter(models.Process.id == id).first()

    if db_process:
        db.delete(db_process)
        db.commit()
    
    return db_process