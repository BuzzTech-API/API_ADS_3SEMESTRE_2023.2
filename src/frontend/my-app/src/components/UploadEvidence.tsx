import { FormLabel, Input, Button } from "@chakra-ui/react";

export const ModalUploadEvidence = () =>{
    const token = localStorage.getItem('access_token')


    const submit = async (e:any) => {
        try{
            const uploadInput = document.getElementById('uploadInput') as HTMLInputElement //pega o arquivo enviado atraves de <input...>
            e.preventDefault()

            if(uploadInput.files  && token){ //verifica se o usuario está autenticado e se o arquivo existe

                const file = uploadInput.files[0] // Pega o primeiro arquivo do input de upload
                const formData = new FormData()
                formData.append('file', file) // Anexa o arquivo ao objeto formData com a chave 'file'
                
                const response = await fetch (
                    'http://localhost:8000/uploadfile',{
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                    },
                    body: formData,
                }) // manda o arquivo para /uploadfile e retorna o link onde o arquivo foi guardado

                const data = formData //link
                if(response.status === 200){ //verifica se a resposta deu 200(OK)

                    // função para pegar a data atual e formatar para "ano/mes/dia"
                    const today = new Date()
                    const year = today.getFullYear()
                    const month = today.getMonth() + 1 // getMonth() retorna um valor de 0-11 por isso o +1
                    const day = today.getDate()
                    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
                    
                    // corpo do json que sera mandado para /evidences
                    const jsonBody = {
                        link: data,
                        idRequestForEvidence: "aqui vai o id de requisição de evidencia",
                        deliveryDate: formattedDate
                    }

                    await fetch(
                        'http://localhost:8000/evidences',{
                        method: 'POST',
                        headers:{
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${token}`, 
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jsonBody) // transforma o corpo do json para json
                    })



                }  
            }
        }
        catch (error) {
            console.error("Erro: ", error); //bloco para tratar caso algum erro ocorra
        }
    }

    return(
        <>
            <form onSubmit={submit}>
                    <FormLabel textAlign="center" fontSize="large" color='white'><strong>Solicitação de evidência</strong></FormLabel>
                    <FormLabel htmlFor="uploadInput" pt={3} color='white'>Documento requerido</FormLabel>
                    <Input id='uploadInput' type="file"/>
                    <Button type="submit" display="flex" mb={3} bg='#53C4CD' variant='solid' textColor='black' colorScheme="#58595B" width='100%'>Enviar</Button>
            </form>
        </>
    )
        

}

