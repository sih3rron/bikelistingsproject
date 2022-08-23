import { Slot } from '@uniformdev/canvas-react';
import Button from './Button';

const Listing = (props) => {
    console.log("HELLO", props);
    return ( 
        <>
            <div className="grid grid-cols-4 w-full text-black">
                <div className="bg-slate-100 rounded-xl p-4 m-4 w-80">
                    <div className="bg-blue-200 p-2 rounded-md">
                        <h4 className="font-bold my-5 mt-0">Big Bike</h4>
                    </div>
                    <div className="mt-5">
                        {/* <Image src={Image} width={312} height={312} alt={name} /> */}
                    </div>
                    <div className="flex">
                        <span className="price font-bold" data-range="1">£1,234,567</span>
                    </div>
                    <div className="flex mt-10 mb-0" >
                        {/* <Button tier="secondary" callToAction="View Details" name="Big Bike" />
                        <Button tier="primary" callToAction="Add to Cart" name="Big Bike" />  */}
                        <Slot name="buttons" />
                    </div>
                    {/* <div>{id}</div> */}
                </div>
            </div>
        </>
    );
}
 
export default Listing;