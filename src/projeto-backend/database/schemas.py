from pydantic import BaseModel
from typing import List, Optional
from datetime import date

class UsuarioBase(BaseModel):
    nome: str
    email: str
    senha: str
    cargo: str
    equipe: str
    ativo: bool

class UsuarioCreate(UsuarioBase):
    pass

class Usuario(UsuarioBase):
    id: int

    class Config:
        orm_mode = True

class ProcessoBase(BaseModel):
    titulo: str
    previsaoTermino: date
    dataCriação: date
    ultimaAtualizacao: date
    ativo: bool
    prioridade: str
    status: str

class ProcessoCreate(ProcessoBase):
    pass

class Processo(ProcessoBase):
    id: int
    usuarios: List[Usuario] = []
    etapas: List["Etapa"] = []

    class Config:
        orm_mode = True

class EtapaBase(BaseModel):
    nome: str
    dataTermino: date
    processo_id: int
    prioridade: str
    ordem: int
    ativo: bool

class EtapaCreate(EtapaBase):
    pass

class Etapa(EtapaBase):
    id: int
    processo: Processo
    usuarios: List[Usuario] = []

    class Config:
        orm_mode = True

class PedidoDeEvidenciaBase(BaseModel):
    documetoRequirido: str
    descricao: str
    etapa_id: int
    usuario_id: int
    dataValidacaoEntrega: date
    validado: bool
    ativo: bool

class PedidoDeEvidenciaCreate(PedidoDeEvidenciaBase):
    pass

class PedidoDeEvidencia(PedidoDeEvidenciaBase):
    id: int
    etapa: Etapa
    usuario: Usuario
    evidencias: List["Evidencia"] = []

    class Config:
        orm_mode = True

class EvidenciaBase(BaseModel):
    link: str
    anexo: str
    idPedidoDeEvidencia: int
    dataEntregue: date

class EvidenciaCreate(EvidenciaBase):
    pass

class Evidencia(EvidenciaBase):
    id: int
    pedido: PedidoDeEvidencia

    class Config:
        orm_mode = True
