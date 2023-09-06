from sqlalchemy.orm import Session
from database import schemas, models

def get_user(db: Session, id: int):
    return db.query(models.Usuario).filter(models.Usuario.id==id).first()

def get_user_by_email(db: Session, email:str):
    return db.query(models.Usuario).filter(models.Usuario.email==email).first()

def get_all_user(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Usuario).offset(skip).limit(limit).all()

def create_user(db: Session, usuario: schemas.UsuarioCreate):
    db_usuario = models.Usuario(email=usuario.email, nome=usuario.nome, senha=usuario.senha, cargo=usuario.cargo, equipe=usuario.equipe, ativo=usuario.ativo)
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario

def update_user(db: Session, usuario: schemas.Usuario):
    db_usuario = models.Usuario(id=usuario.id, email=usuario.email, nome=usuario.nome, senha=usuario.senha, cargo=usuario.cargo, equipe=usuario.equipe, ativo=usuario.ativo)
    db.update(db_usuario)
    db.commit()
    db.refresh(db_usuario)

def update_user(db: Session, user: schemas.Usuario):
    db_user = db.query(models.Usuario).filter(models.Usuario.id == user.id).first()

    if db_user:
        db_user.email = user.email
        db_user.nome = user.nome
        db_user.senha = user.senha
        db_user.cargo = user.cargo
        db_user.equipe = user.equipe
        db_user.ativo = user.ativo

        db.commit()
        db.refresh(db_user)

    return db_user

def delete_user(db: Session, id: int):
    db_usuario = db.query(models.Usuario).filter(models.Usuario.id == id).first()

    if db_usuario:
        db.delete(db_usuario)
        db.commit()
    
    return db_usuario