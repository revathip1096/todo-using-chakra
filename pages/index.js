import { Inter, Center,Heading, Box, Divider, Button, Card,Text, VStack, HStack, Input, Icons, Spacer, IconButton} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useState } from "react";
export default function Home() {
  const [todo, settodo] =useState("");
  const [values, setvalues] =useState([]);
  const [editing, setEditing] = useState(null);

  const addtodo=() =>{
    if(!editing) {
    setvalues((current)=>[...current,{id:current.length+1, title:todo}])
    settodo("")
    }
    else {
      setvalues((prev) => prev.map((ele) => ele.id === editing ? {...ele, title:todo} : ele));
      settodo("");
      setEditing(null);
    }
  }
  const remove =(id) =>{
    !editing && setvalues((prev)=>prev.filter(todo=>todo.id!==id))
  }
  const edit =(id, title) =>{
    settodo(title);
    setEditing(id);
  }
  return (
    <>
    <Center h='100vh' >
    <Box h='60vh'>
      <VStack>
      <Heading>Todo Application</Heading>
      <Divider />
      <HStack m='4'></HStack>
      <HStack><Input placeholder="Enter your Todo" value={todo} onChange={(e)=>settodo(e.target.value)} />

      <Button onClick={() => addtodo()} colorScheme='blue'>{!editing ? "Add" : "Update"}</Button >
      </HStack>
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
  size="sm"
  icon={<DeleteIcon />}
/>
      </HStack>
      </Card>))}
      </VStack>
    </Box>
</Center> 
        </>
  )}
