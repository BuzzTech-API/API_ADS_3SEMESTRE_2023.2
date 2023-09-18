import json
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from database import schemas
from sqlalchemy.orm import Session
from models import evidence_crud, oauth2, gcs, send_mail
from database.database import get_db
from typing import Annotated, Optional

# mail
from typing import List

from fastapi import BackgroundTasks, FastAPI
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import BaseModel, EmailStr
from starlette.responses import JSONResponse


router = APIRouter(tags=["Evidences"])


## Evidencias rotas


@router.get("/evidences/{id}", response_model=Optional[schemas.Evidence])
def get_evidence(
    current_user: Annotated[schemas.User, Depends(oauth2.get_current_user)],
    id: int,
    db: Session = Depends(get_db),
):
    """Rota para buscar uma evidencia pelo id"""
    return evidence_crud.get_evidence(id=id, db=db)


@router.get("/evidences/", response_model=Optional[list[schemas.Evidence]])
def get_all_evidence(
    current_user: Annotated[schemas.User, Depends(oauth2.get_current_user)],
    db: Session = Depends(get_db),
):
    """Rota para buscar todas evidencia"""
    return evidence_crud.get_all_evidence( db=db)


@router.post("/evidences/", response_model=Optional[schemas.Evidence])
def create_evidence(
    current_user: Annotated[schemas.User, Depends(oauth2.get_current_user)],
    evidence: schemas.EvidenceCreate,
    db: Session = Depends(get_db),
):

    """Rota para criar uma nova evidencia"""
    return evidence_crud.create_evidence(db=db, evidence=evidence)


@router.put("/evidences/", response_model=Optional[schemas.Evidence])
def update_evidence(
    current_user: Annotated[schemas.User, Depends(oauth2.get_current_user)],
    evidence: schemas.Evidence,
    db: Session = Depends(get_db),
):
    """Rota para alterar uma evidencia pelo id"""
    return evidence_crud.update_evidence(evidence=evidence, db=db)


@router.delete("/evidences/{id}")
def delete_evidence(
    current_user: Annotated[schemas.User, Depends(oauth2.get_current_user)],
    id: int,
    db: Session = Depends(get_db),
):
    """Rota para deletar uma evidencia pelo id"""
    return evidence_crud.delete_evidence(id=id, db=db)

@router.post("/uploadfile/{emails}")
async def create_upload_file(
    current_user: Annotated[schemas.User, Depends(oauth2.get_current_user)],
    emails: str,
    file: UploadFile = File(...)
):
    """Rota para fazer upload de algum arquivo"""
    link = await gcs.GCStorage().upload_file(file) #chama a função que o upload do arquivo para a nuvem


    # mail
    html = """
    <h5>Thanks for using Fastapi-mail</h5>
    <br>
    <
    """ 
    #users_dict = [json.loads(user) for user in users]
    #emails = [user['email'] for user in users_dict]
    #print(emails)
    #message = MessageSchema(
    #subject="Fastapi-Mail module",
    #recipients="",
    #attachments=[file],
    #body=html,
    #subtype=MessageType.html)

    #fm = FastMail()
    #await fm.send_message(message)
   # return JSONResponse(status_code=200, content={"message": "email has been sent"})
    return link
