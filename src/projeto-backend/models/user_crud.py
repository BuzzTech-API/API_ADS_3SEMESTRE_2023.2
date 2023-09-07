from sqlalchemy.orm import Session
from database import schemas, models

def get_user(db: Session, id: int):
    return db.query(models.User).filter(models.User.id==id).first()

def get_user_by_email(db: Session, email:str):
    return db.query(models.User).filter(models.User.email==email).first()

def get_all_user(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(email=user.email, name=user.name, password=user.password, role=user.role, team=user.team, is_active=user.is_active)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, user: schemas.User):
    db_user = models.User(id=user.id, email=user.email, name=user.name, password=user.password, role=user.role, team=user.team, is_active=user.is_active)
    db.update(db_user)
    db.commit()
    db.refresh(db_user)

def update_user(db: Session, user: schemas.User):
    db_user = db.query(models.User).filter(models.User.id == user.id).first()

    if db_user:
        db_user.email = user.email
        db_user.name = user.name
        db_user.password = user.password
        db_user.cargo = user.cargo
        db_user.team = user.team
        db_user.is_active = user.is_active

        db.commit()
        db.refresh(db_user)

    return db_user

def delete_user(db: Session, id: int):
    db_user = db.query(models.User).filter(models.User.id == id).first()

    if db_user:
        db.delete(db_user)
        db.commit()
    
    return db_user