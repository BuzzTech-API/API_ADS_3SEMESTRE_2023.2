import { 
    Input,
    InputGroup,
    InputRightElement,
    Button, 
    Box,
    Card,
    FormControl,
    FormLabel,
    Center,
} from '@chakra-ui/react'
import {useState} from "react";

export const Login= () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleClick = () => setShow(!show)
    
    const submit = async (e:any) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=&username='+email+'&password='+senha+'&scope=&client_id=&client_secret='

        });
        const data = await response.json()
        localStorage.setItem('access_token',data.access_token)
        localStorage.setItem('refresh_token',data.refresh_token)
        
    }

    return <Card backgroundColor={'#292a2d'} margin={'10rem 25rem'} textColor={'white'}>
        <form onSubmit={submit}>

        <Box width={'20rem'} height={'30rem'} margin={'1rem auto'} padding={'1rem'}> 
            <FormControl margin={'1rem auto'}>
                <FormLabel textAlign={'center'}>Email</FormLabel>
                <Input 
                type='email' 
                onChange={e => setEmail(e.target.value)} 
                />
            </FormControl>
            <FormControl margin={'1rem auto'}>
                <FormLabel textAlign={'center'}>Senha</FormLabel>
                <InputGroup size='md'>
                    <Input
                    pr='8.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    onChange={e => setSenha(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button textColor={'white'} backgroundColor={'#4fb3bb'} h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Center>
                <Button type='submit' textColor={'white'} backgroundColor={'#4fb3bb'}>Logar</Button>
            </Center>
        </Box>
        </form>
    </Card>
}