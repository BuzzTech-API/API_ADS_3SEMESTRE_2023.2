from sqlalchemy.orm import Session
from database import schemas
from database.database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, mapped_column, Mapped




class UserStep(Base):
    __tablename__ = "user_step"
    user_id: Mapped[int] = mapped_column(
        ForeignKey("user.id"), primary_key=True
        )
    step_id: Mapped[int] = mapped_column(
        ForeignKey("step.id"), primary_key=True
    )
    user: Mapped["User"] = relationship(back_populates="steps")
    step: Mapped["Step"] = relationship(back_populates="users")


def get_user_step_by_user_and_step_id(db: Session, user_id: int, step_id: int):
    return db.query(UserStep).filter(UserStep.user_id==user_id and UserStep.step_id == step_id).first()

def get_user_step_by_user_id_all(db: Session, user_id: int):
    return db.query(UserStep).filter(UserStep.user_id==user_id).all()

def get_user_step_by_step_id_all(db: Session, step_id: int):
    return db.query(UserStep).filter(UserStep.step_id==step_id).all()


def get_all_user_step(db: Session, skip: int = 0, limit: int = 100):
    return db.query(UserStep).offset(skip).limit(limit).all()

def create_user_step(db: Session, user_step: schemas.UserStepCreate):
    db_user_step = UserStep(user_id=user_step.user_id, step_id=user_step.step_id)
    db.add(db_user_step)
    db.commit()
    db.refresh(db_user_step)
    return db_user_step


def delete_user_step(db: Session, user_id: int, step_id: int):
    db_user_step = db.query(UserStep).filter(UserStep.user_id == user_id and UserStep.step_id == step_id).first()

    if db_user_step:
        db.delete(db_user_step)
        db.commit()
    
    return db_user_step