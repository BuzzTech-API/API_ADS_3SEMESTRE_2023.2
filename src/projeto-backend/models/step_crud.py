from sqlalchemy.orm import Session
from database import schemas, models

def get_step(db: Session, id: int):
    return db.query(models.Step).filter(models.Step.id==id).first()


def get_all_step(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Step).offset(skip).limit(limit).all()

def create_step(db: Session, step: schemas.StepCreate):
    db_step = models.Step(name=step.name, endDate=step.endDate, process_id=step.process_id, priority=step.priority, order=step.order, is_active=step.is_active)
    db.add(db_step)
    db.commit()
    db.refresh(db_step)
    return db_step


def update_step(db: Session, step: schemas.Step):
    db_step = db.query(models.Step).filter(models.Step.id == step.id).first()

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
    db_step = db.query(models.Step).filter(models.Step.id == id).first()

    if db_step:
        db.delete(db_step)
        db.commit()
    
    return db_step