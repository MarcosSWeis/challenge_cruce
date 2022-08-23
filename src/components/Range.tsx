import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import BtnSee from "./BtnSee";


interface RangeProps {
    setMax: React.Dispatch<React.SetStateAction<number>>,
    setMin: React.Dispatch<React.SetStateAction<number>>,
    max: number,
    min: number,
    cb?: () => void
}
interface Values {
    values: Array<number> | number
}

const FilterRange = styled(Slider)(() => ({
    "& .MuiSlider-thumb": {
        width: '13px',
        marginTop: '-10px',
        borderRadius: '0px',
        border: 'solid 1px #7D5A94',
        backgroundColor: '#7D5A94',
        transform: "skew(15deg, 15deg) rotate(45deg)",
    },
}))

const Range: React.FunctionComponent<RangeProps> = ({ setMax, setMin, max, min }) => {
    const [val, setVal] = useState<Values['values']>([min, max]);
    let minimum = typeof val != "number" ? val[0] : val
    let maximum = typeof val != "number" ? val[1] : val
    setMax(maximum)
    setMin(minimum)

    function handlerChangeRangeMin(event: React.ChangeEvent<HTMLInputElement>) {
        if (typeof val != "number") {
            if (Number(event.target.value) !== val[0]) {
                setVal([Number(event.target.value), val[1]])
            }
        }
    }

    function handlerChangeRangeMax(event: React.ChangeEvent<HTMLInputElement>) {
        if (typeof val != "number") {
            if (Number(event.target.value) !== val[1]) {
                setVal([val[0], Number(event.target.value)])
            }
        }
    }
    return (
        <>
            <div className="containerRange">
                <div className="price-input">
                    <div className="field">
                        <div className="input-group mb-3" >
                            <span className="input-group-text">$</span>
                            <input type="number" name="min" className="input-min form-control" onChange={handlerChangeRangeMin} max={10000} min={1} value={minimum} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-group mb-3" >
                            <span className="input-group-text">$</span>
                            <input type="number" name="max" className="input-max form-control" value={maximum} max={10000} min={1} onChange={handlerChangeRangeMax} />
                        </div>
                    </div>
                </div>
                <div className="mt-0 p-0 ">
                    <BtnSee textRender="Filtrar" marginTop={0} marginBottom={10} />
                </div>
                <div>
                    <FilterRange
                        min={1}
                        max={10000}
                        value={val}
                        onChange={(ev, v) => setVal(v)}
                        /*  onChangeCommitted={(ev, v) => console.log(v)} */
                        valueLabelDisplay="off"
                        aria-labelledby="range-slider"
                        disableSwap
                    />
                </div>
            </div>
        </>
    );
}

export default Range;