import { cva } from 'class-variance-authority'

const buttonTypes = cva(
    'px-4 py-2',
    {
        variants:{
            filled:{
                type1:'bg-orange-600 text-sm font-bold text-white py-2 cursor-pointer rounded-md hover:bg-orange-700',  
            },
            outlined:{
                type1:'border border-black text-sm  font-medium px-7 cursor-pointer rounded-md',
            }
        },
        defaultVariants:{
            filled:'undefined',
            outlined:'undefined',
        }
    }
);

export function ButtonStore({typeA, typeB, text}){
    return <div>
        <button className={`${buttonTypes({filled:typeA})} ${buttonTypes({outlined:typeB})}`}>{text}</button>
    </div>
}