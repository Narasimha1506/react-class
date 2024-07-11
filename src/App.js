// import ButtonComponent from "./components/button/button.js";
import { ImageComponent } from "./components/images/images.js";
// import {Heading1} from "./components/heading/heading.js";
// import{ListParentOrdered} from "./components/list/list.js";
import { Card } from "./components/cards/card.js";
import { ListParentOrdered } from "./components/list/list.js";
// const App =() => {
//     // const wishes ="hii anil"
//     const isLogin = true
//     if(isLogin){
//         return(
//             <>
//             <h3>IPL TEAMS</h3>
//             {/* <ImageComponent /> */}
//             {/* <Card /> */}
//             <ListParentOrdered/> 
//             </>
//         );
//     }
//     else{
//         return(
//             <>
//             <h3>please acces to the app</h3>
//             </>
//         );
//     }
    // return (
    //     <div>
    //         {/* <h1>Hello World</h1>
    //     <ButtonComponent></ButtonComponent>
    //     <ImageComponent></ImageComponent>
    //     <Heading1></Heading1>
    //      <ListParentOrdered></ListParentOrdered> */}
    //      {/* <h3>{wishes}</h3> */}
    //      {[1].map((num,index)=>(<Card key={index}></Card>))}
    //      {/* {false ? <Card></Card> : null} */}
    //      {/* {true ? <Card></Card> : null} */}
    //     </div>
    // );
   
// }
// export default App ;

// import TableComponent from "./components/Tabel/Tabel.js";
// const App = () =>{
//     return(
//         <TableComponent />
//     )
// }
// export default App;

const App = () =>{
    return(
        <>
        <h1>IPL TEAMS </h1>
        <ListParentOrdered />
        </>
    );
};
export default App;