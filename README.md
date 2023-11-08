# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span>

## <i align="center" style="font-size:2rem">🤔 CRUD DE USUARIOS CON REACT QUERY</i>


En este proyecto se usaron hooks como **useState,useEffect** , tenologias como  **HTML,CSS,JavaScript,React,SASS** ,para el manejo de estados asincronos **React Query** ,para el manejo de estados **Redux** y herramientas extras como **JSON-SERVER, AXIOS**.

 _Este proyecto fue construido con el proposito de practicar Reduyx y React Query_

<p align="center">
<img width="600px" heigth="600px" src="./src/assets/cat-shock.gif" alt="gato en shock">
</p>

## 💡 Como se penso este proyecto y como funciona

**_<span style="text-decoration:underline">Idea Principal</span>: Un CRUD de usuarios_**

Primero que nada , este proyecto ya fue realizado solo que en esta ocasion agrege **React Query** ,**JSON-SERVER** y **Axios** para la eficiencia de las peticiones

Los 2 principales componentes de esta aplicacion son : **Tabla de usuarios** y **Formulario de usuarios**

Importe el provider,cree la store , uni la store con el provider, cree los 2 reducers primero el de usuarios y segundo el del  formulario.

Los datos para el estado inicial de los Usuarios se obtienen  gracias a React Query mediante una peticion FETCH con Axios hacia el JSON-SERVER . Hay 3 acciones principales de los usuarios : Eliminar un usuario , añadir un usuario y editar un usuario. Para cada accion utilizo una de las funciones que se crearon en la carpeta **helpers** dentro del archivo **fetchActions** , y con el hook de React Query **useMutation** envio estas funciones y el parametro que se le pasa a la funcion mutate es el requerido por las funciones originales 

El estado inicial del formulario corresponde a la misma cantidad de campos que posee formulario , y se lo llama normalmente "forma controlada" ,a  esta forma que aplique para guardar los datos del formulario . Hay 3 acciones princiaples del formularion: Cambiar el formulario, editar el formulario y resetear el formulario.

Para los estilos utilice SASS y Styled Components . Me parecio idea interesante juntar estas 2 tecnologias y la verdad que el resultado me gusto bastante.

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span style="font-size:3rem">ENGLISH:</span>

## <i align="center" style="font-size:2rem">😲 USER CRUD WITH REACT QUERY</i>
 
In this project was used hooks like **useState,useEffect** , technologies like  **HTML,CSS,JavaScript,React,SASS** ,for asynchronous state managment **React Query**, for the state managment **Redux** and extra tools like **JSON-SERVER,AXIOS**

 _This project was built with the purpose of practising  REDUX and React Query_


<p align="center">
<img width="600px" heigth="600px" src="./src/assets/dog-glass.gif" alt="dog with glasses">
</p>

## 🤔 How this project was thinked and how it works

**_<span style="text-decoration:underline">Main Idea</span>: An User CRUD_**


First of all, this project I built in the past but now I added  **React Query** , **JSON-SERVER** and **AXIOS** for efficient requests. 

The two main components of this project are : **Table Crud** and **User Form**

I imported the provider,created the store ,joined the store with the provider . created the 2 reducers , first user reducer and second the form reducer

The data for the user´s initial state Igot it thanks to React Query through a Fetch request with Axios to JSON-SERVER.The user Reducer has three main actions : Remove a user, add a user and edit a user.For each action I used the functions created in the directory **helpers** into  **fetchActions** file , and with  **useMutation** hook  from React Query ,the application  uses these functions and sends the neccesary parameter  for each one.

The initial state for the form has the same quantity of fields that contains the form ,I did the "controled form" to handler the state of this form .It has three main actions : Change the form , edit the form and reset the form.

For the styles i used SASS and Styled Components. I found it very very interesting  to combine these two technologies and there sults were trully good.
