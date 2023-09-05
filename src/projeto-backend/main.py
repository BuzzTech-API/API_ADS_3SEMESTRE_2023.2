from database import schemas
from models import evidencia
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.database import SessionLocal, engine


schemas.Base.metadata.create_all(bind=engine)

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

@app.post("/evidencia")
def criar_evidencia(evidencia: evidencia.EvidenciaModel):
    print (evidencia)
    return 
    