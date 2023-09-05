from .database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship


class Usuario(Base):
    __tablename__ = 'usuario'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nome = Column(String(60))
    email = Column(String(60), unique=True, index=True)
    senha = Column(String(60))
    cargo = Column(String(60))
    equipe = Column(String(60))
    ativo = Column(Boolean, default=True)

    processos = relationship("ProcessoUsuario", back_populates="usuario")

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

    usuarios = relationship("ProcessoUsuario", back_populates="processo")
    etapas = relationship("Etapa", back_populates="processo")

class ProcessoUsuario(Base):
    __tablename__ = 'processo_usuario'

    usuario_id = Column(Integer, ForeignKey("usuario.id"), primary_key=True, index=True)
    processo_id = Column(Integer, ForeignKey("processo.id"), primary_key=True, index=True)

    usuario = relationship("Usuario", back_populates="processos")
    processo = relationship("Processo", back_populates="usuarios")

class Etapa(Base):
    __tablename__ = 'etapa'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nome = Column(String(60))
    dataTermino = Column(Date)
    processo_id = Column(Integer, ForeignKey("processo.id"))
    prioridade = Column(String(60))
    ordem = Column(Integer)
    ativo = Column(Boolean, default=True)

    processo = relationship("Processo", back_populates="etapas")
    usuarios = relationship("UsuarioEtapa", back_populates="etapa")

class UsuarioEtapa(Base):
    __tablename__ = 'usuario_etapa'

    usuario_id = Column(Integer, ForeignKey("usuario.id"), primary_key=True, index=True)
    etapa_id = Column(Integer, ForeignKey("etapa.id"), primary_key=True, index=True)

    usuario = relationship("Usuario", back_populates="etapas")
    etapa = relationship("Etapa", back_populates="usuarios")

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

    etapa = relationship("Etapa", back_populates="pedidos")
    usuario = relationship("Usuario", back_populates="pedidos")
    evidencias = relationship("Evidencia", back_populates="pedido")

class Evidencia(Base):
    __tablename__ = 'evidencia'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    link = Column(String(60))
    anexo = Column(String(60))
    idPedidoDeEvidencia = Column(Integer, ForeignKey("pedido_de_evidencia.id"))
    dataEntregue = Column(Date)

    pedido = relationship("PedidoDeEvidencia", back_populates="evidencias")