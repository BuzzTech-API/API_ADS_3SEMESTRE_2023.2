from jose import JWTError, jwt

from datetime import datetime, timedelta
from typing import Annotated
from models import user_crud
from database.schemas import TokenData

SECRET_KEY = "3cc06b173410ba7fa1e5498f82c51f93c966f4805aa8797b3fd43c688f789375"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    """Realiza a criação do token de autenticação"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(token: str, credentials_exception, db):
    """Verifica se aquele token é verdadeiro"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = user_crud.get_user_by_email(db=db, email=token_data.email)
    if user is None:
        raise credentials_exception
    return user
