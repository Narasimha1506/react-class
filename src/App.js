// import ButtonComponent from "./components/button/button.js";
// import { ImageComponent } from "./components/images/images.js";
// import {Heading1} from "./components/heading/heading.js";
// import{ListParentOrdered} from "./components/list/list.js";
import { Card } from "./components/cards/card.js";

const App =() => {
    const wishes ="hii anil"
    return (
        <div>
            {/* <h1>Hello World</h1>
        <ButtonComponent></ButtonComponent>
        <ImageComponent></ImageComponent>
        <Heading1></Heading1>
         <ListParentOrdered></ListParentOrdered> */}
         <h3>{wishes}</h3>
         {[1].map((num,index)=>(<Card key={index}></Card>))}
         {/* {false ? <Card></Card> : null} */}
         {/* {true ? <Card></Card> : null} */}
        
        </div>
    );
}
export default App ;