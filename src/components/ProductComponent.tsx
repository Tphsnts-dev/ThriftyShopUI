"use client"
import { Button } from "./ui/button";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useRouter} from 'next/navigation';

export function ProductComponent() {
  const router = useRouter()
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (values: number[]) => {
    setSliderValue(values[0]);
  };

  const handleButtonClick = (buttonValue: string) => {
    setSelectedButton(buttonValue);
  };
  const handleNavigate = async () => {
    const res = await fetch("/productselection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedButton, sliderValue }),
    });
  
    if (res.ok) {
      router.push("/productselection");
    }
  };
  return (
    <>
      <div>
        <Input
          disabled
          type="number"
          value={sliderValue}
          placeholder="0"
          style={{ position: 'relative', left: '225px', bottom: '260px' }}
        />
        <Slider
          defaultValue={[0]}
          max={10}
          step={1}
          style={{ position: 'relative', left: '225px', bottom: '235px' }}
          onValueChange={handleSliderChange}
        />
      </div>
      <Button
        variant="outline"
        size="icon"
        style={{ position: "relative", left: "225px", bottom: "390px" }}
        onClick={() => handleButtonClick("S")}
        isActive={selectedButton === "S"}
      >
        S
      </Button>
      <Button
        variant="outline"
        size="icon"
        style={{ position: "relative", left: "235px", bottom: "390px" }}
        onClick={() => handleButtonClick("M")}
        isActive={selectedButton === "M"}
      >
        M
      </Button>
      <Button
        variant="outline"
        size="icon"
        style={{ position: "relative", left: "245px", bottom: "390px" }}
        onClick={() => handleButtonClick("L")}
        isActive={selectedButton === "L"}
      >
        L
      </Button>
      <Button
        variant="outline"
        size="icon"
        style={{ position: "relative", left: "255px", bottom: "390px" }}
        onClick={() => handleButtonClick("XL")}
        isActive={selectedButton === "XL"}
      >
        XL
      </Button>
      <Button onClick={handleNavigate} style={{ position: 'relative', left: '300px', bottom: '80px' }}>Add to Cart</Button>
    </>
  );
}



