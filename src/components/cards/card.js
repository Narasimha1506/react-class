import { ImageComponent } from "../images/images.js";
import { Heading1 } from "../heading/heading.js";
import { ListParentOrdered } from "../list/list.js";
import {ButtonComponent} from "../button/button.js"

export const Card = () => {
  return (
    <div>
      <ImageComponent />
      <Heading1 />
      <ListParentOrdered />
      <ButtonComponent />
    </div>
  );
};
