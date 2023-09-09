from sqlalchemy.orm import Session
from database import schemas
from database.database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, mapped_column, Mapped




class ProcessUser(Base):
    __tablename__ = "process_user"
    user_id: Mapped[int] = mapped_column(
        ForeignKey("user.id"), primary_key=True
        )
    process_id: Mapped[int] = mapped_column(
        ForeignKey("process.id"), primary_key=True
    )
    user: Mapped["User"] = relationship(back_populates="processes")
    process: Mapped["Process"] = relationship(back_populates="users")


def get_process_user_by_user_and_process_id(db: Session, user_id: int, process_id: int):
    return db.query(ProcessUser).filter(ProcessUser.user_id==user_id and ProcessUser.process_id == process_id).first()

def get_process_user_by_user_id_all(db: Session, user_id: int):
    return db.query(ProcessUser).filter(ProcessUser.user_id==user_id).all()

def get_process_user_by_process_id_all(db: Session, process_id: int):
    return db.query(ProcessUser).filter(ProcessUser.process_id==process_id).all()


def get_all_process_user(db: Session, skip: int = 0, limit: int = 100):
    return db.query(ProcessUser).offset(skip).limit(limit).all()

def create_process_user(db: Session, process_user: schemas.ProcessUserCreate):
    db_process_user = ProcessUser(user_id=process_user.user_id, process_id=process_user.process_id)
    db.add(db_process_user)
    db.commit()
    db.refresh(db_process_user)
    return db_process_user


def delete_process_user(db: Session, user_id: int, process_id: int):
    db_process_user = db.query(ProcessUser).filter(ProcessUser.user_id == user_id and ProcessUser.process_id == process_id).first()

    if db_process_user:
        db.delete(db_process_user)
        db.commit()
    
    return db_process_user