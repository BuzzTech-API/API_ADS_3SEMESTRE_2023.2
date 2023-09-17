import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { Box,
         Button,
         FormControl,
         FormLabel,
         Input,
         Card, 
         CardHeader, 
         CardBody, 
         Heading,
         Modal,
         ModalOverlay,
         ModalContent,
         ModalHeader,
         ModalBody,
         ModalCloseButton,
         Select,
         Flex} from '@chakra-ui/react';


interface FormData {
  title: string;
  description: string;
  objective: string;
  deadline: string;
  priority: string;
  responsible: string;
}

const FormP: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    objective: '',
    deadline: '',
    priority: '',
    responsible: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [title]: value,
    }));
  };

  const handleChangePrioridade = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setPrioridade("");
    console.log(e.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aqui vou adicionar o controle dos dados. A rota talvez ?
  };
  
  const [isOpen, setIsOpen] = React.useState(false);
  
  const onClose = () => setIsOpen(false);
  
  const onOpen = () => setIsOpen(true);

  const [prazo, setDeadline] = useState<null | Date>(null);

  const [priority, setPrioridade] = useState("Alta");

  return (
    <Modal size="xxl" isOpen={true} onClose={onClose}>
        
      <ModalOverlay/>
        
        <ModalContent style={{ width: "1000px", height: "auto" }}>
          <Card bg="#58595B">
              <Box>
                <ModalHeader textAlign="center">
                  <CardHeader>
                    <Heading fontSize="30px" fontWeight="bold" color="#53C4CD" size='md'>
                      Novo Processo
                    </Heading>
                  </CardHeader>
                </ModalHeader>
              </Box>
            <ModalCloseButton style={{ width: "40px", height: "40px" }} rounded="100%" bg="#53C4CD" color="#ffffff" mt={7} mr={5}></ModalCloseButton>

            <ModalBody>
              <CardBody>
                <Box maxW="70%" mx="auto" p={1}>
                  <form onSubmit={handleSubmit}>
                    <FormControl id="title" mb={3}>
                      <FormLabel color="#ffffff" fontSize="20px" mb={1} ml={5}>Título</FormLabel>
                        <Input
                          rounded="100px" 
                          bg="#D9D9D9"
                          type="text"
                          title="title"
                          value={formData.title}
                          onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl id="description" mb={3}>
                      <FormLabel color="#ffffff" fontSize="20px" mb={1} ml={5}>Descrição</FormLabel>
                        <Input style={{ height: "100px" }}
                          overflowY="auto"
                          rounded="20px" 
                          bg="#D9D9D9"
                          type="text"
                          title="description"
                          value={formData.description}
                          onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl id="objective" mb={3}>
                      <FormLabel color="#ffffff" fontSize="20px" mb={1} ml={5}>Objetivo</FormLabel>
                        <Input
                          rounded="100px" 
                          bg="#D9D9D9"
                          type="text"
                          title="objective"
                          value={formData.objective}
                          onChange={handleChange}
                        />
                    </FormControl>
                    <Box textAlign="center">
                      <FormControl id="deadline" mb={3}>
                        <FormLabel color="#ffffff" fontSize="20px" mb={1} ml={210}>Prazo</FormLabel>
                          <DatePicker 
                            showIcon
                            selected={prazo}                          
                            dateFormat="dd/MM/yyyy" //
                            placeholderText="Selecione um Prazo"
                            title="deadline"
                            value={formData.deadline}
                            onChange={(date) => setDeadline(date ? date : null)}
                          />
                      </FormControl>
                      <Flex justifyContent="center" alignItems="center">
                        <FormControl id="priority" mb={5}>
                          <FormLabel color="#ffffff" fontSize="20px" mb={1} ml={210}>Prioridade</FormLabel>
                            <Select  style={{ width: "37%", height: "40px" }} rounded="100px" color="#000000" bg="#D9D9D9"
                            value={formData.priority}
                            onChange={handleChangePrioridade}>
                              <option value="Alta">Alta</option>
                              <option value="Média">Média</option>
                              <option value="Baixa">Baixa</option>
                            </Select>
                        </FormControl>
                      </Flex>
                      <FormControl id="responsible" mb={3}>
                        <FormLabel color="#ffffff" fontSize="20px" mb={1} ml={5}>Responsável</FormLabel>
                          <Input
                            rounded="100px" 
                            bg="#D9D9D9"
                            type="text"
                            title="responsible"
                            value={formData.responsible}
                            onChange={handleChange}
                          />
                      </FormControl>
                      <Button id="CreateButton" 
                        style={{ width: "90px", height: "35px" }}
                        fontWeight="bold"
                        rounded="100px" 
                        bg="#53C4CD" 
                        color="#ffffff" 
                        type="submit">Criar
                      </Button>
                    </Box>
                  </form>
                </Box>
              </CardBody>
            </ModalBody>
          </Card>
        </ModalContent>
    </Modal>
  );
};


export default FormP;

