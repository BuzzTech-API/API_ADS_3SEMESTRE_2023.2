from .database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, Table
from sqlalchemy.orm import relationship



class Evidence(Base):
    __tablename__ = 'evidence'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    link = Column(String(60))
    attachment = Column(String(60))
    idRequestForEvidence = Column(Integer, ForeignKey("request_for_evidence.id"))
    deliveryDate = Column(Date)


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


process_user = Table(
    "process_user",
    Base.metadata,
    Column("user_id", ForeignKey("user.id")),
    Column("process_id", ForeignKey("process.id")),
)

user_step = Table(
    "user_step",
    Base.metadata,
    Column("user_id", ForeignKey("user.id")),
    Column("step_id", ForeignKey("step.id")),
)



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





class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(60))
    email = Column(String(64), unique=True, index=True)
    password = Column(String(64))
    role = Column(String(60))
    team = Column(String(60))
    is_active = Column(Boolean, default=True)
    processes = relationship(Process, secondary=process_user)
    steps = relationship(Step, secondary=user_step)

