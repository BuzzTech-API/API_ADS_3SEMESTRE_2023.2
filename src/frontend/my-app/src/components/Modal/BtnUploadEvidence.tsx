import { useDisclosure, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { ModalGeneric } from "./Modal";

export const ModalUploadEvidence = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = localStorage.getItem('access_token')


    const submit = async (e:any) => {

        const uploadInput = document.getElementById('uploadInput') as HTMLInputElement;
        e.preventDefault()
        console.log(uploadInput.files)

        if(uploadInput.files  && token){
            const file = uploadInput.files[0]
            
            const formData = new FormData()

            formData.append('file', file)
            
            const response = await fetch (
                'http://localhost:8000/uploadfile',{
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: formData,
            })

            const data = "teste"
            if(response.status === 200){
                const dataAtual = new Date()
                const year = dataAtual.getFullYear()
                const month = dataAtual.getMonth() + 1 // getMonth() retorna um valor de 0-11, então adicionamos 1 para obter um valor de 1-12
                const day = dataAtual.getDate()

                const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
            
                const jsonBody = {
                    link: data,
                    idRequestForEvidence: 2,
                    deliveryDate: formattedDate
                }

                console.log(jsonBody)
                console.log(JSON.stringify(jsonBody))

                await fetch(
                    'http://localhost:8000/evidences',{
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonBody)

                })
            }
            
        }
    }

    return(
        <>
            <Button bg='#53C4CD' onClick={onOpen} colorScheme="dark" variant='solid' color='dark'>Pedir evidência</Button>
            <ModalGeneric isOpen={isOpen} onClose={onClose}>
                <form onSubmit={submit}>

                        <FormLabel textAlign="center" fontSize="large" color='white'><strong>Solicitação de evidência</strong></FormLabel>
                        <FormLabel htmlFor="uploadInput" pt={3} color='white'>Documento requerido</FormLabel>
                        <Input id='uploadInput' type="file"/>
                        <FormLabel pt={3} color='white'>Descrição</FormLabel>
                        <Textarea bg='white' placeholder='Descreva a solicitação' />
                        
                        <Button type="submit" display="flex" mb={3} bg='#53C4CD' variant='solid' textColor='black' colorScheme="#58595B" width='100%'>Enviar</Button>
                </form>
            </ModalGeneric>
        </>
    )
        
    
}

