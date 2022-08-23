import { CanvasClient } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import Listing from '../components/Listing';
import Button from '../components/Button';
import { dataSort } from "../functions/dataSort";

export async function getStaticProps(){

    const client = new CanvasClient({
        apiKey: process.env.UNIFORM_API_KEY,
        projectId: process.env.UNIFORM_PROJECT_ID,
      });
    
    const {composition} = await client.getCompositionById({
      compositionId: "b34b8b1f-eba9-4364-aa57-8462aed7b839",
    })

    return { 
        props: {
          composition,
        },
      }
};

const resolveRenderer = (component) => {
  
  if(component.type === "listing") return Listing;
  if(component.type === "button") return Button;

return null;
}

const BikeListingsPage = (props) => {
  const { composition } = props;
  console.log("LP:", composition);
    return ( 
      <Composition data={composition} resolveRenderer={resolveRenderer}>
        <Slot name="listings" />
      </Composition>
     );
}
 
export default BikeListingsPage;