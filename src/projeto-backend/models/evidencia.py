from datetime import date
from pydantic import BaseModel, PrivateAttr
from datetime import date

class EvidenciaModel(BaseModel):
    id: int
    link: str
    anexo: str
    idPedidoDeEvidencia: int
    dataEntregue: date

    def formatar(self):
        return Evidencia(id=self.id, link=self.link, anexo=self.anexo, idPedidoDeEvidencia=self.idPedidoDeEvidencia, dataEntregue=self.dataEntregue)


    


class Evidencia:
    def __init__(
        self,
        id: int,
        link: str,
        anexo: str,
        idPedidoDeEvidencia: int,
        dataEntregue: date
    ):
        self._id = id
        self._link = link
        self._anexo = anexo
        self._idPedidoDeEvidencia = idPedidoDeEvidencia
        self._dataEntregue = dataEntregue

    @property
    def id(self) -> int:
        return self._id

    @id.setter
    def id(self, value: int):
        self._id = value

    @property
    def link(self) -> str:
        return self._link

    @link.setter
    def link(self, value: str):
        self._link = value

    @property
    def anexo(self) -> str:
        return self._anexo

    @anexo.setter
    def anexo(self, value: str):
        self._anexo = value

    @property
    def idPedidoDeEvidencia(self) -> int:
        return self._idPedidoDeEvidencia

    @idPedidoDeEvidencia.setter
    def idPedidoDeEvidencia(self, value: int):
        self._idPedidoDeEvidencia = value

    @property
    def dataEntregue(self) -> date:
        return self._dataEntregue

    @dataEntregue.setter
    def dataEntregue(self, value: date):
        self._dataEntregue = value

    def formatarSaida(self):
        return EvidenciaModel(id=self._id, link=self._link, anexo=self._anexo, idPedidoDeEvidencia=self._idPedidoDeEvidencia, dataEntregue=self.dataEntregue)