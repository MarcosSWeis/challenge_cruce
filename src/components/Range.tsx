import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";


interface RangeProps { }
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

const Range: React.FunctionComponent<RangeProps> = () => {
    const [val, setVal] = useState<Values['values']>([1, 10000]);
    let min = typeof val != "number" ? val[0] : val
    let max = typeof val != "number" ? val[1] : val
    return (
        <>
            <div className="containerRange">
                <div className="price-input">
                    <div className="field">
                        <span>Min</span>
                        <input type="text" name="min" className="input-min" value={min} />
                    </div>
                    <div className="field">
                        <span>Max</span>
                        <input type="number" name="max" className="input-max" value={max} />
                    </div>
                </div>
                <div>
                    <FilterRange
                        min={1}
                        max={10000}
                        value={val}
                        onChange={(ev, v) => setVal(v)}
                        onChangeCommitted={(ev, v) => console.log(v)}
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