import { Inter, Center,Heading, Box, Divider, Button, Card,Text, VStack, HStack, Input, Icons, Spacer, IconButton} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useState } from "react";

const MyTodo = () => {
    const [todo, settodo] =useState("");
  const [values, setvalues] =useState([]);
  const [editing, setEditing] = useState({status:false,id:null});

  const addtodo=(e) =>{
    e.preventDefault();
    if(todo!==""){
        if(!editing.status) {
            setvalues((current)=>[{id:current.length+1, title:todo},...current])
            settodo("")
            }
            else {
              setvalues((prev) => prev.map((ele) => ele.id === editing.id ? {...ele, title:todo} : ele));
              settodo("");
              setEditing({status:false,id:null});
            }
    }
    
    
  }
  const remove =(id) =>{
    setvalues((prev)=>prev.filter(todo=>todo.id!==id))
  }
  const edit =(id, title) =>{
    settodo(title);
    setEditing({status:true,id:id});
  }
  return (
    <>
    <Center h='100vh' >
    <Box h='60vh'>
      <VStack>
      <Heading>Todo Application</Heading>
      <Divider />
      <HStack m='4'></HStack>
      <form onSubmit={addtodo}>
      <HStack><Input placeholder="Enter your Todo" value={todo} onChange={(e)=>settodo(e.target.value)} />
      <Button onClick={(e) => addtodo(e)} colorScheme='blue'>{!editing.status ? "Submit" : "Update"}</Button >
      </HStack>
      </form>
      <Center height='30px'>
      <Divider orientation='vertical' />
      </Center>
     {values.map(({id,title})=>( <Card w="100%" p={2}key={id}>
        <HStack>
      <Text>{title}</Text>
      <Spacer />
      <IconButton 
  colorScheme='green'
  aria-label='Edit' onClick={() => edit(id,title)}
  size="sm"
  icon={<EditIcon />}
/>
<IconButton
  colorScheme='red'
  aria-label='Delete' onClick={() => remove(id)}
  isDisabled={editing.status}
  size="sm"
  icon={<DeleteIcon />}
/>
      </HStack>
      </Card>))}
      </VStack>
    </Box>
</Center> 
        </>
  )
}

export default MyTodo