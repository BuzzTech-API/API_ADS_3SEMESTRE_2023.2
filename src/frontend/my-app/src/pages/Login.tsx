import { 
    Input,
    InputGroup,
    InputRightElement,
    Button, 
    Box,
    Card,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center
    
} from '@chakra-ui/react'
import {useEffect, useState} from "react";

export const Login= () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleClick = () => setShow(!show)
    
    const submit = async (e:any) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('grant_type', '');
        formData.append('username', email);
        formData.append('password', senha);
        formData.append('scope', '');
        formData.append('client_id', '');
        formData.append('client_secret', '');

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=&username='+email+'&password='+senha+'&scope=&client_id=&client_secret='

        });
        console.log(response.json());
    }

    return <Card border={'1px'} margin={'10vh 25vw'} >
        <form onSubmit={submit}>

        <Box width={'40%'} height={'50vh'} margin={'1vh auto'} > 
            <FormControl margin={'1vh auto'}>
                <FormLabel textAlign={'center'}>Email</FormLabel>
                <Input 
                type='email' 
                onChange={e => setEmail(e.target.value)} 
                />
            </FormControl>
            <FormControl margin={'1vh auto'}>
                <FormLabel textAlign={'center'}>Senha</FormLabel>
                <InputGroup size='md'>
                    <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    onChange={e => setSenha(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Center>
            <Button type='submit'>Logar</Button>

            </Center>
        </Box>
        </form>
    </Card>
}