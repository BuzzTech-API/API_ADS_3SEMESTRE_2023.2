from .database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship


class Usuario(Base):
    __tablename__ = 'usuario'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nome = Column(String(60))
    email = Column(String(64), unique=True, index=True)
    senha = Column(String(64))
    cargo = Column(String(60))
    equipe = Column(String(60))
    ativo = Column(Boolean, default=True)


class Processo(Base):
    __tablename__ = 'processo'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    titulo = Column(String(60))
    previsaoTermino = Column(Date)
    dataCriação = Column(Date)
    ultimaAtualizacao = Column(Date)
    ativo = Column(Boolean, default=True)
    prioridade = Column(String(60))
    status = Column(String(60))


class ProcessoUsuario(Base):
    __tablename__ = 'processo_usuario'

    usuario_id = Column(Integer, ForeignKey("usuario.id"), primary_key=True, index=True)
    processo_id = Column(Integer, ForeignKey("processo.id"), primary_key=True, index=True)

    
class Etapa(Base):
    __tablename__ = 'etapa'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nome = Column(String(60))
    dataTermino = Column(Date)
    processo_id = Column(Integer, ForeignKey("processo.id"))
    prioridade = Column(String(60))
    ordem = Column(Integer)
    ativo = Column(Boolean, default=True)


class UsuarioEtapa(Base):
    __tablename__ = 'usuario_etapa'

    usuario_id = Column(Integer, ForeignKey("usuario.id"), primary_key=True, index=True)
    etapa_id = Column(Integer, ForeignKey("etapa.id"), primary_key=True, index=True)



class PedidoDeEvidencia(Base):
    __tablename__ = 'pedido_de_evidencia'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    documetoRequirido = Column(String(60))
    descricao = Column(String(60))
    etapa_id = Column(Integer, ForeignKey("etapa.id"))
    usuario_id = Column(Integer, ForeignKey("usuario.id"))
    dataValidacaoEntrega = Column(Date)
    validado = Column(Boolean)
    ativo = Column(Boolean, default=True)


class Evidencia(Base):
    __tablename__ = 'evidencia'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    link = Column(String(60))
    anexo = Column(String(60))
    idPedidoDeEvidencia = Column(Integer, ForeignKey("pedido_de_evidencia.id"))
    dataEntregue = Column(Date)
