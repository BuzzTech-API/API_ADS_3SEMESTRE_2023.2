from database import models, schemas
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database.database import SessionLocal, engine
from models import user_crud


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/")
def hello():
    return {"Hello": "World"}

@app.get("/users/{id}", response_model=schemas.Usuario)
def get_user(id: int, db: Session = Depends(get_db)):
    return user_crud.get_user(id=id, db=db)

@app.post("/users/", response_model=schemas.Usuario)
def criar_usuario(usuario: schemas.UsuarioCreate, db: Session = Depends(get_db)):
    db_usuario = user_crud.buscar_usuario_por_email(db, email=usuario.email)
    if db_usuario:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_crud.criar_usuario(db=db, usuario=usuario)

@app.put("/users/", response_model=schemas.Usuario)
def update_usuario(user: schemas.Usuario , db: Session = Depends(get_db)):
    return user_crud.update_user(user=user, db=db)

@app.delete("/users/{id}")
def delete_user(id: int, db: Session = Depends(get_db)):
    return user_crud.delete_user(id=id, db=db)